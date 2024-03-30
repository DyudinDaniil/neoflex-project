import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.css';

function CartList({ cart, setCart, delGood }) {

  const content = cart?.map((good, index) => {
    return (
      <CartItem key={index} good={good} cart={cart} setCart={setCart} delGood={delGood} />
    )
  });

  return (
    <ul className={styles.list}>
      {content}
    </ul>
  );

}

export default CartList;
