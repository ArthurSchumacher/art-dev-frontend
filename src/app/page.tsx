"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceDetails from "@/components/ExperienceDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SingleExperience from "@/components/SingleExperience";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorkGrid from "@/components/WorkGrid";
import { Job } from "@/types/job";
import { Stack } from "@/types/stack";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
  { name: "SQL" },
  { name: "Git" },
];

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme)
    return (
      <>
        <Header />
        <Hero theme={theme} />
        <About />

        {experiencesList.map((job, index) => {
          return <SingleExperience key={index} job={job} />;
        })}

        <ExperienceDetails stackItems={stackItems} />
        <WorkGrid />
        <Contact />
        <WhatsAppButton />
        <Footer />
      </>
    );
}
