import { SignInButton } from "@clerk/nextjs";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const SignInbtnHome = () => {
  return (
    <InteractiveHoverButton className="scale-125 pointer-events-auto border-none border-0 outline-none focus:ring-0">
        <SignInButton />
    </InteractiveHoverButton>
  )
}

export default SignInbtnHome