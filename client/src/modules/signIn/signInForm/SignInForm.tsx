import React, { memo } from 'react'
import { FormButton, FormInput, FormPasswordInput } from '../../../ui'
import { useForm, SubmitHandler } from 'react-hook-form'
import resolver from './resolver'
import WarningIcon from 'remixicon-react/ErrorWarningLineIcon'
import './style.scss'

export interface FormFields {
  username: string
  password: string
}
const SignInForm: React.FC = () => {

  const { handleSubmit, getValues ,register, watch, formState: {errors: {
    password: passwordError,
    username: usernameError
  }, dirtyFields }} = useForm<FormFields>( {resolver} )

  const currentError = usernameError ?? passwordError ?? null

  const submitHandler: SubmitHandler<FormFields> = values => {
    console.log(values.password);
    console.log(values.username);
  }

  return (
    <form className='sign-in-form' onSubmit={handleSubmit(submitHandler)}>
      <FormInput
        id='username' 
        placeholder='Username'
        isDirty={dirtyFields.username}
        {...register('username')}
      />
      <FormPasswordInput
        id='password'
        placeholder='Password'
        isDirty={dirtyFields.password}
        {...register('password')}
      />
      {currentError && 
      <p className='sign-in-form__error'>
        <WarningIcon size={14} className="error-icon"/> {currentError?.message}
      </p>}
      <FormButton type='submit' style={buttonStyle}>Sign In</FormButton>
    </form>
  )
}
export default memo(SignInForm)

const buttonStyle = {marginTop: '14px'}
