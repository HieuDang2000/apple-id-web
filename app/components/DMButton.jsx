"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DMButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      aria-label="Toggle dark theme"
      type="button"
      className=""
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 mr-4" />
      ) : (
        <MoonIcon className="h-6 w-6 mr-4" />
      )}
    </button>
  );
};

export default DMButton;
