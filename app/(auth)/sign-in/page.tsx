'use client'

import AuthForm from '@/components/AuthForm'
import { signInWithCredentials } from '@/lib/actions/auth'
import { signInSchema } from '@/lib/validations'


const SignIn = () => {
  return (
    <AuthForm
      type='SIGN_IN'
      schema={signInSchema}
      defaultValues={{
        email: 'hello@calel.dev',
        password: 'arcf133x'
      }}
      onSubmit={signInWithCredentials}
    />
  )
}

export default SignIn