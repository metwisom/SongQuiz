import type {NextApiRequest, NextApiResponse} from 'next';
import ResponseData from '@/internal/ResponseData';
import {Users} from '@/internal/model/user';


type NewUserResponse = {
  id?: number
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

    if (await Users.checkUsernameExists(incomeData.login)) {
      return res.status(409).json({data: {}, error: 'user_already_exist'});
    }

    const newUser = await Users.createUser(incomeData.login, incomeData.password);

    res.status(200).json({data: {id: Number(newUser.id)}});

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен. Используйте метод POST.`);
  }
}