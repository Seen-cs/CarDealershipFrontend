import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"
import ColorService from '../services/ColorService';
import BrandService from '../services/BrandService';
import ModelService from '../services/ModelService';
import axios from 'axios';
import { toast } from "react-toastify"


export default function CarAdd() {
  const [brandId, setBrand] = useState("");
  const [modelId, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colorId, setColor] = useState("");
  //const [showModel,SetShowModel]=useState(true)//modelı submit olduğunda kapatacak component içindeki componenti bu yolla kapatabiliyorum ama çerçeve kalıyor//SetShowModel(false);//{showmodel&& kodu buraya yazıyoz}
  const navigate = useNavigate();
  const closeModel = () => {
    const addModelCloseBtn = document.getElementById("addModelCloseBtn");
    addModelCloseBtn.click();
  }
  const carAdd = async (e) => {
    e.preventDefault();
    let model = { BrandId: parseInt(brandId), ColorId: parseInt(colorId), Description: description, Km: km, ModelId: parseInt(modelId), Price: parseInt(price), Year: year };
    const token = localStorage.getItem("token");

    try {
      await axios.post('https://localhost:44303/api/car/add', model, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success("Araba Kaydınız tamamlandı");
      closeModel();

    } catch (error) {
      toast.success("Tekrardan Giriş Yapınız");
      localStorage.removeItem('token');
      closeModel();
      navigate("/")
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("user/login")
    }
  })
  const [colors, setColors] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  useEffect(() => {
    let colorService = new ColorService()
    colorService.getColors().then(response => setColors(response.data));
    let brandService = new BrandService()
    brandService.getBrands().then(result => setBrands(result.data))
    let modelService = new ModelService()
    modelService.getModels().then(result => setModels(result.data))
  })


  return (
    <>
      <div className="register-container">
        <form onSubmit={carAdd} className="register-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="color">Renk</label>
            <select className="form-control" id="colorId" name="colorId" value={colorId} onChange={(e) => setColor(e.target.value)} >
              {colors.map((color) => (
                <option key={color.id} value={color.id} selected={color.id === colorId}>{color.name}</option>

              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="brandId">Marka</label>
            <select className="form-control" id="brandId" name="brandId" value={brandId} onChange={(e) => setBrand(e.target.value)} >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id} selected={brand.id === brandId}>{brand.name}</option>
              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="modelId">Model</label>
            <select className="form-control" id="modelId" name="modelId" value={modelId} onChange={(e) => setModel(e.target.value)} >
              {models.map((model) => (
                <option key={model.id} value={model.id} selected={model.id === modelId}>{model.name}</option>
              ))}
            </select>

          </div>
          <div className="form-group">
            <label htmlFor="firstname">Year</label>
            <input className="form-control" value={year} onChange={(e) => setYear(e.target.value)} type="text" id="year" name="year" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">KM</label>
            <input className="form-control" value={km} onChange={(e) => setKm(e.target.value)} type="text" id="km" name="km" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Price</label>
            <input className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price" name="price" />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Description</label>
            <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="description" name="description" />
          </div>

          <div>
            <button type="submit">Araba Ekle</button>
          </div>

        </form></div>
    </>
  )
}
