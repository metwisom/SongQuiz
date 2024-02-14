import {prisma} from '@/internal/prisma';

const addTrack = function (title: string, artist: string, album: string, track: string, genre: string, year: Date | null = null, url: string) {

  return prisma.track.create({
    data: {
      title: title,
      url: url,
      genre: {
        connectOrCreate: {
          where: {
            title: genre,
          },
          create: {
            title: genre,
          },
        },
      },
      album: {
        connectOrCreate: {
          where: {
            title: album,
          },
          create: {
            title: album,
            year: year,
          },
        },
      },
      track2Artist: {
        create: {
          artist: {
            connectOrCreate: {
              where: {
                title: artist,
              },
              create: {
                title: artist,
              },
            },
          },
        },
      },
    },
  });

};

export {addTrack};