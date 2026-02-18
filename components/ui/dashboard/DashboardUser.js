import dynamic from 'next/dynamic'

const UserProfile = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  ? dynamic(() => import('@clerk/nextjs').then(m => m.UserProfile))
  : null
/**
 * 控制台用户账号面板
 * @returns
 */
export default function DashboardUser() {
  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!enableClerk) {
    return null
  }
  return (
    <UserProfile
      appearance={{
        elements: {
          cardBox: 'w-full',
          rootBox: 'w-full'
        }
      }}
      className='bg-blue-300'
      routing='path'
      path='/dashboard/user-profile'
    />
  )
}
