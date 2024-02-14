import {NextRequest} from 'next/server';
import * as jose from 'jose';

const Auth = (() => {
  const secret = new TextEncoder().encode(process.env.SECRET);
  const alg = 'HS256';

  return Object.freeze({
    isAuthenticated: async (request: NextRequest) => {
      const jwt = request.headers.get('Authorization');
      if (jwt === null) {
        return false;
      }
      let token = jwt.split(' ').pop();
      console.log(token)
      if(token) {
        return await jose.compactVerify(token, secret)
        .then(e => true)
        .catch(e => false);
      }
    },
    createToken: async (user_id: bigint) => {
      return new jose.SignJWT({'userId': Number(user_id)})
      .setProtectedHeader({alg})
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(secret);
    },
  });
})();

export {Auth};
