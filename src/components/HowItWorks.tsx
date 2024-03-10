import React from "react";
import Container from "./Container";
import { Biohazard, Presentation, Receipt, Rocket } from "lucide-react";
import { Image } from "@nextui-org/react";

function HowItWorks() {
  return (
    <section className="bg-content3">
      <Container>
        <div className="flex items-center justify-center sm:py-16 py-8">
          <p className="p-4 rounded-full border border-content4 bg-content4">
            <Biohazard />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:pb-16 pb-8">
          <div className="sm:col-span-1 col-span-3 self-center mx-auto">
            <Image
              alt="placa"
              src="/motherboard.jpeg"
              className="border-primary border-4 rounded-none"
            />
            <div className="py-4">
              <p className="inline-flex items-center gap-4">
                <Presentation />
                Planejar
              </p>
              <p>Os primeiros passos serão planejar e projetar o sistema.</p>
            </div>
          </div>
          <div className="sm:col-span-1 col-span-3 self-center mx-auto">
            <Image
              alt="placa"
              src="/teclado.jpeg"
              className="border-primary border-4 rounded-none"
            />
            <div className="py-4">
              <p className="inline-flex items-center gap-4">
                <Rocket />
                Executar
              </p>
              <p>
                Executar cada ideia que você tenha em mente, digitalizando seu
                trabalho.
              </p>
            </div>
          </div>
          <div className="sm:col-span-1 col-span-3 self-center mx-auto">
            <Image
              alt="placa"
              src="/dollarbill.png"
              className="border-primary border-4 rounded-none"
            />
            <div className="py-4">
              <p className="inline-flex items-center gap-4">
                <Receipt />
                Faturar
              </p>
              <p>Faturamentos de forma simples e objetiva com seu projeto.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
