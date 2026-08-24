import WordsPullUpMultiStyle from "../components/shared/WordsPullUpMultiStyle";
import ScrollRevealText from "../components/shared/ScrollRevealText";

export default function About() {
  return (
    <section className="bg-black py-20 sm:py-28 md:py-36 px-4">
      <div className="bg-[#101010] max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">
          Visual arts
        </p>

        <div className="max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Marcus Chen,", className: "font-normal text-primary" },
              { text: "a self-taught director.", className: "italic font-serif text-primary" },
              {
                text: "I have skills in color grading, visual effects, and narrative design.",
                className: "font-normal text-primary",
              },
            ]}
          />
        </div>

        <ScrollRevealText
          text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
          className="mt-8 sm:mt-10 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed"
          style={{ color: "#DEDBC8" }}
        />
      </div>
    </section>
  );
}
