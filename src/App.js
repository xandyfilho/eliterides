import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Container from './components/layout/Container';
import NewCar from './components/pages/NewCar';
import styles from './components/layout/Container.module.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Car from './components/pages/Car';

function App() {
  return (    
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/newcar" element={<NewCar />} />
            <Route path="/cars/:id" element={<Car />} />
          </Routes>
        </Container>
      <Footer />
    </Router>    
  );
}

export default App;