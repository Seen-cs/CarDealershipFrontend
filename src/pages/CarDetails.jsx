import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import "../styles/CarDetails.css"
import resim1 from "../assets/image/cars/details/cd-1.jpg"
import CarService from './services/CarService'
export default function CarDetails() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      const loginUrl = "/user/login";

      const redirectUrl = `${loginUrl}`;
      navigate(redirectUrl);
    }
  }, []);


  let { name } = useParams()

  const [product, setProduct] = useState({})//hook
  //component yuklendiğinde yapılmasını istefiğimiz kodu bunun içine yazıyoruz
  useEffect(() => {
    let carService = new CarService()
    carService.getByProductName(name).then(result => setProduct(result.data.data))
  }, [])
  return (
    <>
      <div class="row">
        <div class="col-4">Sol Yapı</div>
        <div class="col-8"><div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <img src={resim1} className="card-img-top" alt="Car Image" />
                <div className="card-body">
                  <h5 className="card-title">2018 Mercedes-Benz S-Class</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                    ante vitae turpis fringilla tristique. Integer gravida ac justo at
                    posuere.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div></div>
      </div>



    </>
  )
}
