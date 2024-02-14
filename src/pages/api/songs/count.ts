import type {NextApiRequest, NextApiResponse} from 'next';
import {prisma} from '@/internal/prisma';
import ResponseData from '@/internal/ResponseData';


type CountResponse = {
  count: number
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<CountResponse>>,
) {
  if (req.method === 'GET') {
    const count = await prisma.track.count();
    res.status(200).json({data: {count: count}});
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Метод ${req.method} не разрешен. Используйте метод POST.`);
  }
}