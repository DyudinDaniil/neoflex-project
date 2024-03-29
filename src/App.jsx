import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hooks/use-localstorage';

import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';

import styles from './App.module.css';



function App() {

  const catalog = JSON.parse(localStorage.getItem('catalog'));
  const [cart, setCart] = useLocalStorage('cart');
  

  return (
    <BrowserRouter>
      <div className={styles.wrap}>
        <Header cart={cart} />
        <Main>
          <Routes>
            <Route path='/' element={<Catalog catalog={catalog} cart={cart} setCart={setCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );

}

export default App
