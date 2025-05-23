import { SignInButton } from "@clerk/nextjs";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const SignInbtn = () => {
  return (
    <InteractiveHoverButton className="pointer-events-auto border-none border-0 outline-none focus:ring-0">
        <SignInButton />
    </InteractiveHoverButton>
  )
}

export default SignInbtn