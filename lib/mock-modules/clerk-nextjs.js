// Mock Clerk modules for when Clerk is not configured
// This prevents the Clerk library from being initialized on the server

export const SignIn = () => null
export const SignUp = () => null
export const SignInButton = () => null
export const SignOutButton = () => null
export const SignedIn = () => null
export const SignedOut = () => null
export const UserButton = () => null
export const UserProfile = () => null
export const useUser = () => ({ isLoaded: true, isSignedIn: false, user: null })
export const ClerkProvider = ({ children }) => children
export const getAuth = () => ({ userId: null })
export const clerkMiddleware = () => (req, ev) => ({ next: () => ({}) })
export const createRouteMatcher = (routes) => (req) => false