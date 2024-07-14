import './App.css';
import ImageSlider from './components/image-slider';
// import AccMy from './accMy';
// import RandomColor from './components/accordion/random-color';
// import Accordion from './components/accordion';
// import StarRating from './components/star-rating';

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* <AccMy /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}

      <ImageSlider url={'https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_end=10'} />
    </>
  );
}

export default App;
