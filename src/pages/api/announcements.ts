import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { Announcement } from '@/types/announcements';
import path from 'path';



export default function handler(req: NextApiRequest, res: NextApiResponse<Announcement[]>) {
  try {
    console.log(process.cwd());
    const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'data', 'announcements.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData: Announcement[] = JSON.parse(fileData);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    res.status(500).json([]);
  }
}
