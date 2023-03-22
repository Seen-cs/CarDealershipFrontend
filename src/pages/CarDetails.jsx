import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from './services/ProductService'

export default function CarDetails() {
    let { name } = useParams()

  const [product, setProduct] = useState({})//hook
  //component yuklendiğinde yapılmasını istefiğimiz kodu bunun içine yazıyoruz
  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data))
  }, [])
  return (
    <div>CarDetails</div>
  )
}
