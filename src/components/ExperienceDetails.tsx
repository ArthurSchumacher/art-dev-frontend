import { Stack } from "@/types/stack";
import { Link } from "@nextui-org/react";
import { ArrowRightCircle } from "lucide-react";

interface ExperienceDetailsProps {
  stackItems: Stack[];
}

export default function ExperienceDetails({
  stackItems,
}: ExperienceDetailsProps) {
  return (
    <section className="px-5 py-10 bg-content3">
      <div className="mx-auto max-w-screen-md items-center flex flex-wrap">
        <div className="pb-10 sm:pb-0 sm:mb-0 md:w-1/2 md:pr-12 md:border-r md:border-b-0 border-b border-foreground">
          <h5 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-content1">
            Habilidades
          </h5>
          <p className="text-content2 leading-relaxed text-base text-justify xl:text-left">
            Possuo uma forte capacidade de resolução de problemas e trabalho bem
            em equipe. Sou capaz de dar e receber feedbacks aos meus
            companheiros, além disso sou extremamente eficiente no meu trabalho.
          </p>
          <Link
            href="http://art-schumacher.infinityfreeapp.com/cvpdf"
            target="_blank"
            className="text-primary inline-flex items-center mt-4"
          >
            Curriculum vitæ
            <ArrowRightCircle className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 pt-10 sm:pt-0 sm:mt-0">
          <h2 className="font-light text-primary-400 tracking-wider text-sm mb-3">
            STACK
          </h2>
          <ul className="flex flex-wrap list-none">
            {stackItems.map((stack, index) => (
              <li
                key={index}
                className="lg:w-1/3 mb-1 w-1/2 text-content2 font-light"
              >
                {stack.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
