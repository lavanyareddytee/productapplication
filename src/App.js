import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '../src/Components/Pages/Home'; 
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Item from './Components/Items/Item';
import Additem from './Components/Items/Additem';
import Edititem from './Components/Items/Edititem';
import Navbar from './Components/Layouts/Navbar';

function App() {
  return (
    <Router>
              <div className="App">
<Navbar />
  
      <Routes>
        <Route exact path="/home" element={<Home />} >Home</Route>
        <Route exact path="/about" element={<About />} >About</Route>
        <Route exact path="/contact" element={<Contact />} >Contact</Route>
        <Route exact path="/Items/:id" element={<Item />} >Item</Route>
        <Route exact path="/Items/edit/:id" element={<Edititem />} >Edititem</Route>
        <Route exact path="/Items/add" element={<Additem />} >Additem</Route>
        
        </Routes>
        
        </div>
        </Router>              
  
  );
}

export default App;
