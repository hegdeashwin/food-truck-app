import type { NextApiRequest, NextApiResponse } from 'next'
import constants from '@/app/constants'

type healthResponse = {
  acknowledge: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<healthResponse>
) {
  if (req.method === 'GET') {
    return res.status(constants.HTTP_STATUS_CODE.OK).send({ acknowledge: true })
  }
  return res
    .status(constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
    .send({ acknowledge: false })
}
