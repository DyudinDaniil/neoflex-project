import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import HeaderBtn from '../../components/HeaderBtn/HeaderBtn';

import styles from './Header.module.css';

function Header({ cart }) {

  const [countOfGoods, setCountOfGoods] = useState(0);
  useEffect(() => {
    const newCount = cart?.reduce((acc, el) => acc += el.count, 0);
    setCountOfGoods(newCount);
  }, [cart]);

  return (
    <header className={styles.header}>
      <Link to='/'>
        <h1 className={styles.title}>
          Qpick
        </h1>
      </Link>


      <ul className={styles.btns}>
        <li className={styles.item}>
          <Link to='/saved'>
            <HeaderBtn path={'/public/like.svg'} count={0} />
          </Link>
        </li>

        <li className={styles.item}>
          <Link to='/cart'>
            <HeaderBtn path={'/public/cart.svg'} count={countOfGoods} />
          </Link>
        </li>
      </ul>
    </header>
  );

}

export default Header;
