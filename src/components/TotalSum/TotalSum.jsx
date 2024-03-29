import { useEffect, useState } from 'react';

import styles from './TotalSum.module.css';

function TotalSum({ cart }) {

  const [totalSum, setTotalSum] = useState(cart?.reduce((acc, el) => acc += el.count * el.price, 0));
  useEffect(() => {
    setTotalSum(cart?.reduce((acc, el) => acc += el.count * el.price, 0));
  }, [cart])

  return (
    <div className={styles.total}>
      <div className={styles.info}>
        <div className={styles.text}>
          ИТОГО
        </div>

        <div className={styles.price}>
          ₽ {totalSum}
        </div>
      </div>

      <button className={styles.btn}>Перейти к оформлению</button>
    </div>
  );
  
}

export default TotalSum;
