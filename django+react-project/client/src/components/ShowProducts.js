import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ShowProducts = () => {
       
    const [products ,setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        console.log(response)
        setProducts(response.data)

    }

    useEffect(() => {
        getProducts();
    },[])
 
    return (

       
        <div class='products-info' >
            
            {
                products.map((data) => {
                    

                    return (
                        <div className='m-2 rounded lg-shadow ' style={{width:'21.2rem'}}>
                        <Card style={{ width: '20rem', height:'30rem'}}>
                        <Card.Img variant="top" style={{height:"250px"}}  src={data.image} />
                        <Card.Body>
                          <Card.Title>{data.name}</Card.Title>
                          <Card.Title>Price:{data.price}</Card.Title>
                          <Card.Text>{data.description}</Card.Text>
                          <Card.Text>{data.category
                            }</Card.Text>                         
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </div>
                    ) 
                }

                )
            }
        </div>
    );
};

export default ShowProducts;