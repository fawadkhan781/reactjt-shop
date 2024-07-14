import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import { Loader } from './Loader'
import axios  from 'axios'
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect( () => {
    const fetchProducts = async () => {
      setLoader(true);
      const myProducts = await axios.get('https://fakestoreapi.com/products');
      setProducts(myProducts.data);
      setLoader(false);
    }
    fetchProducts();

  }, []);

  return (
    <>
      { loader ? <Loader /> : <Products lists={products} /> }
    </>
    )

}

export default Home
