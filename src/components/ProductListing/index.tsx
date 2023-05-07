import React from "react";
import ProductCard from "../ProductCard";
import { listOfProducts } from "../../constants/products";
import styles from "./ProductListing.module.css";

export default function ProductListing(): any {
  return (
    <div className={styles.listingContainer}>
      {listOfProducts?.map((product: any): any => {
        return (
          <div key={product?.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}
