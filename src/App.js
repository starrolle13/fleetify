// import logo from './logo.svg';
import './App.css';
import Benefits from './components/Benefits';
import CellPhone from './components/CellPhone';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Sell from './components/Sell';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

function App() {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  const center = { lat: 41.44417, lng: -90.15196 };
  const zoom = 12;
  const mapId = 'fbe3afe67839325';
  const mapTypeId = 'hybrid';
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Benefits />
      <CellPhone />
      <Reviews />
      <Pricing />
      <Sell />
      <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
        <Contact
          center={center}
          zoom={zoom}
          mapId={mapId}
          mapTypeId={mapTypeId}
        />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
