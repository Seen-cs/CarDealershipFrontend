import React, { useEffect, useState } from 'react'

import "../styles/Categories.css"

import BrandService from '../services/BrandService'
export default function Categories() {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    let brandService = new BrandService()
    brandService.getBrands().then(result => setBrands(result.data))
  }, [])
  return (
    
     <>


<section className="leftSide">
            <div className="categoriesTitleContainer">
                <p>Markalar</p>
            </div>
            <ul className="categoriesList">
                {brands.map((brand) => (
                    <li key={brand.id}>
                        <a href="/">{brand.name}</a>
                    </li>
                ))}
            </ul>
        </section>
{/* <div className="container">
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
</div> */}


</>
  )
}