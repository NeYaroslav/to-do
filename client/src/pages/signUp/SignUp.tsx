import React from 'react'
import { SignUpForm } from '../../modules/signUp'
import { FormLink } from '../../ui'
import './style.scss'

const SignUp: React.FC = () => {

  return (
    <main className='sign-up'>
      <div className="sign-up__wrapper">
        <h1 className='sign-up__title'>Sign up to a new account</h1>
        <SignUpForm/>
        <p className='sign-up__messgage'>Do you have an account? <FormLink to="/">Sign In</FormLink></p>
      </div>
    </main>
  )
}

export default SignUp