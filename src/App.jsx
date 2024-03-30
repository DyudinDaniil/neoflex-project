import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hooks/use-localstorage';

import styles from './App.module.css';

import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';



function App() {

  const catalog = JSON.parse(localStorage.getItem('catalog'));
  const [cart, setCart] = useLocalStorage('cart');

  const delGood = (goods) => {
    const res = goods.filter(good => {
      if (good.count > 0) {
        return good;
      }
    });

    setCart(res);
  }
  
  return (
    <BrowserRouter>
      <div className={styles.wrap}>
        <Header cart={cart} />
        <Main>
          <Routes>
            <Route path='/' element={<Catalog catalog={catalog} cart={cart} setCart={setCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} delGood={delGood} />} />
            <Route path='/saved' element={<div>Избранное</div>} />
            <Route path='/contacts' element={<div>Контакты</div>} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );

}

export default App
