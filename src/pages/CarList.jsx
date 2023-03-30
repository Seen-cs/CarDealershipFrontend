import React, { useState, useEffect } from 'react'
import Categories from '../layouts/Categories'
import { Link, useNavigate } from "react-router-dom";
import ProductService from './services/ProductService'
import resim1 from "../assets/image/cars/details/cd-1.jpg"
export default function CarList() {
  const navigate = useNavigate();
   useEffect(()=>{
     if(!localStorage.getItem("token")){
       navigate("user/login")
     }
   })
  const [products, setProducts] = useState([])
  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.data))
  }, [])

  return (
    <>
    <div class="row">
      <div class="col-4"><Categories></Categories></div>
      <div class="col-8">
        <div className="row">
          {products.map((product) => (
            <div key={product.carId} className="col-md-4">
              <div className="card mb-4">
                <img src={resim1} className="card-img-top" alt="Car Image" />
                <div className="card-body">
                  <h5 className="card-title">{product.year} {product.brand} {product.model}</h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <p style={{fontWeight: "bold", fontFamily: "sans-serif", fontSize: "16px"}}>{product.price}₺</p>
                  <div className='row'>
                    <div className='col-md-6'><Link className="btn btn-primary" to={"/car"}>Karta git</Link></div>
                    <div className='col-md-6'><button className="btn btn-primary">subscribe</button></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
  )
}
