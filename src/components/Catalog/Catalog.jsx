import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './Catalog.module.css';

function Catalog({ catalog, cart, setCart }) {

  const content = catalog.map((good, index) => {
    return (
      <CatalogItem key={index} good={good} cart={cart} setCart={setCart} />
    )
  });

  return (
    <ul className={styles.catalog}>
      {content}
    </ul>
  );

}

export default Catalog;
