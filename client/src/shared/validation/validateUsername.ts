import { FieldError } from "react-hook-form"

const validateUsername = (username: string): FieldError | undefined => {
  if(username.length === 0)return {
    type: 'required',
    message: 'Username required'
  }
  if(/^[a-zA-Z]\w+$/g.test(username) === false) return {
    type: 'pattern',
    message: 'Username must starts with a character from the Latin alphabet, can contain digits and underscore'
  }
  if(username.length < 3) return {
    type: 'min',
    message: 'Username must be at least 3 characters'
  }
  if(username.length > 32) return {
    type: 'max',
    message: 'Username must be at most 32 characters'
  }
  return undefined
}
export default validateUsername