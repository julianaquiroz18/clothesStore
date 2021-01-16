import './App.scss';
import Navigation from '../Navigation/Navigation.jsx';
import Banner from '../Banner/Banner.jsx';
import Categories from '../Categories/Categories.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const items=['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
  return (
    <main className="App">
      <Navigation items={items}/>
      <Banner/>
      <Categories/>
      <Footer/>
    </main>
  );
}

export default App;
