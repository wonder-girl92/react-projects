import './App.css';
import QrCodeGenerator from './components/qr-code-generator';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view';
// import menus from './components/tree-view/data';
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

      {/* <ImageSlider 
      url={'https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_end=10'} 
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      <QrCodeGenerator />
    </>
  );
}

export default App;
