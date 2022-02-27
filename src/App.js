import React from "react";
import { useForm } from "react-hook-form";
import { createContext, useState, useEffect } from "react";
// Components
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
// CSS
import "./App.css";

export const FormContext = createContext();

function App() {
  const [newCookie, setNewCookie] = useState({});
  const [formData, setFormData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setNewCookie(data);
  };

  useEffect(() => {
    setFormData((prev) => {
      return [...prev, newCookie];
    });
  }, [newCookie]);

  return (
    <FormContext.Provider value={formData}>
      {/* {console.log(formData)} */}
      <div className="App">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Product Name" {...register("productName")} />
          <input
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && <p className="error">A quantity is required.</p>}
          <input
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.price && <p className="error">A price is required.</p>}
          <input className="btn" type="submit" value="Create" />
        </form>
        <hr />
        <ArticleList />
      </div>
    </FormContext.Provider>
  );
}

export default App;
