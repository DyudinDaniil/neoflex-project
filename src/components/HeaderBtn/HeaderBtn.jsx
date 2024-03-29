import styles from './HeaderBtn.module.css';

function HeaderBtn({ path, count }) {

  return (
    <button className={styles.btn}>
      <img src={path} alt='header-icon'></img>
      <div className={styles.count}>{count}</div>
    </button>
  );

}

export default HeaderBtn;