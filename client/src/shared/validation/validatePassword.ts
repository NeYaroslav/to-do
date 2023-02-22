import { FieldError } from "react-hook-form"

const validatePassword = (password: string): FieldError | undefined => {
  if(password.length === 0) return {
    type: 'required',
    message: 'Password required'
  }
  if(/^[\w!?@#$%^&*.~-]+$/.test(password) === false) return {
    type: 'pattern',
    message: 'Password cannot contain some of the characters'
  }
  if(password.length < 8) return {
    type: 'min',
    message: 'Password must be at least 8 characters'
  }
  if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/.test(password) === false) return {
    type: 'pattern',
    message: 'Password must contain at least one digit, capital, lowercase letters from the Latin alphabet'
  }
  if(password.length > 16) return {
    type: 'max',
    message: 'Password must be at most 16 characters'
  }
  return undefined
}

export default validatePassword