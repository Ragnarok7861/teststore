import React from 'react'
import './home-page.css'
import {ProductItem} from '../../components/product-item/'

const PRODUCTS =[{
             id: 1,
            title: 'Circuit breaker 10A',
            image:'/image/Screenshot_1.png',
            vendor: ['ABB'],
            pack: 100,
            price: 1500
        },
    {
            id: 2,
            title: 'Circuit breaker 20A',
            image:'/image/Screenshot_3.png',
            vendor: ['ABB'],
            pack: 100,
            price: 1500
        },
    {
            id: 3,
            title: 'Metal body',
            image:'/image/Screenshot_4.png',
            vendor: ['ABB'],
            pack: 1,
            price: 6800
        },
    {
            id: 4,
            title: 'Plastic body',
            image:'/image/Screenshot_5.png',
            vendor: ['IEK'],
            pack: 1,
            price: 1200
        },
    {
            id: 5,
            title: 'Copper bus МТ 60х8',
            image:'/image/Screenshot_6.png',
            vendor: ['DKC'],
            pack: 1,
            price: 1200
        },
    {
            id: 6,
            title: 'DLP Cable channel 105x50',
            image:'/image/Screenshot_7.png',
            vendor: ['DKC'],
            pack: 1,
            price: 350
        },
    {
            id: 7,
            title: 'DLP Cable channel 80x50',
            image:'/image/Screenshot_8.png',
            vendor: ['DKC'],
            pack: 1,
            price: 300
        },
    {
            id: 8,
            title: 'ETUDE One-gang switch',
            image:'/image/Screenshot_9.png',
            vendor: ['Schneider Electric'],
            pack: 1,
            price: 85
        },
    {
            id: 9,
            title: 'Contactor E 12A control coil 220V',
            image:'/image/Screenshot_10.png',
            vendor: ['Schneider Electric'],
            pack: 1,
            price: 3800
        },
    {
            id: 10,
            title: 'Tray for lighting systems',
            image:'/image/Screenshot_11.png',
            vendor: ['Schneider Electric'],
            pack: 1,
            price: 1859
        }
    ]

 export const HomePage = ()=> {
  return (
    <div className="home-page">
        {PRODUCTS.map((product) => <ProductItem product={product} key={product.id}/>)}
    </div>
  )
}
