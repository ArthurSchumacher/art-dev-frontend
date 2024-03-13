"use client";

import { Button, Link, Skeleton } from "@nextui-org/react";
import { Newspaper } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import paths from "@/paths";
import Container from "./Container";
import { Poppins, Fira_Code } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "300", "200", "100"],
});

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500", "400", "300"],
});

export default function Hero() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-content3">
        <Skeleton className="bg-gradient-to-br from-content3 to-content4 h-dvh rounded-b-3xl" />
      </div>
    );
  }

  if (theme) {
    return (
      <div
        className={`bg-content3
      ${
        mounted && theme === "light"
          ? `${poppins.className}`
          : `${fira_code.className}`
      }`}
      >
        <section className="bg-gradient-to-br from-content3 to-content4 rounded-b-3xl">
          <div className="glass rounded-b-3xl shadow-lg">
            <Container>
              <div className="grid grid-cols-3 items-center h-screen">
                <div className="lg:col-span-2 col-span-3 max-w-xl lg:text-left text-center sm:mx-auto lg:mt-0 sm:-mt-64 -mt-32">
                  <TypeAnimation
                    style={{
                      height: "23px",
                      display: "block",
                    }}
                    sequence={[
                      (el) => el?.classList.add(CURSOR_CLASS_NAME),
                      "Oi meu nome é",
                      (el) => el?.classList.remove(CURSOR_CLASS_NAME),
                    ]}
                    cursor={false}
                    className="sm:text-base text-light text-content2"
                  />
                  <TypeAnimation
                    style={{
                      height: "36px",
                      display: "block",
                    }}
                    sequence={[
                      1500,
                      (el) => el?.classList.add(CURSOR_CLASS_NAME),
                      1000,
                      "Arthur Schumacher",
                      (el) => el?.classList.remove(CURSOR_CLASS_NAME),
                    ]}
                    cursor={false}
                    className="sm:text-2xl text-3xl font-medium text-content1"
                  />
                  <TypeAnimation
                    style={{
                      height: "20px",
                      display: "block",
                    }}
                    sequence={[
                      4000,
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
                    cursor={false}
                    repeat={Infinity}
                    className="mb-4 sm:text-base text-sm text-content2"
                  />
                  <TypeAnimation
                    style={{
                      height: "104px",
                      display: "block",
                    }}
                    sequence={[
                      7500,
                      (el) => el?.classList.add(CURSOR_CLASS_NAME),
                      1000,
                      "Eu sou um engenheiro de software especializado em criar a melhor solução para digitalizar o seu trabalho.", // Types 'One'
                      (el) => el?.classList.remove(CURSOR_CLASS_NAME),
                    ]}
                    cursor={false}
                    className="leading-relaxed lg:text-justify sm:text-center text-justify text-content2"
                    speed={75}
                  />
                  <div className="flex flex-row items-center lg:justify-start justify-center gap-x-4 lg:-mt-4 sm:-mt-8 mt-8">
                    <Button
                      href="#contact"
                      size="lg"
                      radius="sm"
                      as={Link}
                      variant="solid"
                      color="primary"
                      className="border-none"
                    >
                      Contato
                    </Button>
                    <Button
                      as={Link}
                      href={paths.curriculum()}
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

                <div className="lg:col-span-1 col-span-3 self-center mx-auto order-first lg:order-last -my-32 overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-3/4 p-2">
                  <div className="bg-transparent/5 border-4 border-content4 profile shadow-md">
                    <Image
                      src={
                        theme === "light"
                          ? "/lightmode-me.gif"
                          : "/darkmode-me.gif"
                      }
                      width={500}
                      height={500}
                      alt="Memoji"
                      className="object-cover profile"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}
