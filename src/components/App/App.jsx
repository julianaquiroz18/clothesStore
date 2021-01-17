import './App.scss';
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import Banner from '../Banner/Banner.jsx';
import Categories from '../Categories/Categories.jsx';
import Carrousel from '../Carrousel/Carrousel.jsx';
import Footer from '../Footer/Footer.jsx';
import { getApiData } from "../../utils/scripts/api.js";

function App() {
  const [products, setProducts] = useState([]);
  const [getData, shouldGetProducts] = useState(true);
  const items=['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
  
  useEffect(()=>{
    if (getData) {
      getApiData().then((data)=>{
          shouldGetProducts(false);
          setProducts(data);
      });  
    };
  }, [getData]);
  return (
    <main className="App">
      <Navigation items={items}/>
      <Banner/>
      <Categories/>
      <Carrousel products={products}/> 
      <Footer/>
    </main>
  );
}

export default App;
