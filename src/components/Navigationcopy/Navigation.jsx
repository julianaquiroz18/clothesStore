import { Component } from "react";
import "./Navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.onSearchChanged = this.onSearchChanged.bind(this);
  }
  onSearchChanged(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    const items = this.props.items.map((item) => <li>{item}</li>);
    return (
      <div className="Navigation">
        <h1>Lista de compras para {this.props.name}</h1>
        <input
          value={this.state.searchValue}
          onChange={this.onSearchChanged}
          type="text"
        />
        <ul>{items}</ul>
        <div>{this.state.searchValue}</div>
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
