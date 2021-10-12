import React, {useEffect, useState} from 'react'
import {
    Link
  } from "react-router-dom";  
import axios from 'axios';

export const Home = () => {

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data);
            setproducts(res.data);
        })
    }, []);

    const [products, setproducts] = useState([]);

    return (
        <div>
            <h2>Welcome to home component</h2>
            <div className="container">
                {products.map((product) => {
                    return <div class="card" style={{width: "18rem", float: "left", margin:"10px"}}>
                    <img src={product.image} style={{width: "100%", height: "250px"}} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="card-text">{product.description}</p>
                      {/* <a href="#" class="btn btn-primary"></a> */}
                      <Link class="btn btn-primary" to={`/${product.id}`}>Link</Link>
                    </div>
                  </div>
                })}

            </div>
        </div>
    )
}
