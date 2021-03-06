import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Popular_Items from './components/Popular_items/Popular_Items';
import Slider from './components/Slider/Slides';
import Guides from './components/Guides/Guides';
import Popular_brands from './components/Popular_brands/Popular_brands';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Slider />
      <Popular_Items />
      <Guides /> 
      <Popular_brands />
    </>
  );
}

export default App;
