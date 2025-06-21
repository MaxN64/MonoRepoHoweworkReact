import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.cardImg} />
      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>{product.price} €</p>
      </div>
      <button
        className={styles.addButton}
        onClick={() => addToCart(product)}
      >
        +
      </button>
    </div>
  );
};

export default ProductCard;
