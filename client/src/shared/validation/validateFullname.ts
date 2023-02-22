import { FieldError } from "react-hook-form"

const validateFullName = (fullname: string): FieldError | undefined => {
  if(fullname.length === 0) return {
    type: 'required',
    message: 'Full name required'
  }
  if(/^[a-z]+ [a-z]+$/i.test(fullname) === false) return {
    type: 'pattern',
      message: 'Full name must contain two words using only characters from the Latin alphabet'
  }
  if(fullname.length < 5) return {
    type: 'min',
    message: 'Full name must be at least 3 characters'
  }
  if(fullname.length > 30) return {
    type: 'max',
    message: 'Full name must be at most 32 characters'
  }
  return undefined
}

export default validateFullName