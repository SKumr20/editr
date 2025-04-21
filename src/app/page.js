import Hero from "@/components/sections/Hero";
import { MarqueeText } from "@/components/sections/MarqueeText";
import Navbar from "@/components/sections/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomeEditor from '@/components/sections/HomeEditor.jsx';
export default function Home() {
  return (
   <>
   <ThemeProvider>
      <Navbar />
      <Hero />
      <HomeEditor />
      <MarqueeText />
   </ThemeProvider>
    
   </>
  );
}
