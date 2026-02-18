// Mock Clerk components
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