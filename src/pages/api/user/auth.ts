import type {NextApiRequest, NextApiResponse} from 'next';
import ResponseData from '@/internal/ResponseData';
import {Users} from '@/internal/model/user';
import {Auth} from '@/lib/auth';


type NewUserResponse = {
  token?: string
}

type NewUserRequest = {
  login: string
  password: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<NewUserResponse>>,
) {
  if (req.method === 'POST') {
    const incomeData = req.body as NewUserRequest;

    const user = await Users.getUser(incomeData.login, incomeData.password);
    if (user === null) {
      return res.status(404).json({data: {}, error: 'user_not_found'});
    }

    const newToken = await Auth.createToken(user);


    res.status(201).json({data: {token: newToken}});

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен. Используйте метод POST.`);
  }
}