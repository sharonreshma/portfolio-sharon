import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Internship from './components/Internship';
import Certificate from './components/Certificate'
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Internship/>
      <Certificate/>
      <Contacts/>
      <Footer/>
      
    </div>
  );
}

export default App;
