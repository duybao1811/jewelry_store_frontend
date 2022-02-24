import React from 'react'
import News from './News'
import Collect from './Collect'
import Product from './Product'
import TopProduct from './TopProduct'
export default function Home() {
  return (
    <div>
      <Collect />
      <Product />
      <TopProduct />
      <News />
    </div>
  )
}
