import { Button, Link } from "@nextui-org/react";

export default function About() {
  return (
    <section id="about" className="px-5 py-10 mx-auto bg-content3">
      <div className="flex flex-col text-center w-full md:max-w-screen-xl max-w-screen-md mx-auto">
        <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1 uppercase">
          software engineer
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-content1">
          Sobre mim
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-content2">
          Tenho 20 anos de idade, com habilidades comprovadas em programação.
          Sou autodidata e fluente em inglês, o que me permite aprender
          rapidamente novos conceitos e tecnologias.
        </p>
        <Button
          href="#social"
          as={Link}
          radius="sm"
          size="md"
          variant="solid"
          color="primary"
          className="mx-auto mt-4"
        >
          Redes Sociais
        </Button>
      </div>
    </section>
  );
}
