import React from "react";
import { useForm } from "react-hook-form";
import { createContext, useState, useEffect } from "react";
// Components
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
// import Form from "./components/Form";
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
        <ArticleList />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("productName")} />
          <input {...register("quantity", { required: true })} />
          {errors.quantity && <p>A quantity is required.</p>}
          <input {...register("price", { required: true })} />
          {errors.price && <p>A price is required.</p>}
          <input type="submit" value="Create" />
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
