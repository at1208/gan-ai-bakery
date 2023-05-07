import React from "react";
import Layout from "../../components/Layout";
import ProductListing from "../../components/ProductListing";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { cart } = useSelector((state: any) => state.products);
  const navigate = useNavigate();

  return (
    <Layout>
      <ProductListing />
      {cart?.length ? (
        <button
          className={styles.proceedBtn}
          onClick={() => navigate(`/checkout`)}
        >
          PROCEED TO CHECKOUT
        </button>
      ) : (
        ""
      )}
    </Layout>
  );
}
