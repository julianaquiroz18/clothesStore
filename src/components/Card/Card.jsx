import { Component } from "react";
import "./Card.scss";
import img1 from "./imagenes_Mesa de trabajo 1 copia 2.jpg";

class Card extends Component {
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
    return (
      <div className="Card">
        <div className="Card-imageContainer">
          <div className="Card-imageContainer-discountTag">-50%</div>
          <img className="Card-imageContainer-image" src={img1} alt="" />
        </div>
        <p className="Card-description">Blusa color solido manga larga</p>
        <div className="Card-prices">
            <p className="Card-prices-old">$100.452</p>
            <p className="Card-prices-new">$200.452</p>
        </div>
      </div>
    );
  }
}

export default Card;
