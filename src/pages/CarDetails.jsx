import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../styles/CarDetails.css"
import resim1 from "../assets/image/cars/details/cd-1.jpg"
import CarService from '../services/CarService'
import axios from 'axios'
import { toast } from "react-toastify"

export default function CarDetails() {
  let { id } = useParams()
const [car, setCar] = useState({})
const [isActiveButton, setISActiveButton] = useState(true)
const token = localStorage.getItem("token");
const kullaniciId = car.userId;

const activeButton = (e) => {
  e.preventDefault();
setISActiveButton(false)
subscribe(e);
}
const deActiveButton = (e) => {
  e.preventDefault();
  setISActiveButton(true)
  unSubscribe(e);
  }

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

const subscribe = async (e) => {
  e.preventDefault();
  
  try {
    await axios.post(
      "https://localhost:44303/api/subscribe/subscribe?supUserId=" + kullaniciId,
      null, // boş veri gövdesi
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(`${car.userName} kişisine abone olundu`);
  } catch (err) {
    console.log(err);
  }
};
const unSubscribe = async(e)=>{
  e.preventDefault();
  try {
    await axios.post(
      "https://localhost:44303/api/subscribe/deletesubscribe?supUserId=" + kullaniciId,
      null, // boş veri gövdesi
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(`${car.userName} kişisine abonelik kaldırıldı!`);
  } catch (err) {
    console.log(err);
  }
}

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
                  {isActiveButton? <button onClick={activeButton} type="button" className="btn btn-outline-secondary" style={{ fontSize: "20px", fontWeight: "bold", marginTop: "0.5rem" }}>
                    Takip Et
                  </button>:<button onClick={deActiveButton} type="button" className="btn btn-outline-secondary" style={{ fontSize: "20px", fontWeight: "bold", marginTop: "0.5rem" }}>
                    Abonelik İptal
                  </button> }
                  <p></p>
                </div>
                <div className="car__details__sidebar__payment">
                  <ul>
                    <li>Marka<span>{car.brand}</span></li>
                    <li>Model<span>{car.model}</span></li>
                    <li>Color<span>{car.color}</span></li>
                    <li>Fiyat<span >{car.userId}</span></li>
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
