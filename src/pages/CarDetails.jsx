import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../styles/CarDetails.css"
import resim1 from "../assets/image/cars/details/cd-1.jpg"
import CarService from '../services/CarService'

export default function CarDetails() {
  let { id } = useParams()
  const [car, setCar] = useState({})//hook
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      const loginUrl = "/user/login";

      const redirectUrl = `${loginUrl}`;
      navigate(redirectUrl);
    }
    else {
      let carService = new CarService();
      carService.getByName(id).then(result => setCar(result.data))
    }
  }, []);

  return (
    <>
      
      <section className="car-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="car__details__pic">
                <div className="car__details__pic__large">
                  <img
                    className="car-big-img"
                    src={resim1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="car__details__sidebar">
                <div className="car__details__sidebar__model">

                  <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "0.5rem" }}>Satıcı:</p>
                  <h6 style={{ fontSize: "18px", marginBottom: "0" }}>{car.userName}</h6>


                  <button type="button" className="btn btn-outline-secondary" style={{ fontSize: "20px", fontWeight: "bold", marginTop: "0.5rem" }}>
                    Takip Et
                  </button>
                  <p></p>
                </div>
                <div className="car__details__sidebar__payment">
                  <ul>
                    <li>Marka<span>{car.brand}</span></li>
                    <li>Model<span>{car.model}</span></li>
                    <li>Color<span>{car.color}</span></li>
                    <li>Fiyat<span>$117,000</span></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
