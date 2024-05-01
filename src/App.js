
import Footer from './components/Footer/Footer'
import ImageGallery from './components/current/Current'
import Banerswaper from './components/banerswaper/Banerswaper';
import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Subtitle from './components/subtitle/Subtitle'

function App() {

  return (
    <div className="App">
     
      <Header/>
      <Subtitle/>
      <Promo/>
      <Banerswaper/>
      <ImageGallery/>
      <Footer/>
    </div>
  );
}
export default App;
