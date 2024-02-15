import { Job } from "@/types/job";

interface SingleExperienceProps {
  job: Job;
}

export default function SingleExperience({ job }: SingleExperienceProps) {
  return (
    <div className="px-5 py-10 mx-auto bg-content3">
      <div className="max-w-screen-md mx-auto flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-content2 pb-2 mb-2 border-b-2 border-foreground">
            {job.startDate.toLocaleDateString("en-US", { month: "short" })}
          </span>

          <span className="font-medium text-lg text-content2 title-font leading-none">
            {job.startDate.getDate()}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1">
            {job.enterprise_name} ({job.startDate.getFullYear()} -{" "}
            {new Date().getFullYear()})
          </h2>

          <h1 className="text-xl font-medium text-content1 mb-3">
            {job.title}
          </h1>

          <p className="leading-relaxed text-content2">{job.description}</p>
        </div>
      </div>
    </div>
  );
}
