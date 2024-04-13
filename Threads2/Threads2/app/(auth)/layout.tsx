
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css';
import { SignIn } from "@clerk/clerk-react";
export const metadata ={
    title: 'Threads' , 
    description: 'A Next.js 13 Meta Threads Application'
    
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
})   {
   return(
    <ClerkProvider publishableKey='pk_test_bGlrZWQtd2hhbGUtOTUuY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>

        </html>

    </ClerkProvider>
   )
}
