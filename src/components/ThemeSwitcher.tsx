"use client";

import { Button, Link } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link className="cursor-pointer text-primary hover:text-primary-400">
      {theme === "light" ? (
        <Moon onClick={() => setTheme("dark")} />
      ) : (
        <Sun onClick={() => setTheme("light")} />
      )}
    </Link>
  );
}
