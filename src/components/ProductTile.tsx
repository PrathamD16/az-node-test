/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Product } from '../types/Product'
import { addToBasket } from '../redux/slices/BasketSlice'
import { useDispatch } from 'react-redux'

const ProductTile = (props: Product) => {

    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(addToBasket(props))
    }


    return (
        <div>
            <p>{props.title}</p>
            <p>Price: {props.price}</p>
            <button onClick={() => addProduct()}>Add to cart</button>
            <br />
            {/* <img src={image} /> */}
        </div>
    )
}

export default ProductTile
