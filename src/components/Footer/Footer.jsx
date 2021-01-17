import { Component } from "react";
import "./Footer.scss";
import facebook from "./icon-facebook.svg";
import twitter from "./icon-twitter.svg";
import instagram from "./icon-instagram.svg";
import youtube from "./icon-youtube.svg";


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menusState: [false, false],
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.getToggleIcon = this.getToggleIcon.bind(this);
  }
  toggleMenu(index) {
    const copyMenuState = [...this.state.menusState];
    copyMenuState[index] = !copyMenuState[index];
    this.setState({ menusState: copyMenuState });
  };


  getToggleIcon(index){ 
    return this.state.menusState[index] ? "minus" : "plus"
  };

  render() {
    const policiesMenuClass = this.state.menusState[0] ? "isOpen" : "";
    const aboutMenuClass = this.state.menusState[1] ? "isOpen" : "";
    
    return (
      <div className="Footer">
        <div className="Footer-information">
          <div className="Footer-block">
            <div className="Footer-block-titleContainer">
              <h4 className="Footer-block-title">POLÍTICAS</h4>
              <button className="Footer-block-plusButton" onClick={()=>this.toggleMenu(0)}>
                <i className={`fa fa-${this.getToggleIcon(0)}`} aria-hidden="true"></i>
              </button>
            </div>
            <ul className={`Footer-block-list ${policiesMenuClass}`}>
              <li>Políticas de privacidad</li>
              <li>Políticas de cambio</li>
              <li>Políticas de envío</li>
              <li>Términos y condiciones</li>
              <li>Responsabilidad social</li>
            </ul>
          </div>
          <div className="Footer-block">
            <div className="Footer-block-titleContainer">
              <h4 className="Footer-block-title">ACERCA DE SPEEDO</h4>
              <button className="Footer-block-plusButton" onClick={()=>this.toggleMenu(1)}>
                <i className={`fa fa-${this.getToggleIcon(1)}`} aria-hidden="true"></i>
              </button>
            </div>
            <ul className={`Footer-block-list ${aboutMenuClass}`}>
              <li>Encuentra tu tienda</li>
              <li>Contáctanos</li>
              <li>Trabaja con nosotros</li>
            </ul>
          </div>
          <div className="Footer-block">
            <div className="Footer-block-titleContainer">
              <h4 className="Footer-block-title">MEDIOS DE PAGO</h4>
              <button className="Footer-block-plusButton">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="Footer-block">
            <h4 className="Footer-block-title">SÍGUENOS EN:</h4>
            <div className="Footer-socialNetworks">
              <button className="Footer-socialNetworks-button">
                <img src={facebook} alt="" />
              </button>
              <button className="Footer-socialNetworks-button">
                <img src={twitter} alt="" />
              </button>
              <button className="Footer-socialNetworks-button">
                <img src={instagram} alt="" />
              </button>
              <button className="Footer-socialNetworks-button">
                <img src={youtube} alt="" />
              </button>
            </div>
          </div>
        </div>
        <p className="Footer-copyRight">
          © Copyright Colombia. Todos los derechos reservados
        </p>
      </div>
    );
  };
};




// class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false,
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }
//   toggleMenu() {
//     this.setState({ isMenuOpen: !this.state.isMenuOpen });
//     console.log(this.state.isMenuOpen)
//   };

//   render() {
//     const menuClass = this.state.isMenuOpen ? "isOpen" : "";
//     return (
//       <div className="Footer">
//         <div className="Footer-information">
//           <div className="Footer-block">
//             <div className="Footer-block-titleContainer">
//               <h4 className="Footer-block-title">POLÍTICAS</h4>
//               <button className="Footer-block-plusButton" onClick={this.toggleMenu}>
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//               </button>
//             </div>
//             <ul className={`Footer-block-list ${menuClass}`}>
//               <li>Políticas de privacidad</li>
//               <li>Políticas de cambio</li>
//               <li>Políticas de envío</li>
//               <li>Términos y condiciones</li>
//               <li>Responsabilidad social</li>
//             </ul>
//           </div>
//           <div className="Footer-block">
//             <div className="Footer-block-titleContainer">
//               <h4 className="Footer-block-title">ACERCA DE SPEEDO</h4>
//               <button className="Footer-block-plusButton">
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//               </button>
//             </div>
//             <ul className="Footer-block-list">
//               <li>Encuentra tu tienda</li>
//               <li>Contáctanos</li>
//               <li>Trabaja con nosotros</li>
//             </ul>
//           </div>
//           <div className="Footer-block">
//             <div className="Footer-block-titleContainer">
//               <h4 className="Footer-block-title">MEDIOS DE PAGO</h4>
//               <button className="Footer-block-plusButton">
//                 <i class="fa fa-plus" aria-hidden="true"></i>
//               </button>
//             </div>
//           </div>
//           <div className="Footer-block">
//             <h4 className="Footer-block-title">SÍGUENOS EN:</h4>
//             <div className="Footer-socialNetworks">
//               <button className="Footer-socialNetworks-button">
//                 <img src={facebook} alt="" />
//               </button>
//               <button className="Footer-socialNetworks-button">
//                 <img src={twitter} alt="" />
//               </button>
//               <button className="Footer-socialNetworks-button">
//                 <img src={instagram} alt="" />
//               </button>
//               <button className="Footer-socialNetworks-button">
//                 <img src={youtube} alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <p className="Footer-copyRight">
//           © Copyright Colombia. Todos los derechos reservados
//         </p>
//       </div>
//     );
//   };
// };

// function Footer(props) {
//   return (
//     <div className="Footer">
//       <div className="Footer-information">
//         <div className="Footer-block">
//           <div className="Footer-block-titleContainer">
//             <h4 className="Footer-block-title">POLÍTICAS</h4>
//             <button className="Footer-block-plusButton">
//               <i class="fa fa-plus" aria-hidden="true"></i>
//             </button>
//           </div>
//           <ul className="Footer-block-list">
//             <li>Políticas de privacidad</li>
//             <li>Políticas de cambio</li>
//             <li>Políticas de envío</li>
//             <li>Términos y condiciones</li>
//             <li>Responsabilidad social</li>
//           </ul>
//         </div>
//         <div className="Footer-block">
//           <div className="Footer-block-titleContainer">
//             <h4 className="Footer-block-title">ACERCA DE SPEEDO</h4>
//             <button className="Footer-block-plusButton">
//               <i class="fa fa-plus" aria-hidden="true"></i>
//             </button>
//           </div>
//           <ul className="Footer-block-list">
//             <li>Encuentra tu tienda</li>
//             <li>Contáctanos</li>
//             <li>Trabaja con nosotros</li>
//           </ul>
//         </div>
//         <div className="Footer-block">
//           <div className="Footer-block-titleContainer">
//             <h4 className="Footer-block-title">MEDIOS DE PAGO</h4>
//             <button className="Footer-block-plusButton">
//               <i class="fa fa-plus" aria-hidden="true"></i>
//             </button>
//           </div>
//         </div>
//         <div className="Footer-block">
//           <h4 className="Footer-block-title">SÍGENOS EN:</h4>
//           <div className="Footer-socialNetworks">
//             <button className="Footer-socialNetworks-button">
//               <img src={facebook} alt="" />
//             </button>
//             <button className="Footer-socialNetworks-button">
//               <img src={twitter} alt="" />
//             </button>
//             <button className="Footer-socialNetworks-button">
//               <img src={instagram} alt="" />
//             </button>
//             <button className="Footer-socialNetworks-button">
//               <img src={youtube} alt="" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <p className="Footer-copyRight">
//         © Copyright Colombia. Todos los derechos reservados
//       </p>
//     </div>
//   );
// }

export default Footer;
