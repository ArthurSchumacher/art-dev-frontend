import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceDetails from "@/components/ExperienceDetails";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Transition from "@/components/Transition";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorkGrid from "@/components/WorkGrid";
import { Job } from "@/types/job";
import { Stack } from "@/types/stack";

const experiencesList: Job[] = [
  {
    enterprise_name: "Living Lab",
    title: "Desenvolvedor de software",
    description:
      "Desenvolvimento de API's, digitalização de formulários, micro serviços, criação de layouts, SOLID, MVC, elaboração de sistemas distribuídos e criação de componentes.",
    startDate: new Date("2023-09-12T00:00:00"),
  },
];

const stackItems: Stack[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Nest" },
  { name: "Laravel" },
  { name: "TypeScript" },
  { name: ".NET Core" },
  { name: "Docker" },
  { name: "C/C++" },
  { name: "MySQL" },
  { name: "Postgres" },
  { name: "SQL Server" },
  { name: "Git" },
];

export default async function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Transition />
      <About />
      <Experiences experiencesList={experiencesList} />
      <ExperienceDetails stackItems={stackItems} />
      <WorkGrid />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
