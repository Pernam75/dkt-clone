import './App.css';
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/400.css'; // Specify weight
import '@fontsource/roboto/400-italic.css'; // Specify weight and style
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Breadcrumb from './components/Breadcrumb';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <Breadcrumb/>
      <Product/>
    </div>
  );
}

export default App;
