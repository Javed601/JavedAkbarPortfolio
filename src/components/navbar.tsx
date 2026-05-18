import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
  lang: "de" | "en";
  setLang: (lang: "de" | "en") => void;
};

// Navbar
export const Navbar = ({ hide, lang, setLang }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translatedTitles: Record<string, { de: string; en: string }> = {
    about: { de: "Über mich", en: "About" },
    work: { de: "Projekte", en: "Work" },
    contact: { de: "Kontakt", en: "Contact" },
    resume: { de: "Lebenslauf", en: "Resume" },
  };

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary",
        isAtBottom || hide ? "mt-0" : "mt-20"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#915eff] shadow-[0_0_18px_rgba(145,94,255,0.45)] bg-[#050816]">
            <img
              src="/favicon.svg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Javed Akbar&nbsp;<span className="sm:block hidden">| IT Specialist</span>
          </p>
        </Link>

        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center rounded-full border border-white/20 bg-[#0b1120] p-1">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={cn(
                "px-3 py-1 rounded-full text-[14px] font-medium",
                lang === "de" ? "bg-white text-black" : "text-white/70 hover:text-white"
              )}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1 rounded-full text-[14px] font-medium",
                lang === "en" ? "bg-white text-black" : "text-white/70 hover:text-white"
              )}
            >
              EN
            </button>
          </div>
          <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-[18px] font-medium cursor-pointer"
              )}
              onClick={() => !link.link && setActive(link.title)}
            >
              {link.link ? (
                link.link.startsWith("/") ? (
                  <Link to={link.link}>{translatedTitles[link.id]?.[lang] ?? link.title}</Link>
                ) : (
                  <a href={link.link} target="_blank" rel="noreferrer noopener">
                    {translatedTitles[link.id]?.[lang] ?? link.title}
                  </a>
                )
              ) : (
                <a href={`#${link.id}`}>{translatedTitles[link.id]?.[lang] ?? link.title}</a>
              )}
            </li>
          ))}
        </ul>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    !link.link && setToggle(!toggle);
                    !link.link && setActive(link.title);
                  }}
                >
                  {link.link ? (
                    link.link.startsWith("/") ? (
                      <Link to={link.link}>{translatedTitles[link.id]?.[lang] ?? link.title}</Link>
                    ) : (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {translatedTitles[link.id]?.[lang] ?? link.title}
                      </a>
                    )
                  ) : (
                    <a href={`#${link.id}`}>{translatedTitles[link.id]?.[lang] ?? link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
