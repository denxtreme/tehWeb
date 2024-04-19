import Home from './mainComponents/home.js';
import Shop from './mainComponents/shop.js';
import SubscriptionPage from './mainComponents/subscriptionPage.js';
import Order from './mainComponents/order.js';
import Login from './mainComponents/login.js';
import Register from './mainComponents/register.js';
import DashBoard from './mainComponents/dashboard.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './mainComponents/contact.js';

import { OrderOBJ } from './components/orderOBJ.js';
import ProductPage from './components/productPage.js';

import { UserManagement } from './components/userManagement.js';

import DashAdmin from './mainComponents/dashboardAdmin.js';

function App() {

  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/shop" element = {<Shop/>} />
          <Route path = "/subscription" element = {<SubscriptionPage/>} />
          <Route path = "/order" element = {<Order />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/products/:prodID" Component={OrderOBJ} />
          <Route path = '/product' element = {<ProductPage/>} />
          <Route path = "/dashboard" element = {<DashBoard/>} />
          <Route path = "/dashboard-admin" element = {<DashAdmin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
