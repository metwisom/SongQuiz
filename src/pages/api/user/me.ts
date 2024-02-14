import type {NextApiRequest, NextApiResponse} from 'next';
import ResponseData from '@/internal/ResponseData';

type NewUserResponse = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<NewUserResponse>>,
) {
  if (req.method === 'GET') {
    res.status(200).json({data: {}});
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Метод ${req.method} не разрешен. Используйте метод GET.`);
  }
}