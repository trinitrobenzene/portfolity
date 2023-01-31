import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import Skill from './pages/Skills';

function App() {
    return (
        <div className="main">
			<Navbar / >
            <Routes>
                <Route path="">
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skill />} />
                    <Route path='/contact' element={<Contact/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
