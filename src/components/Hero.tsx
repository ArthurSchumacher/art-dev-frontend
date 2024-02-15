"use client";

import { Button, Link, Image, Skeleton } from "@nextui-org/react";
import { Newspaper } from "lucide-react";
import { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  theme: string;
}

export default function Hero({ theme }: HeroProps) {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <section className="bg-gradient-to-br from-content3 to-content4">
      <div className="flex px-5 py-10 md:flex-row flex-col items-center justify-center xl:h-screen lg:h-screen md:h-screen">
        <div className="lg:flex-grow max-w-screen-md md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center sm:pb-0 pb-28">
          <div className="block h-56 max-w-xs">
            <TypeAnimation
              sequence={[
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                "Oi meu nome é",
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
              ]}
              wrapper="p"
              cursor={false}
              className="sm:text-base text-light text-content2"
            />
            <TypeAnimation
              sequence={[
                1500,
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                1000,
                "Arthur Schumacher",
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
              ]}
              wrapper="h1"
              cursor={false}
              className="sm:text-2xl text-3xl font-medium text-content1"
            />
            <TypeAnimation
              sequence={[
                4000,
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                1000,
                "Eu construo coisas para a internet.",
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
                15000,
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                1000,
                "Eu construo sites para a internet.",
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
                15000,
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                1000,
                "Eu construo sistemas para a internet.",
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
              ]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              className="mb-4 font-normal text-content2"
            />
            <TypeAnimation
              sequence={[
                7500,
                (el) => el?.classList.add(CURSOR_CLASS_NAME),
                1000,
                "Eu sou um engenheiro de software especializado em criar a melhor solução para digitalizar o seu trabalho.", // Types 'One'
                (el) => el?.classList.remove(CURSOR_CLASS_NAME),
              ]}
              wrapper="h1"
              cursor={false}
              className="leading-relaxed text-justify text-content2"
            />
          </div>
          <div className="flex justify-center gap-2">
            <Button
              href="#contact"
              size="lg"
              radius="sm"
              as={Link}
              variant="solid"
              color="primary"
            >
              Contato
            </Button>
            <Button
              as={Link}
              href="http://art-schumacher.infinityfreeapp.com/cvpdf"
              target="_blank"
              size="lg"
              radius="sm"
              variant="solid"
              endContent={<Newspaper />}
              className="bg-content3 text-foreground"
            >
              Curriculum vitæ
            </Button>
          </div>
        </div>
        <div className="overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-3/4 order-first xl:order-last lg:order-last md:order-last py-10">
          <Suspense
            fallback={
              <Skeleton className="w-full h-full bg-content3 border-4 border-content4 rounded-full shadow-md" />
            }
          >
            <div className="bg-content3 border-4 border-content4 rounded-full shadow-md">
              <Image
                src={
                  theme === "light" ? "/lightmode-me.gif" : "darkmode-me.gif"
                }
                width={500}
                height={500}
                alt="Memoji"
                className="object-cover rounded-full"
              />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
