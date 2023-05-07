import React from "react";
import styles from "./CheckoutListing.module.css";
import { useSelector } from "react-redux";
import { currency } from "../../constants/cart";

export default function CheckoutListing() {
  const { cart } = useSelector((state: any) => state.products);
  const columns = ["Item Name", "Count", "Price", "Items Price"];

  function calculateTotalAmount() {
    let result = cart?.map((pdt: any) => {
      return pdt?.count * pdt?.product?.price;
    });
    return result?.reduce((a: number, c: number) => a + c, 0);
  }

  return (
    <div className={styles.checkoutListing}>
      <table className={styles.table}>
        <tr>
          {columns?.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {cart?.map((pdt: any) => {
          return (
            <tr>
              <td>{pdt?.product?.title}</td>
              <td>{pdt?.count}</td>
              <td>
                {currency}
                {pdt?.product?.price}
              </td>
              <td>
                {currency}
                {pdt?.product?.price * pdt?.count}
              </td>
            </tr>
          );
        })}
        <tr>
          <td style={{ fontWeight: "bold" }}>Total Payable Amount</td>
          <td></td>
          <td></td>
          <td style={{ fontWeight: "bold" }}>
            {currency}
            {calculateTotalAmount()}
          </td>
        </tr>
      </table>
    </div>
  );
}
