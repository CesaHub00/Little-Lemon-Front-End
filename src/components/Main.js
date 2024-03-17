import About from "./Main_page_comp/About";
import Hero from "./Main_page_comp/Hero";
import Testimonials from "./Main_page_comp/Testimonials";
import Specials from "./Main_page_comp/Specials";

function Main() {
    return (
      <>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </>
    );
  }
  
  export default Main;