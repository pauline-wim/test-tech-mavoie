import { useContext, useState, useEffect } from "react";
// Context
import { FormContext } from "../App";

export default function ArticleList() {
  const formData = useContext(FormContext);

  return (
    <main>
      <article>
        <h3>Chocolate Chip</h3>
        <p className="quantity">5</p>
        <p className="price">3 €</p>
      </article>
      <article>
        <h3>White Chocolate & Nuts</h3>
        <p className="quantity">6</p>
        <p className="price">4 €</p>
      </article>
      <article>
        <h3>Dark Chocolate</h3>
        <p className="quantity">6</p>
        <p className="price">3 €</p>
      </article>
      {formData.map((cookie, i) => {
        // console.log(cookie);
        if (i > 0) {
          return (
            <article key={i}>
              <h3>{cookie.productName}</h3>
              <p className="quantity">{cookie.quantity}</p>
              <p className="price">{cookie.price} €</p>
            </article>
          );
        }
      })}
    </main>
  );
}
