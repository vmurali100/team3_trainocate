import React, { useEffect, useState } from 'react'
import {
    useParams
  } from "react-router-dom";
import axios from 'axios';
  
export const ProductDetails = () => {
    let { id } = useParams();
    console.log(id);
    
    const [product, setproduct] = useState({})

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/"+id).then((res) => {
            console.log(res.data);
            setproduct(res.data);
        })
    }, []);


    return (
        <div>
            <div className="container">
                <div class="card" style={{width: "18rem", float: "left", margin:"10px"}}>
                <img src={product.image} style={{width: "100%", height: "250px"}} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">Buy Product</a>
                </div>
                </div>
            </div>
        </div>
    )
}
