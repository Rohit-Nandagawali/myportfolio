import './App.css'
import {HashRouter,Route, Routes} from 'react-router-dom'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App = () => {
    
    return ( 
        
        <div>
            
            <HashRouter>
                <div>
                        <NavBar/>            
                        <Routes>      
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/skills" element={<Skills/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                        <GoHome/>
                </div>
                
            </HashRouter>
            
            
          
        </div>
     )
}
 
export default App;