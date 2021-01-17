import { Component } from "react";
import "./Carrousel.scss";
import Card from "../Card/Card.jsx";

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    console.log(this.state.isMenuOpen);
  }

  render() {
    const cards = this.props.products.map((product) => {
      return (
        <div className="Carrousel-cardWrapper">
          <Card />
        </div>
      );
    });
    return (
      <div className="Carrousel">
        <h2 className="Carrousel-title">PRODUCTOS MÁS BUSCADOS</h2>
        <div className="Carrousel-container">
          <div className="Carrousel-container-cards">
              <div className="Carrousel-cardsWrapper">

              {cards}
              </div>
          </div>
          <div className="Carrousel-container-buttons">
            <button className="button">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button className="button">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrousel;
