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

// import React, { useState } from "react";
// import "./Banner.scss";
// import bannerMobile from "./banner-principal-mobile.jpg";
// import bannerDesktop from "./banner-principal.jpg";

// function Banner(props) {
//   const images = [bannerMobile, bannerDesktop];
//   const [position, setPosition] = useState(0);

//   const previousImage = () => {
//     if (position <= 0) {
//       setPosition(images.length - 1);
//     } else {
//       setPosition(position - 1);
//     }
//   };
//   const nextImage = () => {
//     if (position >= (images.length-1)) {
//       setPosition(0);
//     } else {
//       setPosition(position + 1);
//     }
//   };

//   const points = images.map((image, index) => (
//     <button
//       className={position === index ? "active" : ""}
//       onClick={() => setPosition(index)}
//     />
//   ));

//   return (
//     <div className="Banner">
//       <div className="Banner-buttonsContainer">
//         <button className="button" onClick={previousImage}>
//           <i className="fa fa-chevron-left" aria-hidden="true"></i>
//         </button>
//         <button className="button" onClick={nextImage}>
//           <i className="fa fa-chevron-right" aria-hidden="true"></i>
//         </button>
//       </div>
//       <img
//         src={images[position]}
//         srcset=""
//         className="Banner-img"
//         alt="Banner Principal"
//       />
//       <div className="Banner-circles">{points}</div>
//     </div>
//   );
// }

// export default Banner;
