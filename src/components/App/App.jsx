import "./App.scss";
import Navigation from "../Navigation/Navigation.jsx";
import Banner from "../Banner/Banner.jsx";
import Categories from "../Categories/Categories.jsx";
import Carrousel from "../Carrousel/Carrousel.jsx";
import Footer from "../Footer/Footer.jsx";
import { SearchResultProvider } from "../../contexts/searchResult.jsx";
import { Modal } from "../Modal/Modal";

function App() {
  return (
    <main className="App">
      <SearchResultProvider>
        <Navigation />
        <Modal />
      </SearchResultProvider>
      <Banner />
      <Categories />
      <Carrousel />
      <Footer />
    </main>
  );
}

export default App;
