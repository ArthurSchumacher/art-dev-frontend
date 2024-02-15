"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { Github, Linkedin, Newspaper } from "lucide-react";
import React, { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Sobre", href: "#about" },
    { title: "Experiência", href: "#experience" },
    { title: "Trabalho", href: "#work" },
    { title: "Contato", href: "#about" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className="bg-content3 shadow-lg"
      position="static"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="text-2xl font-medium text-foreground">
            Art<span className="text-primary-500">.dev</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href={"#about"}
            className="text-foreground hover:border-b hover:border-b-primary"
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#experience"}
            className="text-foreground hover:border-b hover:border-b-primary"
          >
            Experiência
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#work"}
            className="text-foreground hover:border-b hover:border-b-primary"
          >
            Trabalho
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#contact"}
            className="text-foreground hover:border-b hover:border-b-primary"
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="https://www.linkedin.com/in/arthur-schumacher/"
            target="_blank"
            className="text-primary hover:text-primary-400"
          >
            <Linkedin />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://github.com/ArthurSchumacher"
            target="_blank"
            className="text-primary hover:text-primary-400"
          >
            <Github />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="http://art-schumacher.infinityfreeapp.com/cvpdf"
            target="_blank"
            className="text-primary hover:text-primary-400"
          >
            <Newspaper />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="max-h-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              <span className="text-foreground">{item.title}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
