import { useEffect, useState } from 'react';
import styles from './CartItem.module.css';


function CartItem({ good, cart, setCart, delGood }) {

  const {id, img, title, price, rate, count} = {...good};
  const newCart = cart ? [...cart] : []
  const [newCount, setNewCount] = useState(count);
  const [sumOfGood, setSumOfGood] = useState(price * count);

  const increase = () => {
    setNewCount(newCount + 1);
    good.count = good.count + 1;
    newCart.map(el => {
      if (el.id === good.id) {
        el = {...good}
      }
    });
    setCart(newCart);
    setSumOfGood(price * (newCount + 1));
  }
  const decrease = () => {
    if (newCount > 1) {
      setNewCount(newCount - 1);
      good.count = good.count - 1;
      newCart.map(el => {
        if (el.id === good.id) {
          el = {...good}
        }
      });
      setCart(newCart);
      setSumOfGood(price * (newCount - 1));
    }  else {
      setNewCount(newCount - 1);
      good.count = good.count - 1;
      newCart.map(el => {
        if (el.id === good.id) {
          el = {...good}
        }
      });
      delGood(newCart);
    }
  }

  return (
   <li className={styles.item}>
    <div className={styles.left}>
      <div className={styles.img}>
        <img src={img}></img>
      </div>

      <div className={styles.btns}>
        <button className={styles.btn} onClick={decrease}>-</button>
        <div className={styles.count}>{newCount}</div>
        <button className={styles.btn} onClick={increase}>+</button>
      </div>
    </div>

    <div className={styles.info}>
      <div className={styles.info__title}>{title}</div>
      <div className={styles.info__price}>{price} ₽</div>
    </div>

    <div className={styles.right}>
      <button className={styles.del}>
        <img src='/public/del.svg'></img>
      </button>

      <div className={styles.sum}>{sumOfGood} ₽</div>
    </div>
   </li>
  );

}

export default CartItem;