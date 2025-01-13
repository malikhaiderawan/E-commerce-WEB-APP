import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate} from 'react-router';

const Addproduct = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
  
    const Addproductinfo = async () => { // Ensure async keyword
      try {
        const formField = new FormData();
  
        formField.append('name', name);
        formField.append('price', price);
        formField.append('description', description);
        formField.append('category', category);
  
        if (image !== null) {
          formField.append('image', image);
        }
  
        const response = await axios.post('http://localhost:8000/api/', formField);
        console.log(response.data);
        navigate('/');
      } catch (error) {
        console.error('Error adding product:', error.message);
      }
    };
    return (
        <div className='container '>
            <h1>Add Product</h1>
            <div className='form-group'>

                
            <div className='form-group mb-3'>
                
                <input
                type='file'
                alt=''
                className='form-control form-control-lg'
                name='image'
                
                onChange={(e) =>setImage(e.target.files[0])} />
            </div>
    

            <div className='form-group mb-3'>
                <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Product Name'
                name='name'
                value={name}
                onChange={(e) =>setName(e.target.value)} />
            </div>

            <div className='form-group mb-3'>
                <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Product Price'
                name='price'
                value={price}
                onChange={(e) =>setPrice(e.target.value)} />
            </div>

            <div className='form-group mb-3'>
                <textarea
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Product Description'
                name='description'
                value={description}
                onChange={(e) =>setDescription(e.target.value)} />
            </div>

            <div className='form-group mb-3'>
                <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Product Category'
                name='category'
                value={category}
                onChange={(e) =>setCategory(e.target.value)} />
            </div>

            </div>

            <button className='btn btn-success' onClick={Addproductinfo}>Add Product</button>





            </div>
        
    );
};

export default Addproduct;