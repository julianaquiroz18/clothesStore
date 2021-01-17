import "./Categories.scss";
import sportwears from "./banner-deportivo.jpg";
import kids from "./banner-moda-infantil.jpg";

function Categories(props) {
  const categoriesImages = [kids, sportwears];
  const categories = categoriesImages.map((img, index) => (
    <img key={index} className="Categories-img" src={img} alt="Imagen categorías" />
  ));
  return <div className="Categories">{categories}</div>;
}

export default Categories;
