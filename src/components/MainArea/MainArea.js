import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import './MainArea.css'

const MainArea = ({ handlerMenu }) => {
  return (
    <div className="mainArea">
      <button onClick={handlerMenu} className="btnMenu">
        <img src="/assets/menu.svg" alt="Menu" />
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products/new" />
        <Route path="/stores" element={<StoresList />} />
        <Route path="/stores/:id" element={<StoreView />} />
        <Route path="/stores/new" />
        <Route path="/profile" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default MainArea