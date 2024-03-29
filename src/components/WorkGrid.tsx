"use client";

import {
  Card,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  CardHeader,
  Divider,
  CardBody,
  ModalFooter,
  Button,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import { Github } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./Container";

const workList = [
  {
    src: "/bpf-2.png",
    width: 600,
    height: 360,
    stack: "React + Laravel",
    title: "BPF Digital",
    description:
      "Este projeto digitaliza os formulários que precisam ser preenchidos para guardar informações sobre boas práticas de produção das indústrias. Tive a oportunidade de desenvolver o Back-end desta aplicação em Laravel 8. Geração de relatórios em PDFs, desenvolvimento de JSON Api e OAuth 2.0.",
  },
  {
    src: "/york.png",
    width: 601,
    height: 361,
    stack: "Nest + Next.js",
    title: "Gestão NeloreYork",
    description:
      "Este sistema gerencia e cadastra os nelores e separa eles automaticamente por lotes. Para que seja feito um relátorio melhor e mais elaborado de cada lote do leilão.",
  },
  {
    src: "/viviane.png",
    width: 603,
    height: 363,
    stack: "NEXT.JS + React",
    title: "Viviane Corrêa Arquitetura",
    description:
      "Está é uma landing page simples institucional para um arquiteta renomada em São Paulo.",
  },
];

export default function WorkGrid() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedWork, setSelectedWork] = useState<{
    src: string;
    width: number;
    height: number;
    stack: string;
    title: string;
    description: string;
  } | null>(null);

  const handleModal = (work: {
    src: string;
    width: number;
    height: number;
    stack: string;
    title: string;
    description: string;
  }) => {
    setSelectedWork(work);
    onOpen();
  };

  const workCards = workList.map((work, index) => (
    <Card
      key={index}
      isPressable
      onPress={() => handleModal(work)}
      className="h-64 relative sm:col-span-1 col-span-3"
    >
      <Image
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={work.src}
        width={work.width}
        height={work.height}
      />
      <div className="px-8 py-10 relative z-10 w-full h-full bg-content4 opacity-0 hover:opacity-100 cursor-pointer flex items-center justify-center flex-col">
        <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
          {work.stack}
        </h2>
        <h1 className="text-content1 text-lg font-medium mb-3">{work.title}</h1>
        <p className="text-content2 leading-relaxed overflow-hidden">
          Clique para saber mais.
        </p>
      </div>
    </Card>
  ));

  return (
    <div id="work" className="bg-content3">
      <Container>
        <div className=" flex flex-col items-center justify-center sm:py-16 py-8">
          <h1 className="sm:text-3xl text-2xl font-medium text-content1 sm:mb-16 mb-8">
            Meus Trabalhos
          </h1>
          <div className="grid grid-cols-3 gap-8 w-full">{workCards}</div>
        </div>
      </Container>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        placement="center"
      >
        <ModalContent className="bg-content3">
          {selectedWork && (
            <>
              <ModalHeader className="text-content1">
                {selectedWork.title}
              </ModalHeader>
              <ModalBody>
                <Card radius="sm" className="bg-content4 text-content2">
                  <CardHeader>
                    <Image
                      width={selectedWork.width}
                      height={selectedWork.height}
                      alt={selectedWork.title}
                      src={selectedWork.src}
                      className="rounded-sm mx-auto"
                    />
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p>{selectedWork.description}</p>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button
                  as={Link}
                  href="https://github.com/ArthurSchumacher"
                  target="_blank"
                  radius="sm"
                  variant="solid"
                  color="primary"
                  endContent={<Github />}
                >
                  Github
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
