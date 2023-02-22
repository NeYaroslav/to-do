import React, { memo } from 'react'
import { FormButton, FormInput, FormPasswordInput } from '../../../ui'
import { useForm, SubmitHandler } from 'react-hook-form'
import resolver from './resolver'
import WarningIcon from 'remixicon-react/ErrorWarningLineIcon'
import './style.scss'


export interface FormFields {
  username: string
  name: string
  password: string
  confirmedPassword: string
}
const SignUpForm: React.FC = () => {
  
  const { handleSubmit, getValues ,register, watch,
    formState: {errors: {
      password: passwordError, 
      username: usernameError,
      confirmedPassword: confirmedPasswordError,
      name: nameError
    }, dirtyFields} 
  } = useForm<FormFields>( {resolver} )

  const currentError = nameError ?? usernameError ?? passwordError ?? confirmedPasswordError ?? null

  const submitHandler: SubmitHandler<FormFields> = values => {
    console.log(values.password);
    console.log(values.username);
  }

  return (
    <form className='sign-up-form' onSubmit={handleSubmit(submitHandler)}>
      <FormInput
        id='name' 
        placeholder='Full name'
        isDirty={dirtyFields.name}
        {...register('name')}
      />
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
      <FormPasswordInput
        id='confirmedPassword'
        placeholder='confrim password'
        isDirty={dirtyFields.confirmedPassword}
        {...register('confirmedPassword')}
      />
      {currentError && 
      <p className='sign-in-form__error'>
        <WarningIcon size={14} className="error-icon"/> {currentError?.message}
      </p>}
      <FormButton type='submit' style={buttonStyle}>Sign Un</FormButton>
    </form>
  )
}
export default memo(SignUpForm)

const buttonStyle = {marginTop: '14px'}
