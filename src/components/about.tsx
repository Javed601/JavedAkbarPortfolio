import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: { de: string; en: string };
  icon: string;
  lang: "de" | "en";
};

// Service Card
const ServiceCard = ({ index, title, icon, lang }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title[lang]} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title[lang]}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

type AboutProps = {
  lang: "de" | "en";
};

// About
export const About = ({ lang }: AboutProps) => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{lang === "de" ? "Einführung" : "Introduction"}</p>
          <h2 className={styles.sectionHeadText}>{lang === "de" ? "Überblick." : "Overview."}</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {lang === "de" ? (
            <>
              Ich bin Microsoft 365 Administrator und Desktop Engineer mit
              praktischer Erfahrung in SharePoint SPFx-Entwicklung, Teams Calling,
              Power Automate, Azure AD und Endpoint-Management. Ich entwickle moderne
              Arbeitsplatzlösungen, individuelle Automatisierungen und verlässlichen
              Support für Geschäftsanwender in hybriden Umgebungen. In meiner Freizeit
              höre ich gern gute Musik, spiele Gitarre und handle gelegentlich als
              Trader.
            </>
          ) : (
            <>
              I am a Microsoft 365 Administrator and Desktop Engineer with hands-on
              experience in SharePoint SPFx development, Teams Calling, Power Automate,
              Azure AD, and endpoint management. I deliver modern workplace solutions,
              custom automation, and reliable support for business users across hybrid
              environments. In my free time I enjoy good music, play guitar, and
              sometimes trade.
            </>
          )}
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title.en} index={i} lang={lang} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
