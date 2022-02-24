import React from 'react'
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import CartIcon from '../../components/CartIcon/CartIcon';

export default function TopProduct() {
    const products = [
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product5.jpg',
            image2: '/images/home/product6.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product7.jpg',
            image2: '/images/home/product8.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product9.jpg',
            image2: '/images/home/product10.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product11.jpg',
            image2: '/images/home/product12.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },

    ]
    return (
        <div className="w-full bg-black-2 py-20">
            <div className="mb-10">
                <h1 className="uppercase text-4xl text-white text-center font-medium">Sản phẩm mua nhiều</h1>
            </div>
            <Container>
                {
                    products.map((product,index) => {
                        return (
                            <div className="w-1/4 flex flex-col bg-white mr-5 last:mr-0 relative group">
                                <img src={`${product.image1}`} alt="product" />
                                <div className="px-3 text-center">
                                    <p className="text-[#334862] text-md whitespace-nowrap overflow-hidden font-medium mb-3">
                                        {product.name}
                                    </p>
                                    <p className="text-md font-medium mb-3">
                                        <del className="opacity-50">
                                            {product.price}  <span className="underline">đ</span>
                                        </del>
                                        <span className="ml-2">
                                            {product.priceSale} <span className="underline">đ</span>
                                        </span>
                                    </p>
                                </div>

                                <CartIcon className="bottom-20 left-4 cursor-pointer group-hover:opacity-100" />
                            </div>
                        )
                    })
                }                       
            </Container>
        </div>
    )
}
