import type { NextApiRequest, NextApiResponse } from 'next';
import { CAR_LIST } from '../../constants/carsConstants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log(req.method);
  if (req.method === 'GET') {
    res.status(200).json(CAR_LIST.slice(0, 5));
  } else {
    console.warn('Failed to fetch');
  }
}
