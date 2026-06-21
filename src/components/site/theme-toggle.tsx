import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {mounted ? (
        isDark ? <Sun className="size-4" /> : <Moon className="size-4" />
      ) : <Sun className="size-4 opacity-0" />}
    </button>
  );
}
