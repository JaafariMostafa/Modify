"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-gray-500/20 w-16 h-8 animate-pulse flex items-center gap-2 py-1 px-3 rounded-full">
      </div>
    )
  }

  return (
    <div
      className="border border-neutral-400 dark:border-neutral-800 
        w-max flex items-center gap-1 py-0.5 px-1 rounded-full">
        <span
          className={`cursor-pointer rounded-full p-1 
            ${theme === 'light' ? "bg-neutral-700 text-neutral-300" : "text-neutral-600"}`} 
          onClick={() => setTheme('light')} 
        >
          <Sun 
            size={20} />
        </span>
        <span
          className={`cursor-pointer rounded-full p-1 
            ${theme === 'dark' ? "bg-neutral-300 text-neutral-700" 
              :
              "text-neutral-400"}`} 
          onClick={() => setTheme('dark')}
        >
          <Moon 
            size={20} />
        </span>
    </div>
  )
}