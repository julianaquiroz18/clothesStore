import "./Categories.scss";
import sportwears from "./banner-deportivo.jpg";
import kids from "./banner-moda-infantil.jpg";

function Categories(props) {
  return (
    <div className="Categories">
        <img className="Categories-img"src={kids} alt="Moda Infantil"/>
        <img className="Categories-img"src={sportwears} alt="Moda Desportiva"/>  
    </div>
  );
}

export default Categories;
