import React from 'react'
import { Button } from '../button'
import { CartItem } from '../cart-item'
import { calcTotalPrice } from '../header/utils'
import './cart-menu.css'

export const CartMenu = ({items, onClick}) => {
  return (
    <div className='cart-menu'>
        <div classNames='cart-menu_product-list'>
            {
              items.length > 0 ?  items.map((product) =>(
                <CartItem
                key={product.image}
                price={product.price}
                title={product.title}
                id={product.id}
                />
              ))
              :'Cart empty'
            }
        </div>
        {
            items.length > 0 ?
            <div className='cart-menu_arrange'>
                <div className='cart-menu_total-price'>
                    <span>Total</span>
                    <span>{calcTotalPrice(items)} RUB</span>
                    </div>
                    <Button type='primary' size='m' onClick={onClick}>
                        Checkout
                    </Button>
            </div>
            : null

        }

     
    </div>
  )
}
