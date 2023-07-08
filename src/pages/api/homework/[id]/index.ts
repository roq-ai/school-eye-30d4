import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { homeworkValidationSchema } from 'validationSchema/homework';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.homework
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getHomeworkById();
    case 'PUT':
      return updateHomeworkById();
    case 'DELETE':
      return deleteHomeworkById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHomeworkById() {
    const data = await prisma.homework.findFirst(convertQueryToPrismaUtil(req.query, 'homework'));
    return res.status(200).json(data);
  }

  async function updateHomeworkById() {
    await homeworkValidationSchema.validate(req.body);
    const data = await prisma.homework.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteHomeworkById() {
    const data = await prisma.homework.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
