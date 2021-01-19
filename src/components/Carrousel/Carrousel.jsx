import "./Carrousel.scss";
import Card from "../Card/Card.jsx";
import { getApiData } from "../../utils/scripts/api.js";
import React, { useState, useEffect, createRef } from "react";


function Carrousel(props) {
  const scrollAreaReference = createRef();
  const [products, setProducts] = useState([]);
  const [getData, shouldGetProducts] = useState(true);

  useEffect(() => {
    if (getData) {
      getApiData().then((data) => {
        shouldGetProducts(false);
        setProducts(data);
      });
    }
  }, [getData]);

  function scroll(direction) {
    const node = scrollAreaReference.current;
    const cardWidth = node.firstChild.clientWidth;
    if (direction === "left") {
      node.scroll(node.scrollLeft - cardWidth, 0);
    } else {
      node.scroll(node.scrollLeft + cardWidth, 0);
    }
  }

  const cards = products.map((product, index) => {
    return (
      <div key={index} className="Carrousel-cardWrapper">
        <Card
          image={product.image}
          title={product.title}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          discountTag={product.discountTag}
        />
      </div>
    );
  });
  return (
    <section className="Carrousel">
      <h2 className="Carrousel-title">PRODUCTOS MÁS BUSCADOS</h2>
      <div className="Carrousel-container">
        <div ref={scrollAreaReference} className="Carrousel-container-cards">
          {cards}
        </div>
        <div className="Carrousel-container-buttons">
          <button className="button" onClick={() => scroll("left")}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button className="button" onClick={() => scroll("right")}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carrousel;
