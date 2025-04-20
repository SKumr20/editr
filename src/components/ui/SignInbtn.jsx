import { SignInButton } from "@clerk/nextjs";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const SignInbtn = () => {
  return (
    <InteractiveHoverButton>
        <SignInButton />
    </InteractiveHoverButton>
  )
}

export default SignInbtn