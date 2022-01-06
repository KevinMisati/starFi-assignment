import React,{useState} from 'react'
import classes from "./ProductDetails.module.css"
import SimilarProducts from "../Components/ProductDetails/SimilarProducts"
import {products} from "../data"
import {useParams} from "react-router-dom"
const Product = () => {
    const param = useParams()
    const id = param.id
 
    let product = products.filter(product => product.id == id)
    product = product[0]
  
    return (
        
        <div  className={classes["product-container"]}>
            <div  className={classes.product}>
                <div   className={classes["img-container"]} >
                    <img src={product.img} alt={product.title} />
                    
                </div>
                <div className={classes["product-info"]}>
                    <h2>{product.title}</h2>
                    <p className={classes.price}>${product.price}</p>
                    <p className={classes["description"]}>{product.info}
                    </p>
                </div>
            </div> 
            <div className={classes["similar-products"]}>
                <SimilarProducts 
                    category={product.category} 
                    title={product.title}
                    headerTitle="Similar products"
                 />
            </div>
        </div>
    )
}

export default Product
