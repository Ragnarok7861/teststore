import React from 'react'
import { useSelector } from 'react-redux'
import { ProductBuy } from '../../components/product-buy';
import { ProductVendor } from '../../components/product-vendor';
import './product-page.css'

export const ProductPage = () => {
    const product = useSelector(state => state.products.currentProduct);

    if (!product) return null
    return (
        <div className='product-page'>
            <div className='product-page_title'>
                <h1 className='product-page_title'>{product.title}</h1>
                <div className='product-page_content'>
                    <div className='product-page_left'></div>
                    <iframe
                        width='500px'
                        height='500px'
                        src={product.image}
                        frameBorder='5'
                    ></iframe>
                   </div>
                   <div className='product-page_right'>
                    <p className='secondary-text'>Product vendor</p>
                    {product.vendor.map((vendor)=>(
                        <ProductVendor vendor={vendor} key={vendor} />
                    ))}
                    <div className='product-page_buy-product'>
                        <ProductBuy product={product}/>
                    </div>
                   </div>
            </div>

        </div>
    )
}
