import { Route, Routes } from 'react-router-dom'
import MainPage from '../components/MainPage'
import Checkout from '../components/Checkout'

const CompRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  )
}

export default CompRouter
