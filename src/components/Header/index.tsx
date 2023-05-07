import React from "react";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { CartIcon } from "../../constants/images";
export default function Header() {
  const { cart } = useSelector((state: any) => state.products);
  return (
    <div className={styles.header}>
      <div className={styles.name}>Gan Bakery</div>
      <div className={styles.cart}>
        {cart?.length ? (
          <span className={styles.productCount}>{cart?.length}</span>
        ) : (
          ""
        )}
        <img src={CartIcon} className={styles.cartIcon} />
      </div>
    </div>
  );
}
