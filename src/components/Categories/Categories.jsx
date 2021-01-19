import "./Categories.scss";
import sportwears from "./banner-deportivo.jpg";
import kids from "./banner-moda-infantil.jpg";

function Categories(props) {
  const categoriesImages = [kids, sportwears];
  const categories = categoriesImages.map((img, index) => (
    <article key={index}>
      <img className="Categories-img" src={img} alt="Imagen categorías" />
    </article>
  ));
  return <section className="Categories">{categories}</section>;
}

export default Categories;
