"use client";

import { Button, Link, Skeleton } from "@nextui-org/react";
import { Newspaper } from "lucide-react";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className="bg-gradient-to-br from-content3 to-content4 h-dvh" />
    );
  }

  if (theme) {
    return (
      <section className="bg-gradient-to-br from-content3 to-content4">
        <div className="flex px-5 md:flex-row flex-col items-center justify-center h-dvh">
          <div className="lg:flex-grow max-w-screen-md md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center sm:pb-0 pb-28">
            <div className="block h-56 max-w-sm">
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
          <div className="overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-3/4 order-first xl:order-last lg:order-last md:order-last sm:py-0 py-10">
            <div className="bg-content3 border-4 border-content4 rounded-full shadow-md">
              <Image
                src={
                  theme === "light" ? "/lightmode-me.gif" : "/darkmode-me.gif"
                }
                width={500}
                height={500}
                alt="Memoji"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
