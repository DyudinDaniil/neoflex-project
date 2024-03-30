import CartList from '../CartList/CartList';
import TotalSum from '../TotalSum/TotalSum';
import styles from './Cart.module.css';

function Cart({ cart, setCart, delGood }) {
  return (
    <div className={styles.cart}>
      <CartList cart={cart} setCart={setCart} delGood={delGood} />
      <TotalSum cart={cart} />
    </div>
  )
}

export default Cart;
