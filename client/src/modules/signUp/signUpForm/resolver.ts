import { Resolver } from 'react-hook-form'
import { FormErrors, validateConfirmedPassword, validateFullName, validatePassword, validateUsername } from '../../../shared/validation'
import { FormFields } from "./SignUpForm"

const resolver: Resolver<FormFields, FormErrors<FormFields>> = async (values) => {
  const errors:FormErrors<FormFields> = {}
  const initalValues:FormFields = {
    confirmedPassword: '',
    name: '',
    password: '',
    username: ''
  }

  const usernameError = validateUsername(values.username)
  const nameError = validateFullName(values.name)
  const passwordError = validatePassword(values.password)
  const confirmedPasswordError = validateConfirmedPassword(values.password ,values.confirmedPassword)

  if(usernameError) errors.username = usernameError
  if(nameError) errors.name = nameError
  if(passwordError) errors.password = passwordError
  if(confirmedPasswordError) errors.confirmedPassword = confirmedPasswordError

  return {
    values: values.name? values: initalValues,
    errors: errors,
  }
}
export default resolver