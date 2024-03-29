import styles from './CatalogItem.module.css';

function CatalogItem({ good, cart, setCart }) {

  const {img, title, price, rate, id} = {...good};
  const newCart = cart ? [...cart] : [];

  const addGoodAtCart = () => {
    if (newCart.find(el => el.id === id)) {
      newCart.map(el => {
        if (el.id === id) {
          el.count = el.count + 1;
        }
      })
    } else {
      newCart.push({
        ...good,
        count: 1
      });
    }

    setCart(newCart);
  }

  return (
    <li className={styles.item}>
      <div className={styles.img}>
        <img src={img}></img>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          {title}
        </h3>

        <div className={styles.price}>
          {price} ₽
        </div>

        <div className={styles.rate}>
          {rate}
        </div>

        <button className={styles.btn} onClick={addGoodAtCart}>
          Купить
        </button>
      </div>
    </li>
  );

}

export default CatalogItem;
