import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../header/utils'
import { OrderItem } from '../order-item'

import './order-page.css'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h1>Your cart is empty</h1>
    }
  return (
    <div className='order-page'>
        <div className='order-page_left'>
            {items.map((product) => <OrderItem product={product} key={product}/>)}
        </div>
        <div className='order-page_right'>
            <div className='order-page_total-price'>
                <span>
                 {items.length} Products in the amount of {calcTotalPrice(items)} RUB
                </span>
            </div>
        </div>
    </div>
  )
}
