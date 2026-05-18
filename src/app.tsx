import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Resume from "./components/resume";

// App
type Language = "de" | "en";

const App = () => {
  const [hide, setHide] = useState(true);
  const [language, setLanguage] = useState<Language>("de");

  const HomeLayout = (
    <>
      <Banner hide={hide} setHide={setHide} lang={language} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} lang={language} setLang={setLanguage} />
          <Hero lang={language} />
        </div>
        <About lang={language} />
        <Experience lang={language} />
        <Tech />
        <Works lang={language} />

        {/* Contact */}
        <div className="relative z-0">
          <Contact lang={language} />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </>
  );

  const ResumeLayout = (
    <>
      <Banner hide={hide} setHide={setHide} lang={language} />
      <div className="relative z-0 bg-primary min-h-screen">
        <Navbar hide={hide} lang={language} setLang={setLanguage} />
        <Resume lang={language} />
        <Footer />
      </div>
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomeLayout} />
        <Route path="/resume" element={ResumeLayout} />
        <Route path="*" element={HomeLayout} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
