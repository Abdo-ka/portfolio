import { Link } from "@/components/ui/link";
import { ReactNode } from "react";

export type Experience = {
  title: ReactNode;
  company: ReactNode;
  location?: ReactNode;
  from: string;
  to: string | null;
  noDuration?: boolean;
  description: ReactNode;
};
export const EXPERIENCES: Experience[] = [
  {
    title: "Consultant Flutter Developer",
    company: (
      <Link target="_blank" href="https://www.linkedin.com/company/castlescode/">
        Castles Code
      </Link>
    ),
    location: "Dubai, UAE (Remote)",
    from: "2021-3",
    to: "2024-11",
    description: (
      <>
        <p>
        Training and teaching new students to make app from scratch on Flutter framework
        </p>
      </>
    ),
  },
  {
    title: "Flutter Developer",
    company: (
      <Link target="_blank" href="http://www.ulutech-sy.com/">
        Ulutech
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2021-10",
    to: "2022-12-8",
    description: (
      <>
        <p>
          I contributed to{" "}
          <a href="https://play.google.com/store/apps/details?id=com.nbs.alphameal&hl=en&pli=1">
            HumyApp
          </a>
          's Application development.{" "}
        </p>
      </>
    ),
  },
  {
    title: "Mobile Application Developer",
    company: "Maktabi LTD",
    location: "Aleppo, Syria",
    from: "2022-2",
    to: "2023-3",
    description: (
      <>
        <div>
          <p>
          Built a religious app that amassed a user base of over {" "}
            <strong>1M </strong>
            on Google Play {" "}
            <a href="https://play.google.com/store/apps/details?id=com.thewaytoheaveen.eslamicapp&hl=en_US">The Way To Heaven</a>.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Mobile Application Developer",
    company: (
      <Link target="_blank" href="https://www.linkedin.com/company/jacksi/">
        Jacksi LTD 
      </Link>
    ),
    location: "Erbil, Iraq (Remote)",
    from: "2023-4",
    to: "2024-7",
    description: (
      <div>
        <p>
          Led the development of multiple projects and actively contributed to
          others, most notably Car Market
        </p>
      </div>
    ),
  },
  {
    title: "Flutter Developer – Team Lead",
    company: (
      <Link target="_blank" href="https://www.linkedin.com/company/rzain/">
        Rzain 
      </Link>
    ),
    location: "istanbul , Türkiye(Remote)",
    from: "2024-7",
    to: "2025-1",
    description: (
      <div>
        <p>
          Led the development of multiple projects and actively contributed to
          others, most notably{" "}
         Car Market
        </p>
      </div>
    ),
  },
  {
    title: "Mobile AppLication Developer",
    company: (
      <Link target="_blank" href="https://www.architweb.com/">
        ArchitWeb 
      </Link>
    ),
    location: "Cyberjaya, Selangor, Malaysia (Remote)",
    from: "2025-3",
    to: null,
    description: (
      <div>
        <p>
        Led the development of multiple Flutter projects, communicating directly with clients
         to understand their needs, align on requirements, 
         and propose improvements for better outcomes.
        </p>
      </div>
    ),
  },
];


