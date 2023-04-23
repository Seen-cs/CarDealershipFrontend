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

<div className="col-md-8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card mb-4" style={{border: "none"}}>
          <div className="row">
            <div className="col-md-6" style={{paddingRight: "0"}}>
              <img
                src={resim1}
                className="card-img-top"
                alt="Car Image"
                style={{ height: "100%", objectFit: "cover", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}
              />
            </div>
            <div className="col-md-6" style={{backgroundColor: "#f8f9fa", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", display: "flex", alignItems: "center", padding: "1.5rem"}}>
              <div>
                <h5 className="card-title" style={{fontSize: "28px", fontWeight: "bold", marginBottom: "1rem"}}>
                  2018 Mercedes-Benz S-Class
                </h5>
                <p className="card-text" style={{fontSize: "20px"}}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Price:</strong> $50/day</li>
                    <li class="list-group-item"><strong>Color:</strong> Blue</li>
                    <li class="list-group-item"><strong>Year:</strong> 2021</li>
                </ul>
                </p>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "2rem"}}>
                  <div>
                    <p style={{fontSize: "20px", fontWeight: "bold", marginBottom: "0.5rem"}}>Satıcı:</p>
                    <h6 style={{fontSize: "18px", marginBottom: "0"}}>{car.userName}</h6>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p style={{fontSize: "20px", fontWeight: "bold", marginBottom: "0.5rem"}}>Satıcıyı Takip Et:</p>
                    <button type="button" className="btn btn-outline-secondary" style={{fontSize: "20px", fontWeight: "bold", marginTop: "0.5rem"}}>
                      Takip Et
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* <div className="col-md-8">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card mb-4" style={{border: "none"}}>
          <div className="row">
            <div className="col-md-6" style={{paddingRight: "0"}}>
              <img
                src={resim1}
                className="card-img-top"
                alt="Car Image"
                style={{ height: "100%", objectFit: "cover", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}
              />
            </div>
            <div className="col-md-6" style={{backgroundColor: "#f8f9fa", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", display: "flex", alignItems: "center", padding: "1.5rem"}}>
              <div>
                <h5 className="card-title" style={{fontSize: "28px", fontWeight: "bold", marginBottom: "1rem"}}>
                  2018 Mercedes-Benz S-Class
                </h5>
                <p className="card-text" style={{fontSize: "20px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante vitae turpis fringilla
                  tristique. Integer gravida ac justo at posuere.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "2rem"}}>
                  <div>
                    <p style={{fontSize: "20px", fontWeight: "bold", marginBottom: "0.5rem"}}>Satıcı</p>
                    <h6 style={{fontSize: "18px", marginBottom: "0"}}>{car.userName}</h6>
                  </div>
                  <button type="button" className="btn btn-outline-secondary" style={{fontSize: "20px", fontWeight: "bold"}}>
                    Takip Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  */}
    </>
  )
}
