import { FieldError } from "react-hook-form"

const validateConfirmedPassword = (password: string, confirmedPassword: string): FieldError | undefined => {
  if(confirmedPassword.length === 0) return {
    type: 'required',
    message: 'Confirm password field required'
  }
  if(confirmedPassword !== password) return {
    type: 'validate',
    message: 'Passwords do not match'
  }
  return undefined
}

export default validateConfirmedPassword