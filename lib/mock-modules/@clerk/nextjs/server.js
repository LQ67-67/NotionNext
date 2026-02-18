// Mock Clerk server modules
export const getAuth = () => ({ userId: null })
export const clerkMiddleware = () => (req, ev) => ({ next: () => ({}) })
export const createRouteMatcher = (routes) => (req) => false