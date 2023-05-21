import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"
import ColorService from '../services/ColorService';
import BrandService from '../services/BrandService';
import ModelService from '../services/ModelService';
import axios from 'axios';
import { toast } from "react-toastify"


export default function CarAdd() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  //const [showModel,SetShowModel]=useState(true)//modelı submit olduğunda kapatacak component içindeki componenti bu yolla kapatabiliyorum ama çerçeve kalıyor//SetShowModel(false);//{showmodel&& kodu buraya yazıyoz}
  const navigate = useNavigate();
  const closeModel = () => {
    const addModelCloseBtn = document.getElementById("addModelCloseBtn");
    addModelCloseBtn.click();
  }
  const carAdd = async (e) => {
    e.preventDefault();
    let array = { Brand:brand, Color:color, Description: description, Km: km, Model: model, Price: parseInt(price), Year: year };
    const token = localStorage.getItem("token");

    try {
      await axios.post('https://localhost:44303/api/car/add', array, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success("Araba Kaydınız tamamlandı");
      closeModel();

    } catch (err) {
      toast.success("Tekrar deneyin");
     // localStorage.removeItem('token');
      closeModel();
      navigate("/")
      console.log(err.response.data);
    }
  }

  
  const [colors, setColors] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  useEffect(() => {
    
      let colorService = new ColorService()
      let brandService = new BrandService()
      let modelService = new ModelService()
      Promise.all([
        colorService.getColors(),
        brandService.getBrands(),
        modelService.getModels()
      ]).then(([colorsResponse, brandsResult, modelsResult]) => {
        setColors(colorsResponse.data)
        setBrands(brandsResult.data)
        setModels(modelsResult.data)
      })
    }
  )


  return (
    <>
      <div className="register-container">
        <form onSubmit={carAdd} className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="color">Renk</label>
            <select className="form-control" id="colorId" name="colorId" value={color} onChange={(e) => setColor(e.target.value)} >
              {colors.map((color) => (
                <option key={color.id} value={color.name} >{color.name}</option>

              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="brandId">Marka</label>
            <select className="form-control" id="brandId" name="brandId" value={brand} onChange={(e) => setBrand(e.target.value)} >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.name} >{brand.name}</option>
              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="modelId">Model</label>
            <select className="form-control" id="modelId" name="modelId" value={model} onChange={(e) => setModel(e.target.value)} >
              {models.map((model) => (
                <option key={model.id} value={model.name} >{model.name}</option>
              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="firstname">Üretim Yılı</label>
            <input className="form-control" value={year} onChange={(e) => setYear(e.target.value)} type="text" id="year" name="year" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">KM</label>
            <input className="form-control" value={km} onChange={(e) => setKm(e.target.value)} type="text" id="km" name="km" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Fiyat</label>
            <input className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price" name="price" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Açıklama</label>
            <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="description" name="description" />
          </div>

          <div>
            <button type="submit">Araba Ekle</button>
          </div>

        </form></div>
    </>
  )
}
