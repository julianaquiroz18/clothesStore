import "./Banner.scss";
import bannerMobile from "./banner-principal-mobile.jpg";

function Banner(props) {
  return (
    <div className="Banner">
      <div className="Banner-buttons">
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      <img src={bannerMobile} className="Banner-img" alt="Banner Principal" />
      <div className="Banner-circles">
          <div/>
          <div/>
      </div>
    </div>
  );
}

export default Banner;
