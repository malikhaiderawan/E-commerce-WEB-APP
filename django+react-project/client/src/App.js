import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Addproduct from './components/Addproduct';
import ShowProducts from './components/ShowProducts';
import NavbarMenu from './components/NavbarMenu';

import Updatedetail from './components/Updateproduct';
import Productdetail from './components/Productdetail';




function App(){
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/:id/" element={<Productdetail />} />
        <Route path="/:id/update" element={<Updatedetail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;