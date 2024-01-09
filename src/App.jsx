import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/GolobalStyle'
import { ProductDetails } from './components/productDetails'
import ProductList from './components/ProductList';
function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' Component={ProductList}/>
        <Route path='/detail/:productId' Component={ProductDetails}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
