import { FaGithub } from "react-icons/fa6"
import { Button } from "./button";
import Link from "next/link";
import { links } from "@/data/links";

const GithubSmallBtn = () => {
  return (
    <Link href={links.socials.currentRepo} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size='sm'>
        <FaGithub className="scale-125" />
      </Button>
    </Link>

  )
}

export default GithubSmallBtn