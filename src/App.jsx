import './App.css';
import Header from "./components/header/MyHeader"
import Nav from "./components/nav/MyNav"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/MyFooter"

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
