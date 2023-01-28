import React from 'react'
import { useDispatch } from 'react-redux'
import {AiFillCloseSquare} from 'react-icons/ai'
import { ProductCover } from '../product-cover'
import './order-item.css'
import { deleteFromCart } from '../../redux/cart/reducer'

export const OrderItem = ({product}) => {
    const dispatch = useDispatch()
    const handleClick =() =>{
        dispatch(deleteFromCart(product.id))
    }
  return (
    <div className='order-item'>
    <div className='order-item_cover'>
        <ProductCover image={product.image}/>
    </div>
    <div className='order-item_title'>
        <span>{product.title}</span>
    </div>
    <div className='order-item_price'>
        <span>{product.price} RUB</span>
        <AiFillCloseSquare
        size={25}
        className='cart-item_delete-icon'
        onClick={handleClick}
        />
    </div>
   </div>
  )
}
