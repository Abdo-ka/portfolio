import { FC } from "react";
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="flex-1 py-3 sm:text-lg">
      <p>
      I’m a software engineer with 4+ years of experience, specializing in Mobile Application,like reading book and cooking.
      </p>
      <p className="mt-2">
        Sometimes, I share new learnings or encountered problems.{" "}
        <em className="not-italic">
          I mainly talk about <strong>Flutter</strong>,{" "}
          <strong>Swift</strong> ,{" "}
          <strong>Kotlin</strong> and <strong>Other things</strong>
        </em>
      </p>
    </section>
  );
};
