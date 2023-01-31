import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Loader from "./Loader";
import PhotoFrame from "./PhotoFrame";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const handleNumber = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const apifun = async () => {
      setLoader(true);
      fetch(`https://jsonplaceholder.typicode.com/photos/${inputValue}`,{method: "GET"})
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          setProduct(response);
          setLoader(false);
        });
    };
    apifun();
  }, [inputValue]);

  return (
    <>
      <label>Id Number :</label>
      <input
        type={"number"}
        id="in"
        value={inputValue}
        onChange={handleNumber}
      />
      {loader === true ? <Loader /> : null}
      {inputValue <= 0 ? null : (
        <PhotoFrame image={product.url} title={product.title} />
      )}
    </>
  );
};

export default App;

