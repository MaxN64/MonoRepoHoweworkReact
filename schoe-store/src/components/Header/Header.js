import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./Header.module.css";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.length;

  return (
    <header className={styles.header}>
       <div className={`container ${styles.headerWrapper}`}>
      <div className={styles.title}>Сникер-магазин</div>
      <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Главная
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Корзина
          {count > 0 && <span className={styles.cartCount}>{count}</span>}
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Контакты
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default Header;
