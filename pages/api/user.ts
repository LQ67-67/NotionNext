import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Clerk 身份测试
 * @param req
 * @param res
 * @returns
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 如果没有配置 Clerk 相关环境变量，返回错误
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return res.status(401).json({ error: 'Unauthorized - Clerk not configured' })
  }

  // 静态导入 Clerk getAuth - 当 Clerk 未配置时会被 webpack 替换为 mock
  const { getAuth } = await import('@clerk/nextjs/server')
  const { userId } = getAuth(req)

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Retrieve data from your database
  res.status(200).json({ userId })
}
