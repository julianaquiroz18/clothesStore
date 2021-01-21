import { Component } from "react";
import "./Card.scss";

class Card extends Component {
  
  render() {
    const tagColor = this.props.discountTag ? "with-discount" : "";
    const symbol = this.props.oldPrice ? "$" : "";
    return (
      <div className="Card">
        <div className="Card-imageContainer">
          <div className={`Card-imageContainer-discountTag ${tagColor}`}>
            -{this.props.discountTag}%
          </div>
          <img
            className="Card-imageContainer-image"
            src={this.props.image}
            alt=""
          />
        </div>
        <p className="Card-description">{this.props.title}</p>
        <div className="Card-prices">
          <p className="Card-prices-old">
            {symbol}
            {this.props.oldPrice}
          </p>
          <p className="Card-prices-new">${this.props.newPrice}</p>
        </div>
      </div>
    );
  }
}

export default Card;
