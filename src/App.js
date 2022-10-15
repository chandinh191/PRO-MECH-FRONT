import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/index'
import Home from './pages/Home'
import Footer from './components/footer/index'
import Service from './pages/Service';
import About from './pages/About';
import  Dashboard  from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
