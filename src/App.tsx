import About from "./components/About";
import BForm from "./components/BForm";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Galla from "./components/Galla";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <BForm />
      <Galla />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;