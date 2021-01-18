import { Component } from "react";
import "./Card.scss";


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
          <div className="Card-imageContainer-discountTag">{this.props.discountTag}</div>
          <img className="Card-imageContainer-image" src={this.props.image} alt="" />
        </div>
        <p className="Card-description">{this.props.title}</p>
        <div className="Card-prices">
            <p className="Card-prices-old">{this.props.oldPrice}</p>
            <p className="Card-prices-new">{this.props.newPrice}</p>
        </div>
      </div>
    );
  }
}

export default Card;
