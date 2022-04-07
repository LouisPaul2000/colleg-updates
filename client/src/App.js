import './App.css';
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Brand from './components/Brand';
import Store from './components/Store';
import Order from './components/Order';
import Company from './components/Company';
import Setting from './components/Setting';

function App() {
  return (
      <div className="App">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/brand" element={<Brand/>} />
          <Route path="/store" element={<Store/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Routes>

      </div>
  );
}

export default App;
