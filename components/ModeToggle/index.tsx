"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} variant="outline" size="icon">
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      )}
    </div>
  )
}
