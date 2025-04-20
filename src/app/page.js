import Hero from "@/components/sections/Hero";
import { MarqueeText } from "@/components/sections/MarqueeText";
import Navbar from "@/components/sections/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
   <>
   <ThemeProvider>
      <Navbar />
      <Hero />
      <MarqueeText />
   </ThemeProvider>
    
   </>
  );
}
