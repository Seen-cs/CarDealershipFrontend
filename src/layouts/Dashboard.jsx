import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CarList from '../pages/CarList'
import CarDetails from '../pages/CarDetails'

import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
export default function Dashboard() {
  return (
    <div>
        <ToastContainer position='bottom-right'/>
    <Grid>
      <GridRow>
        
        <GridColumn >
          <Routes> 
            <Route path='/car' element={<CarDetails />} />
            <Route exact  path='/' element={<CarList />} />   
            <Route   path='/anasayfa' element={<CarList />} />      
            <Route path='/user/register' element={<Register />} />
            <Route path='/user/login' element={<Login />} />
          </Routes>
        </GridColumn>
      </GridRow>
    </Grid></div>
  )
}
