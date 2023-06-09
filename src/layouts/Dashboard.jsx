import React from 'react'

import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CarList from '../pages/CarList'
import CarDetails from '../pages/CarDetails'

import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import CarAdd from '../pages/CarAdd'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
export default function Dashboard() {

  return (
    <div>
        <ToastContainer position='bottom-right'/>
    <Grid>
      <GridRow>
        
        <GridColumn >
          <Routes> 
            <Route path='/cardetail/:id' element={<CarDetails />} />
            <Route  exact path='/' element={<Home />} />   
            <Route   path='/anasayfa' element={<Home />} />  
            <Route path='/car' element={<CarList />} />
            <Route path='/user/register' element={<Register />} />
            <Route path='/user/login' element={<Login />} />
            <Route path='/car/add' element={<CarAdd />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </GridColumn>
      </GridRow>
    </Grid></div>
  )

}
