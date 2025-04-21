// import { SignUpForm } from '@/components/auth/SignUpForm'
import SignInForm from '@/components/SignInForm'
// import { useSession } from 'next-auth/react'
import React from 'react'

const SignIn = () => {
  // const session = useSession()
  // console.log(session)
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn
