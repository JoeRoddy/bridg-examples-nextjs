import type { NextApiRequest, NextApiResponse } from 'next';

import db from 'prisma/db';
import { handleRequest } from 'bridg/app/server/request-handler';
import { dbRules } from '@/pages';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Mock authentication, replace with any auth system you want.
  const userId = 'cld4ar9fg000clfd96gujbblu';
  const { data, status } = await handleRequest(req.body, { db, uid: userId, rules: dbRules });

  return res.status(status).json(data);
}
