import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import { MarqueeText } from "@/components/sections/MarqueeText";

export default function Home() {
  return (
   <>
    <Hero />
    <MarqueeText />
   </>
  );
}
