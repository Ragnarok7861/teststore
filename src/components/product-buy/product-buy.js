import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../button'
import './product-buy.css'

export const ProductBuy = ({product}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === product.id)
  const handleClick =(e) =>{
    e.stopPropagation();
    if(isItemInCart){
      dispatch(deleteFromCart(product.id))
      
    }else{
      dispatch(setItemInCart(product))
    }
    
  }
  return (
    <div className='product-buy'>
        <span className='product-buy_price'>{product.price} RUB</span>
        <Button onClick={handleClick} type = {isItemInCart ? 'secondary' : 'primary'}>
          {isItemInCart ? 'Remove from cart': 'In Cart'}
        </Button>
    </div>
  )
}
