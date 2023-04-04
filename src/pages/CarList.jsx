import React, { useState, useEffect } from 'react'
import Categories from '../layouts/Categories'
import { Link, useNavigate } from "react-router-dom";
import resim1 from "../assets/image/cars/details/cd-1.jpg"
import CarService from './services/CarService';
import Footer from '../layouts/Footer';
import CarAdd from './CarAdd';
export default function CarList() {
  const navigate = useNavigate();
 
   useEffect(()=>{
     if(!localStorage.getItem("token")){
       navigate("user/login")
     }
   })
  const [products, setProducts] = useState([])
  useEffect(() => {
    let carService = new CarService()
    carService.getCars().then(result => setProducts(result.data.data))
  }, [])

  return (
    <>
    <div class="row">
  <div class="col-4">
    <Categories></Categories>
  </div>
  <div class="col-8">
    <div className="row flex-wrap">
      {products.map((product) => (
        <div key={product.carId} className="col-md-4">
          <div className="card mb-4">
            <img src={resim1} className="card-img-top" alt="Car Image" />
            <div className="card-body">
              <h5 className="card-title">{product.year} {product.brand} {product.model}</h5>
              <p className="card-text">{product.description}</p>
              <p style={{fontWeight: "bold", fontFamily: "sans-serif", fontSize: "16px"}}>{product.price}₺</p>
              <div className='row'>
                <div className='col-md-6'><Link className="btn btn-primary d-block mb-2" to={"/cardetail"}>Karta git</Link></div>
                <div className='col-md-6'><button data-bs-toggle="modal" data-bs-target="#addModel" className="btn btn-primary d-block mb-2">subscribe</button></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div
  className="modal fade"
  id="addModel"
  aria-hidden="true"
  aria-labelledby="addModelLabel"
  tabIndex={-1}
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
          Ürün ekle
        </h1>
        <button
          type="button"
          id="addModelCloseBtn"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <CarAdd></CarAdd>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-secondary"
          data-bs-target="modal"
          data-bs-toggle="modal"
        >
          Kapat
        </button>
        <button
          className="btn btn-primary"
          data-bs-target="modal"
          data-bs-toggle="modal"
        >
          Kaydet
        </button>
      </div>
    </div>
  </div>
</div>

<Footer></Footer>
</>
  )
}
