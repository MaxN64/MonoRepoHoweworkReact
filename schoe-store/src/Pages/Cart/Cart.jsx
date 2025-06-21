import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  
  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price);              
    const quantity = item.quantity || 1;           
    return sum + (isNaN(price) ? 0 : price * quantity); 
  }, 0);

  return (
    <section className={styles.cartPage}>
      <div className={styles.container}>

       
        <div className={styles.content}>
          <h1 className={styles.title}>Корзина</h1>
          <hr className={styles.separator} />

          <div className={styles.itemsList}>
            {cartItems.length === 0 ? (
              <p>Ваша корзина пуста</p>
            ) : (
              cartItems.map(item => (
                <CartCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>

       
        {cartItems.length > 0 && (
          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Итого</h2>
            <ul className={styles.summaryList}>
              {cartItems.map(it => (
                <li key={it.id} className={styles.summaryItem}>
                  {it.name}
                </li>
              ))}
            </ul>
            <div className={styles.totalWrapper}>
              <span className={styles.totalLabel}>Цена:</span>
              <span className={styles.totalValue}>{total} €</span>
            </div>
          </aside>
        )}

      </div>
    </section>
  );
};

export default Cart;
