import { Resolver } from 'react-hook-form'
import { validatePassword, validateUsername, FormErrors } from '../../../shared/validation'
import { FormFields } from "./SignInForm"


const resolver: Resolver<FormFields, FormErrors<FormFields>> = async (values) => {
  const errors:FormErrors<FormFields> = {}
  const initalValues:FormFields = {
    password: '',
    username: ''
  }

  const usernameError = validateUsername(values.username)
  const passwordError = validatePassword(values.password)

  if(usernameError) errors.username = usernameError
  if(passwordError) errors.password = passwordError

  return {
    values: values.username? values: initalValues,
    errors: errors,
  }
}
export default resolver