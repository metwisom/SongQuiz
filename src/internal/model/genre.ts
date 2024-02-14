import {prisma} from '@/internal/prisma';


const getGenreIdByName = async function (genreName: string, createOnFail = false): Promise<bigint | null> {
  let genreFind = await prisma.genre.findFirst({
    where: {
      name: genreName,
    },
  });

  if (genreFind === null && createOnFail) {
    genreFind = await prisma.genre.create({
      data: {
        name: genreName,
      },
    });
  }
  return genreFind ? genreFind.id : null;
};

export {getGenreIdByName}