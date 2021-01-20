import "./Banner.scss";
import bannerMobile from "./banner-principal-mobile.jpg";
import bannerDesktop from "./banner-principal.jpg";

function Banner(props) {
  return (
    <section className="Banner">
      <div className="Banner-buttonsContainer">
        <button className="button">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button className="button">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <picture>
        <source srcSet={bannerDesktop} media="(min-width: 1024px)" />
        <img className="Banner-img" src={bannerMobile} alt="Banner Principal" />
      </picture>
      <div className="Banner-circles">
        <button className="active" />
        <button />
      </div>
    </section>
  );
}

export default Banner;

