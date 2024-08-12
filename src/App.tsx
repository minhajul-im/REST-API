import { useState } from "react";

import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import FeatureHighlights from "./components/common/FeatureHighlights";
import Shop from "./components/shop/Shop";
import CoverImage from "./components/common/CoverImage";
import About from "./components/about/About";
import FAQuestion from "./components/faq/FAQ";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Greet from "./components/Greet";

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <>
      <Navbar isDark={theme} onToggle={() => setTheme(!theme)} />
      <Hero />
      <section
        className={`theme-${
          theme ? "black" : "white"
        } bg-BG-main text-TX-main pt-6 font-fontReg`}>
        <FeatureHighlights />
        <Shop isDark={theme} />
        <CoverImage />
        <About />
        <FAQuestion isDark={theme} />
        <Contact isDark={theme} />
        <Footer isDark={theme} />
      </section>
      <Greet name="Minhaj" />
    </>
  );
};

export default App;
