import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
    <Link to='/'>
      <div className={styles.logo}>
        QPICK
      </div>
    </Link>
    

    <ul className={styles.nav}>
      <li className={styles.nav__item}>
        <Link to='/like' className={styles.nav__link}>
          Избранное
        </Link>
      </li>
      <li className={styles.nav__item}>
        <Link to='/cart' className={styles.nav__link}>
          Корзина
        </Link>
      </li>
      <li className={styles.nav__item}>
        <Link to='/contacts' className={styles.nav__link}>
          Контакты
        </Link>
      </li>
    </ul>

    <div className={styles.info}>
      <a href='#' className={styles.info__conditions}>Условия сервиса</a>
      <div className={styles.info__lang}>
        <img className={styles.info__img} src='/public/lang.svg'></img>
        <a href='#' className={styles.info__ru}>Рус</a>
        <a href='#' className={styles.info__en}>Eng</a>
      </div>
    </div>

    <ul className={styles.contacts}>
      <li className={styles.contacts__item}>
        <a href='#' className={styles.contacts__link}>
          <img src='/public/VK.svg'></img>
        </a>
      </li>

      <li className={styles.contacts__item}>
        <a href='#' className={styles.contacts__link}>
          <img src='/public/Telegram.svg'></img>
        </a>
      </li>

      <li className={styles.contacts__item}>
        <a href='#' className={styles.contacts__link}>
          <img src='/public/Whatsapp.svg'></img>
        </a>
      </li>
    </ul>
   </footer>
  )
}

export default Footer;
