import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { dark } from '@clerk/themes';
 
const{VITE_CLERK_PUBLISHABLE_KEY} = import.meta.env
const publishableKey = VITE_CLERK_PUBLISHABLE_KEY

export default function RootLayout() {
  const navigate = useNavigate();
  
  return (
    <ClerkProvider navigate={navigate} publishableKey={publishableKey} appearance={{
        baseTheme: dark
      }} >
      <header className="header">
        <div>
          <div>
            <p>Clerk + React + React Router App</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}