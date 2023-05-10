import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Products from './components/Products/Products';
import Home from './components/home/Home';
import ProductDetails from './components/ProductDetails';
import AddPro from './components/AddPro/AddPro';
function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <NavBar/>
    <SideBar/>
    <div className='web-body'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:productID' element={<ProductDetails/>} />
      <Route path='/products/add' element={<AddPro/>} />
    </Routes>
    </div> 
    </BrowserRouter>
    </div>
  );
}

export default App;

