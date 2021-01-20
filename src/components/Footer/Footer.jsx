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
  }

  getToggleIcon(index) {
    return this.state.menusState[index] ? "minus" : "plus";
  }

  render() {
    const policiesMenuClass = this.state.menusState[0] ? "isOpen" : "";
    const aboutMenuClass = this.state.menusState[1] ? "isOpen" : "";

    return (
      <footer className="Footer">
        <section className="Footer-information">
          <div className="Footer-block">
            <div className="Footer-block-titleContainer">
              <h4 className="Footer-block-title">POLÍTICAS</h4>
              <button
                className="Footer-block-plusButton"
                onClick={() => this.toggleMenu(0)}
              >
                <i
                  className={`fa fa-${this.getToggleIcon(0)}`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <ul className={`Footer-block-list ${policiesMenuClass}`}>
              <li className="Footer-block-list-item">
                <a href=" ">Políticas de privacidad</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Políticas de cambio</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Políticas de envío</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Términos y condiciones</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Responsabilidad social</a>
              </li>
            </ul>
          </div>
          <div className="Footer-block">
            <div className="Footer-block-titleContainer">
              <h4 className="Footer-block-title">ACERCA DE SPEEDO</h4>
              <button
                className="Footer-block-plusButton"
                onClick={() => this.toggleMenu(1)}
              >
                <i
                  className={`fa fa-${this.getToggleIcon(1)}`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <ul className={`Footer-block-list ${aboutMenuClass}`}>
              <li className="Footer-block-list-item">
                <a href=" ">Encuentra tu tienda</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Contáctanos</a>
              </li>
              <li className="Footer-block-list-item">
                <a href=" ">Trabaja con nosotros</a>
              </li>
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
              <a
                href="https://www.facebook.com/"
                className="Footer-socialNetworks-button"
              >
                <img src={facebook} alt="Facebook link" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="Footer-socialNetworks-button"
              >
                <img src={twitter} alt="Twitter link" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="Footer-socialNetworks-button"
              >
                <img src={instagram} alt="Instagram link" />
              </a>
              <a
                href="https://www.youtube.com/"
                className="Footer-socialNetworks-button"
              >
                <img src={youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <p className="Footer-copyRight">
            © Copyright Colombia. Todos los derechos reservados
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
