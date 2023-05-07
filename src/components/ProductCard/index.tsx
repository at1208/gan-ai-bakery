import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../redux/actions/productAction";
import { currency, add, remove } from "../../constants/cart";

function ProductCard({ product }: any) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { cart } = useSelector((state: any) => state.products);
  const { title, description, price, featureImg } = product;

  function handleClick(type: string) {
    if (type === add) {
      setCount((count) => count + 1);
      let updatedCount = count + 1;
      let checkIfProductAddedInCart = cart?.find(
        (pdt: any) => pdt?.product?.id == product?.id
      );
      let previousPayload = [...cart, { count: updatedCount, product }];

      let nextPayload = cart.map((pdt: any) => {
        let updatedProduct = pdt;
        if (pdt?.product?.id == product?.id) {
          updatedProduct.count = updatedCount;
          return updatedProduct;
        } else {
          return pdt;
        }
      });
      if (checkIfProductAddedInCart) {
        dispatch(addToCartAction(nextPayload));
      } else {
        dispatch(addToCartAction(previousPayload));
      }
    }
    if (type === remove) {
      if (count > 0) {
        setCount((count) => count - 1);
        let updatedCount = count - 1;
        let previousPayload = cart.filter(
          (pdt: any) => pdt?.product.id != product?.id
        );
        let nextPayload = cart.map((pdt: any) => {
          let updatedProduct = pdt;
          if (pdt?.product?.id == product?.id) {
            updatedProduct.count = updatedCount;
            return updatedProduct;
          } else {
            return pdt;
          }
        });
        if (count >= 2) {
          dispatch(removeFromCartAction(nextPayload));
        } else {
          dispatch(removeFromCartAction(previousPayload));
        }
      }
    }
  }

  return (
    <div className={styles.cardContainer}>
      <img src={featureImg} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.addSubBox}>
        <div className={styles.price}>
          {currency}
          {price}
        </div>
        {count == 0 ? (
          <button onClick={() => handleClick(add)} className={styles.addBtn}>
            Add
          </button>
        ) : (
          <div className={styles.countBox}>
            <button
              className={styles.minus}
              onClick={() => handleClick(remove)}
            >
              -
            </button>
            <span className={styles.count}>{count}</span>
            <button className={styles.plus} onClick={() => handleClick(add)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
