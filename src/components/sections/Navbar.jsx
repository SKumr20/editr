import ToggleDarkmode from "../ui/ToggleDarkmode";
import { PencilLine } from "lucide-react";
import GithubSmallBtn from "../ui/GithubSmallbtn";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-1 md:p-3 mt-6 mx-10 md:mx-20 lg:mx:50 xl:mx-80 bg-background backdrop-blur-md rounded-lg border border-border shadow-xs">
      <div className="flex items-center gap-2">
        {/* Left - Title and logo */}
        <div className="flex items-center gap-2">
          <PencilLine strokeWidth={1.5} />
          <h2 className="font-bold" >Editr</h2>
        </div>
        {/* Nav links */}
        <div>
          <Link href='/editor'>
            <Button variant='nav' size='sm'>Get started</Button>
          </Link>
          <Link href='#'>
            <Button variant='nav' size='sm'>Changelog</Button>
          </Link>
        </div>
      </div>
        {/* Right side div */}
        <div className="flex items-center gap-2">
          <GithubSmallBtn />
          <ToggleDarkmode />
        </div>
    </div>
  )
}

export default Navbar