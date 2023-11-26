import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import EventCreate from './components/Events/EventCreate.jsx/'
import AdditionalUserForm from './components/UserForms/AdditionalUserForm.jsx'
import EditForm from './components/UserForms/EditUserForm.jsx'
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard'
import EventEdit from './components/Events/EventEdit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/user/additionalForm' element={<AdditionalUserForm />}/>
      <Route path='/user/edit' element={<EditForm />}/>
      <Route path='/event/birthday/:model' element={<EventCreate />}/>
      <Route path='/event/concert/:model' element={<EventCreate />}/>
      <Route path='/event/wedding/:model' element={<EventCreate />}/>
      <Route path='/event/corporate/:model' element={<EventCreate />}/>
      <Route path='/event/educational/:model' element={<EventCreate />}/>
      <Route path='/event/custom/:model' element={<EventCreate />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/event/edit/:id/:model' element={<EventEdit/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
