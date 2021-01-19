import { SearchResultContext } from "../../contexts/searchResult";
import close from "./icon-cancel.svg";
import { useContext } from "react";
import Card from "../Card/Card";

import "./Modal.scss";

export function Modal(props) {
  const { results, updateQueryValue } = useContext(SearchResultContext);
  const items = results.map((product, index) => (
    <Card
      key={index}
      image={product.image}
      title={product.title}
      oldPrice={product.oldPrice}
      newPrice={product.newPrice}
      discountTag={product.discountTag}
    />
  ));
  const isOpen = results.length > 0 ? "isOpen" : "";
  return (
    <section className={`Modal ${isOpen}`}>
      <div className="Modal-content">
        <button className="Modal-close" onClick={() => updateQueryValue(null)}>
          <img src={close} alt="Boton cerrar" />
        </button>
        {items}
      </div>
    </section>
  );
}
