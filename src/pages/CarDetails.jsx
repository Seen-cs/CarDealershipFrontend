import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from './services/ProductService'
import Categories from '../layouts/Categories'

export default function CarDetails() {
    let { name } = useParams()

  const [product, setProduct] = useState({})//hook
  //component yuklendiğinde yapılmasını istefiğimiz kodu bunun içine yazıyoruz
  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data))
  }, [])
  return (
    <div><div class="col-lg-4 col-md-4">
    <div class="car__item">
        <div class="car__item__pic__slider owl-carousel">
            <img src="../assets/image/car-6.jpg" alt=""/>
            <img src="../assets/image/car-6.jpg" alt=""/>
            <img src="../assets/image/car-6.jpg" alt=""/>
            <img src="../assets/image/car-6.jpg" alt=""/>
        </div>
        <div class="car__item__text">
            <div class="car__item__text__inner">
                <div class="label-date">2020</div>
                <h5><a href="#">Toyota camry asv50l-jeteku</a></h5>
                <ul>
                    <li><span>35,000</span> mi</li>
                    <li>Auto</li>
                    <li><span>700</span> hp</li>
                </ul>
            </div>
            <div class="car__item__price">
                <span class="car-option sale">For Sale</span>
                <h6>$73,900</h6>
            </div>
        </div>
    </div>
</div></div>
  )
}
