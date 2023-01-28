import classNames from 'classnames'
import React from 'react'
import './button.css'

export const Button =({
    onClick,
    type,
    children,
    size = 's'

}) => {
    const btnCllass = classNames({
        'btn': true,
        'btn-secondary':type ==='secondary',
        'btn-primary':type === 'primary',
        'btn-small':size === 's',
        'btn-medium':size === 'm'
    })
  return (
    <button className={btnCllass} onClick={onClick}>
        {children}
    </button>
  )
}
