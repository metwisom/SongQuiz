// import {prisma} from '@/internal/prisma';
//
//
// const getAlbumIdByName = async function (albumName: string, artistId: bigint, createOnFail = false): Promise<bigint | null> {
//   let albumFind = await prisma.album.findFirst({
//     where: {
//       title: albumName,
//       artist_fk: artistId,
//     },
//   });
//
//   if (albumFind === null && createOnFail) {
//     albumFind = await prisma.album.create({
//       data: {
//         title: albumName,
//         artist_fk: artistId,
//       },
//     });
//   }
//   return albumFind ? albumFind.id : null;
// };
//
// export {getAlbumIdByName};