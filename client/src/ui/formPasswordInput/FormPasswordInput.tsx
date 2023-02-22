import React, { forwardRef, memo, useState } from 'react'
import './style.scss'
import EyeIcon from 'remixicon-react/EyeLineIcon'
import ClosedEyeIcon from 'remixicon-react/EyeOffLineIcon'

interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> {
  id: string,
  isDirty?: boolean | undefined
}

const FormPasswordInput = forwardRef<HTMLInputElement, Props>(({ placeholder, id, style, isDirty, ...rest}, ref) => { 
  const [isShownPassword, setIsShownPassword] = useState(false)

  const togglePasswordState = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setIsShownPassword(prevState => !prevState)
  }

  return (
    <label
      className={`form-password-input ${ isDirty === true? 'filled': ''}`}
      htmlFor={id}
      style={style}
    >
      <div>
        <input type={isShownPassword? 'text': 'password'} ref={ref} id={id} {...rest}/>
        <span>{placeholder}</span>
        <button className="show-password-btn" onClick={togglePasswordState}>
          {isShownPassword? <ClosedEyeIcon size={16}/>:  <EyeIcon size={16}/>}
        </button>
      </div>
    </label>
  )
})

export default memo(FormPasswordInput)