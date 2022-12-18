import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import Skills from "./components/Skills/Skills"
import Contact from './components/contacts/Contact';

function App() {
  return (
    <div className="App container">
      <Header />
      <Main />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
