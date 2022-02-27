import { useContext, useState } from "react";
// Context
import { FormContext } from "../App";

export default function ArticleList() {
  const formData = useContext(FormContext);
  const [quantity, setQuantity] = useState(0);
  const ArticleList = [
    { name: "first" },
    { name: "second" },
    { name: "third" },
  ];
  const [newList, setNewList] = useState(ArticleList);
  const [remove, setRemove] = useState(false);

  const handleIncrease = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrease = () => {
    setQuantity((prevState) => {
      if (quantity > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const handleDelete = (id) => {
    setNewList(
      newList.filter((item) => {
        if (item.name === id) {
          console.log(item);
          return item;
        }
        return setRemove(true);
      })
    );
  };

  return (
    <main>
      {remove ? null : (
        <article id="first">
          <h3>Chocolate Chip</h3>
          <div className="quantity">
            <button className="increase" onClick={handleIncrease}>
              +
            </button>
            <p>
              {quantity !== 0 ? (
                quantity
              ) : (
                <span className="outOfStock">
                  Out <br /> of stock
                </span>
              )}
            </p>
            <button className="decrease" onClick={handleDecrease}>
              -
            </button>
          </div>
          <p className="price">3 €</p>
          <button onClick={() => handleDelete("first")}>DELETE</button>
        </article>
      )}
      {formData.map((cookie, i) => {
        if (i > 0) {
          return (
            <article key={i}>
              <h3>{cookie.productName}</h3>
              <div className="quantity">
                <button className="increase" onClick={handleIncrease}>
                  +
                </button>
                <p>{cookie.quantity}</p>
                <button className="decrease" onClick={handleDecrease}>
                  -
                </button>
              </div>
              <p className="price">{cookie.price} €</p>
              <button onClick={handleDelete}>DELETE</button>
            </article>
          );
        }
        return null;
      })}
    </main>
  );
}
