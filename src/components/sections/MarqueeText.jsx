import { VelocityScroll } from "../magicui/scroll-based-velocity";

export function MarqueeText() {
  return (
    <>
    <div className="relative flex w-full bg-background flex-col items-center justify-center overflow-hidden">
      <VelocityScroll defaultVelocity={2}>Free Powerful Customizable</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-[rgb(255, 255, 255)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-[rgb(255, 255, 255)]"></div>
    </div>
    <div className="relative flex w-full bg-background flex-col items-center justify-center overflow-hidden">
      <VelocityScroll defaultVelocity={3}>Easy Flexible Pretty</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-[rgb(255, 255, 255)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-[rgb(255, 255, 255)]"></div>
    </div>
    </>
    
  );
}
