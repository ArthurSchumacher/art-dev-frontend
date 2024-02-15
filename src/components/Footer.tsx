import { Link } from "@nextui-org/react";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-foreground bg-content3">
      <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link className="flex font-medium items-center md:justify-start justify-center text-foreground text-xl ">
          Art<span className="text-primary">.dev</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-content2 sm:py-2 sm:mt-0 mt-4">
          © 2024 Arthur Schumacher —
          <Link
            href="https://www.instagram.com/imarthur_"
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
            href="https://www.linkedin.com/in/arthur-schumacher/"
            target="_blank"
            className="ml-3 text-primary hover:text-primary-400"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.instagram.com/imarthur_"
            target="_blank"
            className="ml-3 text-primary hover:text-primary-400"
          >
            <Instagram />
          </Link>
          <Link
            href="https://github.com/ArthurSchumacher"
            target="_blank"
            className="ml-3 text-primary hover:text-primary-400"
          >
            <Github />
          </Link>
        </span>
      </div>
    </footer>
  );
}
