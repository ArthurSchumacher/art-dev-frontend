import { Job } from "@/types/job";
import SingleExperience from "./SingleExperience";

interface ExperiencesProps {
  experiencesList: Job[];
}

export default function Experiences({ experiencesList }: ExperiencesProps) {
  return (
    <section id="experience">
      {experiencesList.map((job, index) => {
        return <SingleExperience key={index} job={job} />;
      })}
    </section>
  );
}
