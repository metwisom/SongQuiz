// import {prisma} from '@/internal/prisma';
//
//
// const getArtistIdByName = async function (artistName: string, createOnFail = false): Promise<bigint | null> {
//   let artistFind = await prisma.artist.findFirst({
//     where: {
//       title: artistName,
//     },
//   });
//
//   if (artistFind === null && createOnFail) {
//     artistFind = await prisma.artist.create({
//       data: {
//         title: artistName,
//       },
//     });
//   }
//   return artistFind ? artistFind.id : null;
// };
//
// export {getArtistIdByName}