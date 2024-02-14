import {prisma} from '@/internal/prisma';


const Users = (() => {


  return Object.freeze({
    async checkUsernameExists(userName: string) {
      const data = await prisma.user.findFirst({
        where: {
          login: userName,
        },
      });
      return data !== null;
    },
    createUser(login: string, password: string) {
      return prisma.user.create({
        data: {login, password},
      });
    },
    getUser(login: string, password: string) {
      return prisma.user.findFirst({
        where: {login, password},
      });
    },
  });
})();

export {Users};