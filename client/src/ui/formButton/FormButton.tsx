import React, { memo, useEffect, useRef } from 'react'
import './style.scss'

interface Props extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
  children: React.ReactNode
}

const FormButton: React.FC<Props> = ({children, ...rest}) => { 
  const buttonRef = useRef<HTMLButtonElement>(null)

  const mouseClickHandler = (e: MouseEvent) => {
    if(buttonRef.current?.clientWidth === undefined) return
    const decor = document.createElement('span')
    const decorSize = Math.max(buttonRef.current?.clientWidth, buttonRef.current?.clientHeight) + 'px'

    buttonRef.current?.appendChild(decor)
    decor.classList.add('decor')
    decor.style.top = e.offsetY + 'px'
    decor.style.left = e.offsetX + 'px'
    decor.style.width = decorSize 
    decor.style.height = decorSize
    decor.addEventListener('animationend', () => {
      buttonRef.current?.removeChild(decor)
    })
  }

  useEffect(() => {
    if(buttonRef.current?.disabled !== true) {
      buttonRef.current?.addEventListener('click', mouseClickHandler)
    }

    return () => {
      buttonRef.current?.removeEventListener('click', mouseClickHandler)
    }
  }, [])
  
  return (
    <button className='form-button' ref={buttonRef}  {...rest}>{children}</button>
  )
}

export default memo(FormButton)