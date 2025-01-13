import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';


const Productdetail = () => {
  const [product,setProducts] = useState('')

  const { id } = useParams();

  const getsingleproduct = async() => {
    const { data } = await axios.get("http://localhost:8000/api/${id}")
    console.log(data)
    setProducts(data)
 }

  useEffect(() => {
    getsingleproduct();
  })
  return (
              <div>
              <h1>Product detail</h1>
              <div className='single-product'>
              <p>{product.name}</p>
              </div>
            </div>
            );
};

export default Productdetail;