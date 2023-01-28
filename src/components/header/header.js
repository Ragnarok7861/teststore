import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { CartBlock } from '../cart-block'

export const Header=() => {
  return (
    <div className='header'>
        <div className='wrapper'>
            <Link to ="/" className='header_store-title'>
                ETMStore
            </Link>
        </div>
        <div className='wrapper header_cart-btn-wrapper'>
            <CartBlock/>
        </div>
        </div>
  )
}
