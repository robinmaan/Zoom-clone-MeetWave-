import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SignInPage = () => {
  return (
    <main className='h-screen flex items-center w-full justify-center'>
        <SignIn />
    </main>
  )
}

export default SignInPage
