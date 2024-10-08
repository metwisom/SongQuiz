import type {NextApiRequest, NextApiResponse} from 'next';

import formidable from 'formidable';
import jsmediatags from 'jsmediatags';
import {addTrack} from '@/internal/model/track';
import * as fs from 'fs';
import crypto from 'crypto';
import {execFile, ExecFileException} from 'child_process';

export const config = {
  api: {
    bodyParser: false,
  },
};

type ResponseData = {
  message?: string
  error?: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'POST') {
    const form = formidable();


    new Promise<ResponseData>((resolve, reject) => {

      form.parse(req, (err, fields, files) => {
        if (err) {
          return reject({message: 'Произошла ошибка при загрузке файла', error: err});
        }

        if (files.sound != undefined) {

          console.log('Получено файлов: ' + files.sound.length);

          const promises = files.sound.map((file, file_number) =>
            new Promise((resolve_file, reject_file) => {

              console.log('[' + file_number + ']: Старт');
              jsmediatags.read(file.filepath, {
                onSuccess: async function (tag) {
                  const title = tag.tags.title || '';
                  const artist = tag.tags.artist || '';
                  const album = tag.tags.album || '';
                  const track = tag.tags.track || '';
                  const genre = tag.tags.genre || '';
                  const year = new Date();
                  if (tag.tags.year) {
                    year.setFullYear(parseInt(tag.tags.year), year.getMonth(), year.getDate());
                  }

                  const name = Math.random().toString() + new Date().valueOf()

                  console.log('[' + file_number + ']: Записано в базу ' + name);

                  const md5 = crypto.createHash('md5').update(name).digest('hex');


                  const format = file.originalFilename?.split('.').pop();

                  const newPath = './public/files/' + md5 + '.' + format;

                  fs.rename(file.filepath, newPath, (err) => {
                    if (err) {
                      reject({error: 'Произошла ошибка при перемещении файла'});
                      return;
                    }

                    console.log('[' + file_number + ']: Переместили файл в files');


                    const {execFile} = require('child_process');
                    const args = ['-i', newPath, '-ar', '44100', '-ac', '1', '-ab', '192 ', '-f', 'mp3', './public/files/' + md5 + '.mp3']; // Аргументы запуска программы
                    const childProcess = execFile('ffmpeg.exe', args, (error:(ExecFileException | null), stdout: string, stderr: string) => {
                      if (error) {
                        reject_file('fail');
                        console.error('Произошла ошибка при запуске программы:', error);
                        return;
                      }
                    });
                    childProcess.on('exit', async (code:string) => {

                      console.log('[' + file_number + ']: ffmepeg отработал');

                      const a = await addTrack(title, artist, album, track, genre, year,'/files/' + md5 + '.mp3');

                      fs.unlink(newPath, () => {
                        console.log('[' + file_number + ']: Удален файл');
                      });
                      resolve_file(a.id);
                    });
                  });

                },
                onError: function (error) {
                  console.log(':(', error.type, error.info);
                },
              });
            }),
          );

          Promise.all(promises).then(e => {
            resolve({message: 'Все файлы обработаны'});
          });

        }

      });

    }).then(e => {
      res.status(200).json(e);
    }).catch(e => {
      res.status(500).json(e);
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен. Используйте метод POST.`);
  }
}