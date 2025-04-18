import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { TextFlip } from "../ui/TextFlip";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 mx-10 flex flex-col gap-10 items-center justify-center-safe px-4 pointer-events-none text-center">
        {/* Heading div with textflip */}
        <div className="font-extrabold text-7xl flex flex-col gap-4 items-center">
          <p>The all in one editor for your</p>
          <p className="flex items-center justify-center">
            <span className="inline-block">
              <TextFlip className="text-3xl md:text-4xl lg:text-7xl" />
            </span>
            <span className="ml-4">needs</span>
          </p>
        </div>
        {/* Desctiption text */}
        <p className="text-2xl font-light tracking-tight mx-10 md:mx-40">Editr is a simple, free and easy to use online editor, with all the necessary features, clean UI, and more. Make quick notes, share and collaborate easily, and much more! </p>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero;