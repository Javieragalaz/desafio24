import { useState, useEffect } from "react"
import { createContext } from "react"

export const Context = createContext()

export function Provider ({ children }) {

    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [prices, setPrices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const getData = async () => {
      const res = await fetch("./pizzas.json");
      const data = await res.json();
      setPizzas(data);
    };
}