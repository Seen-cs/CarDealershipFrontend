import React, { useEffect, useState } from 'react'

import "../styles/Categories.css"
import CarService from '../pages/services/CarService'
export default function Categories() {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    let carService = new CarService()
    carService.getBrands().then(result => setBrands(result.data.data))
  }, [])
  return (
    
     <>


<div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="list-group">
        {brands.map((brand) => (
        <a
          key="{brand.id}"
          href="/"
          className="list-group-item list-group-item-action rounded-0 text-center brand-link"
        >
          {brand.name}
        </a>
        ))}
      </div>
    </div>
  </div>
</div>


</>
  )

}