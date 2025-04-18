import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { TextFlip } from "../ui/TextFlip";

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col gap-10 items-center justify-center px-4 pointer-events-none text-center">
        {/* Heading div with textflip */}
        <div className="font-extrabold text-6xl md:text-7xl flex flex-col items-center">
          <p className="leading-tight">The all in one editor for your</p>
          <div className="flex flex-wrap items-center justify-center">
            <div className="inline-block overflow-hidden mt-2">
              <TextFlip className="text-7xl" />
            </div>
            <span className="ml-2 md:ml-4">needs.</span>
          </div>
        </div>
        {/* Desctiption text */}
        <p className="text-3xl opacity-60 font-light tracking-tighter max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          Editr is a simple, free and easy to use online editor, with all the necessary features, clean UI to make quick notes, share and collaborate easily.
        </p>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero;