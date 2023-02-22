import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import ArrowIcon from 'remixicon-react/ArrowRightLineIcon'
import './style.scss'

interface Props extends Omit<LinkProps, 'className'> {
  children: React.ReactNode
}

const FormLink: React.FC<Props> = ({children ,...rest}) => {
  return (
    <Link className='form-link' {...rest}>
      {children}
      <ArrowIcon size={16} className="form-link__icon"/>
    </Link>
  )
}

export default FormLink