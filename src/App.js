import "./App.css";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import { useState } from "react";


function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung S21",
      quantity: 0,
      price: 20000,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/s/l/-original-imagtnqjjuc6dh6v.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      name: "Google Pixel",
      quantity: 0,
      price: 30000,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      name: "Iphone 14",
      quantity: 0,
      price: 50000,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70&crop=false",
      
    },
    {
      id: 3,
      name: "vivo v29 pro",
      quantity: 0,
      price: 23000,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/9/l/-original-imagtyw2cvvhz4hj.jpeg?q=70&crop=false",
      
    },
  ]);
 

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity={quantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

export default App;


