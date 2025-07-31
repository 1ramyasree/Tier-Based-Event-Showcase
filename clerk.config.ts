import type { ClerkProviderProps } from '@clerk/nextjs'

const clerkConfig: ClerkProviderProps = {
  signInUrl: '/sign-in',
  signUpUrl: '/sign-up',
  afterSignInUrl: '/events',
  afterSignUpUrl: '/events',
}

export default clerkConfig
