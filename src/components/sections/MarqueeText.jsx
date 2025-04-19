import { VelocityScroll } from "../magicui/scroll-based-velocity";

export function MarqueeText() {
  return (
    <>
    <div className="relative flex w-full bg-[rgb(254, 202, 202)] dark:bg-[rgb(6, 95, 70)] flex-col items-center justify-center overflow-hidden">
      <VelocityScroll defaultVelocity={2}>Free and Powerful</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-[rgb(255, 255, 255)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-[rgb(255, 255, 255)]"></div>
    </div>
    <div className="relative flex w-full bg-[rgb(254, 202, 202)] dark:bg-[rgb(6, 95, 70)] flex-col items-center justify-center overflow-hidden">
      <VelocityScroll defaultVelocity={3}>Easy and Flexible</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-[rgb(255, 255, 255)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-[rgb(255, 255, 255)]"></div>
    </div>
    </>
    
  );
}
