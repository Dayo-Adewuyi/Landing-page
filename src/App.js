import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes"
import Home from "./components/sections/Home"
import Roadmap from "./components/sections/Roadmap"
import Team from "./components/sections/Team"
import About from "./components/sections/About"
import Faq from "./components/sections/Faq"
import Footer from "./components/sections/Footer"
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
    <GlobalStyles />
     <ThemeProvider theme={light}>
      <Navigation/>
      <Home />
      <About />
      <Roadmap />
      
      <Faq />
      <Team />
      <Footer />
      
      <ScrollToTop/>
     </ThemeProvider>
    </>
  );
}

export default App;
