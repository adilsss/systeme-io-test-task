import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">
        <Button variant="secondary" className="mt-8">
          Go to main page 👈
        </Button>
      </Link>
    </main>
  )
}
