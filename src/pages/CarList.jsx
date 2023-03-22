import React,{useState,useEffect} from 'react'

import ProductService from './services/ProductService'

export default function CarList() {
  
  const [products, setProducts] = useState([])
  useEffect(()=>{
    let productService = new ProductService()
        productService.getProducts().then(result=>setProducts(result.data.data))
    },[])
  return (
    <div>{/*products.map((product)=>(
      <div key={product.id} class="card" style={{width: "18rem"}}>
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{product.brandName}</li>
        <li class="list-group-item">{product.modelName}</li>
        <li class="list-group-item">{product.price}</li>
      </ul>
      <div class="card-body">
        <a href="/" class="card-link">Card link</a>
        <a href="/" class="card-link">Another link</a>
      </div>
    </div>
    ))*/}
      
    </div>
  )
}
