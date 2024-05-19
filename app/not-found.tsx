import Link from "next/link"
import { Button } from "../components/ui/button"

const NotFound = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
        Ooops... Wrong page
      </h2>
      <Link href="/">
        <Button variant="secondary" className="mt-8">
          Go to main page 👈
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
