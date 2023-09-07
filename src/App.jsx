import './App.css';
import Header from "./components/header/MyHeader"
import Nav from "./components/nav/MyNav"
import Projects from "./components/projects/Projects"
import Creative from "./components/creative_writing/CreativeWriting"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/MyFooter"

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Projects/>
      <Creative/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
