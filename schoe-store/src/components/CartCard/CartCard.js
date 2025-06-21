import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import basketIcon from "../../assets/basketIcon.svg";
import styles from "./CartCard.module.css";

const CartCard = ({ product }) => {
  const { deleteFromCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.priceLabel}>
          <span className={styles.priceLabelTitle}>ЦЕНА:</span>
          <span className={styles.price}>{product.price} €</span>
        </div>
      </div>
      <button
        className={styles.removeButton}
        onClick={() => deleteFromCart(product.id)}
      >
        <img src={basketIcon} alt="Удалить" />
      </button>
    </div>
  );
};

export default CartCard;
