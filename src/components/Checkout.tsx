/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Product } from '../types/Product'
import { useEffect, useState } from 'react'

const Checkout = () => {

  const userBasket = useSelector((state: RootState) => state.userBasket)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    userBasket.forEach((x: Product) => {
      setTotal(pre => pre + x.price)
    })
  }, [userBasket])


  return (
    <div>
      <h2>Checkout list</h2>
      <p>Total Cost: {total}</p>
      {
        userBasket.map((x: Product) => {
          return (
            <div key={x.id}>
              <p>Name: {x.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Checkout
