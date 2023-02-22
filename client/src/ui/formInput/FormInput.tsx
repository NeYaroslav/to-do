import React, { forwardRef, memo, useEffect } from 'react'
import './style.scss'

interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> {
  id: string
  isDirty?: boolean | undefined
}

const FormInput = forwardRef<HTMLInputElement, Props>(({ placeholder, id, style, isDirty, ...rest}, ref) => {

  return (
    <label
      className={`form-input ${isDirty === true? 'filled': ''}`}
      htmlFor={id}
      style={style}
    >
      <input type="text" id={id} ref={ref} {...rest}/>
      <span>{placeholder}</span>
    </label>
  )
})

export default memo(FormInput)