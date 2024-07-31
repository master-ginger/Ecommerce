import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/productpage/:id" element={<ProductPage/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
