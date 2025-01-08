/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/slices/ProductSlice'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'
import { Product } from '../types/Product'
import ProductTile from '../components/ProductTile'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate()

    const productsList = useSelector((state: RootState) => state.productList)
    const userBasket = useSelector((state: RootState) => state.userBasket)

    useEffect(() => {
        dispatch(fetchProduct())
        console.log(userBasket)
    }, [userBasket])

    const navToCheckout = () => {
        nav("/checkout")
    }

    return (
        <div>
            <p>Your cart: {userBasket.length}</p>
            <button onClick={navToCheckout}>Checkout</button>
            {
                productsList.map((x: Product) => {
                    return <div key={x.id}>
                        <ProductTile category={x.category} description={x.description} id={x.id} image={x.image} price={x.price} title={x.title} />
                        <br />
                    </div>
                })
            }
        </div>
    )
}

export default MainPage
