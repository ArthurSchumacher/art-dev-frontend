import paths from "@/paths";
import { Link } from "@nextui-org/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="text-foreground bg-content3">
      <Container>
        <div className="py-4 flex items-center sm:flex-row flex-col">
          <Link className="flex font-medium items-center md:justify-start justify-center text-foreground text-xl ">
            Art<span className="text-primary">.dev</span>
          </Link>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-content2 sm:py-2 sm:mt-0 mt-4">
            © 2024 Arthur Schumacher —
            <Link
              href={paths.instagram()}
              className="text-content2 ml-1 font-extralight"
              rel="noopener noreferrer"
              target="_blank"
            >
              @imarthur_
            </Link>
          </p>
          <span
            id="social"
            className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <Link
              href={paths.linkedin()}
              target="_blank"
              className="ml-3 text-primary hover:text-primary-400"
            >
              <Linkedin />
            </Link>
            <Link
              href={paths.instagram()}
              target="_blank"
              className="ml-3 text-primary hover:text-primary-400"
            >
              <Instagram />
            </Link>
            <Link
              href={paths.github()}
              target="_blank"
              className="ml-3 text-primary hover:text-primary-400"
            >
              <Github />
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
