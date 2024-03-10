import { Button, Link } from "@nextui-org/react";
import * as utils from "@/utils";
import Container from "./Container";

export default function About() {
  const myBirthday = new Date("2003-01-17");
  const age = utils.myAge(myBirthday);

  return (
    <div id="about" className="bg-content4 pb-8">
      <Container>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1 uppercase">
            software engineer
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-content1">
            Sobre mim
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base text-content2 text-center">
            Tenho {age} anos de idade, com habilidades comprovadas em
            programação. Sou autodidata e fluente em inglês, o que me permite
            aprender rapidamente novos conceitos e tecnologias.
          </p>
          <Button
            href="#social"
            as={Link}
            radius="sm"
            size="md"
            variant="solid"
            color="primary"
            className="mt-4 max-w-xs"
          >
            Redes Sociais
          </Button>
        </div>
      </Container>
    </div>
  );
}
