import React, { useCallback, useState } from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { calcTotalPrice } from '../header/utils'
import { CartMenu } from '../cart-menu'
import { ItemsInCart } from '../items-in-cart'



export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
     }, [navigate])
    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BiCartAlt size={25} className='cart-block_icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {totalPrice > 0 ?
                <span className='cart-block_total-price'>{totalPrice} RUB</span>
                : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}

        </div>
    )
}
