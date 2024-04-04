import React from 'react'
import { SignUp } from '@clerk/nextjs'
const SignUpPage = () => {
  return (
    <main className='h-screen flex items-center w-full justify-center'>
        <SignUp />
    </main>
  )
}

export default SignUpPage
