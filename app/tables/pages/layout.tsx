import { NavBar } from "@/components/NavBar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pages table"
}

export default function TablesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <NavBar />
      <div className="mt-8">{children}</div>
    </div>
  )
}
