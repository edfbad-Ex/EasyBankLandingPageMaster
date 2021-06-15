import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <NavBar />

        <Banner />
      
        <SectionOne />

        <SectionTwo />

        <Footer />

      </header>
    </div>
  );
}

export default App;
