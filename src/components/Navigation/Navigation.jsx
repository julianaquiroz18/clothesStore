import { Component } from "react";
import "./Navigation.scss";
import cart from "./icon-cart.svg";
import menu from "./icon-menu.svg";
import cancel from "./icon-cancel.svg";
import logo from "./logo.svg";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "Buscar aquí producto",
      isMenuOpen: false,
    };
    this.onSearchChanged = this.onSearchChanged.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  onSearchChanged(event) {
    this.setState({ searchValue: event.target.value });
  }
  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const items = this.props.items.map((item) => <li>{item}</li>);
    const menuClass = this.state.isMenuOpen ? "isOpen" : "";
    return (
      <div className="Navigation">
        <div className="menu">
          <button className="Navigation-button" onClick={this.toggleMenu}>
            <img src={menu} alt="menu-icon" className="menu-icon" />
          </button>
          <div className={`menu-dropdown ${menuClass}`}>
            <button onClick={this.toggleMenu} className="menu-cancel Navigation-button">
              <img src={cancel} alt="menu-cancel" />
            </button>
            <ul className="menu-list">{items}</ul>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="search">
          <input
            value={this.state.searchValue}
            onChange={this.onSearchChanged}
            type="text"
            className="search-input"
          />
          <button className="search-icon Navigation-button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button className="cart-icon Navigation-button">
          <img src={cart} alt="cart"/>
        </button>
        <div className="login">
        <i className="fa fa-user-circle-o login-icon" aria-hidden="true"></i>
          
          <button className="login-button Navigation-button">Iniciar sesión</button>
        </div>
      </div>
    );
  }
}

// class Navigation extends Component {
//     render() {
//         const items= this.props.items.map(item => <li>{item}</li>);
//         return (
//         <div className="Navigation">
//           <h1>Lista de compras para {this.props.name}</h1>
//           <ul>
//             {items}
//           </ul>
//         </div>
//       );
//     }
//   }

// function Navigation(props){
//     const items= props.items.map(item => <li>{item}</li>);
//     return (
//         <div className="Navigation">
//            <h1>Lista de compras para {props.name}</h1>
//            <ul>
//              {items}
//            </ul>
//          </div>
//     )
// }

export default Navigation;
