import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

type ResumeProps = {
  lang: "de" | "en";
};

// Resume
export const Resume = ({ lang }: ResumeProps) => {
  return (
    <SectionWrapper idName="resume">
      <>
        <div className="mt-8 max-w-7xl mx-auto px-6 py-20">
          <p className={styles.sectionSubText}>{lang === "de" ? "Lebenslauf" : "Resume"}</p>
          <h2 className={styles.sectionHeadText}>
            {lang === "de" ? "Mein Lebenslauf" : "My Resume"}
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {lang === "de"
              ? "Sehen Sie hier meinen vollständigen Lebenslauf ein oder öffnen Sie die PDF-Vorschau für einen schnellen Überblick."
              : "View my full resume here, or open the PDF preview below for a quick look."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-[#915eff] text-white rounded-xl hover:bg-[#7a4de6] transition"
            >
              {lang === "de" ? "Lebenslauf als PDF herunterladen" : "Download Resume PDF"}
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]">
            <iframe
              src={`${import.meta.env.BASE_URL}resume.pdf`}
              title="Resume Preview"
              className="w-full h-[75vh]"
            />
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Resume;
