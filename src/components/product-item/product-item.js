import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentProduct } from '../../redux/products/reducer'
import { ProductBuy } from '../product-buy'
import { ProductCover } from '../product-cover'
import { ProductVendor } from '../product-vendor/product-vendor'
import './product-item.css'

export const ProductItem = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentProduct(product))
    navigate(`/app/${product.title}`);
}
  return (
    <div className='product-item' onClick={ handleClick}>
      <ProductCover image={product.image} />
      <div className='product-item_details'>
        <span className='product-item_title'>
          {product.title}
        </span>
        <div className='product-item_vendor'>
          {product.vendor.map((vendor) => <ProductVendor vendor={vendor} key={vendor} />)}
        </div>
        <div className='product-item_buy'>
          <ProductBuy product={product} />
        </div>
      </div>
    </div>
  )
}
