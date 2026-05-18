import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = {
  index: number;
  name: string;
  description: { de: string; en: string };
  tags: readonly { name: string; color: string }[];
  image?: string;
  images?: readonly string[];
  source_code_link: string;
  live_site_link: string;
  lang: "de" | "en";
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
  live_site_link,
  lang,
}: ProjectCardProps) => {
  const slideImages = images && images.length > 0 ? images : image ? [image] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slideImages.length <= 1) {
      setActiveIndex(0);
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [slideImages.length]);

  const activeImage = slideImages[activeIndex] ?? slideImages[0] ?? "";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        {activeImage ? (
          <img
            src={activeImage}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full rounded-2xl bg-[#111827] flex items-center justify-center text-secondary text-sm">
            No preview available
          </div>
        )}
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description[lang]}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
  );
};

type WorksProps = {
  lang: "de" | "en";
};

// Works
export const Works = ({ lang }: WorksProps) => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {lang === "de" ? "Meine Arbeit" : "My Work"}
          </p>
          <h2 className={styles.sectionHeadText}>
            {lang === "de" ? "Projekte." : "Projects."}
          </h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {lang === "de"
              ? "Diese Projekte zeigen meine Erfahrung mit Digital Signage, Intranet-Portalen, Vertragsmanagementsystemen, benutzerdefinierten HTML/JavaScript-Anwendungen, WordPress-Entwicklung und Shopify-Shops."
              : "These projects showcase my experience with digital signage, intranet portals, contract management systems, custom HTML/JavaScript applications, WordPress development, and Shopify storefronts."}
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} lang={lang} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
