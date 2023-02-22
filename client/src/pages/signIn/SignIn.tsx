import React from 'react'
import { SignInForm } from '../../modules/signIn'
import { FormLink } from '../../ui'
import './style.scss'

const SignIn: React.FC = () => {

  return (
    <main className='sign-in'>
      <div className="sign-in__wrapper">
        <h1 className='sign-in__title'>Sign in to your account</h1>
        <SignInForm/>
        <p className='sign-in__messgage'>Don't you have an account yet? <FormLink to="/sign-up">Sign Up</FormLink></p>
      </div>
    </main>
  )
}

export default SignIn