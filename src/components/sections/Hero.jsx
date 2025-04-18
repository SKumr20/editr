import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { TextFlip } from "../ui/TextFlip";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 mx-10 flex items-center justify-center px-4 pointer-events-none text-center">
        <div className="font-extrabold text-7xl flex flex-col gap-4 items-center">
          <p>The all in one editor for your</p>
          <p className="flex items-center justify-center">
            <span className="inline-block">
              <TextFlip className="text-3xl md:text-4xl lg:text-7xl" />
            </span>
            <span className="ml-4">needs</span>
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero;