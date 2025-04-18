"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTheme } from "next-themes";

export const BackgroundGradientAnimation = ({
  lightGradientBackgroundStart = "rgb(245, 245, 245)",
  lightGradientBackgroundEnd = "rgb(255, 255, 255)",
  darkGradientBackgroundStart = "rgb(10, 10, 10)",
  darkGradientBackgroundEnd = "rgb(30, 30, 30)",
  lightFirstColor = "166, 243, 255",  
  lightSecondColor = "254, 202, 202", 
  lightThirdColor = "187, 247, 208", 
  lightFourthColor = "221, 214, 254", 
  lightFifthColor = "252, 231, 243",
  darkFirstColor = "30, 64, 175",  
  darkSecondColor = "157, 23, 77", 
  darkThirdColor = "6, 95, 70", 
  darkFourthColor = "91, 33, 182", 
  darkFifthColor = "131, 24, 67",  
  pointerColor = "255, 0, 80",   
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName
}) => {
  const interactiveRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Cursor movement state
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  
  // Browser detection
  const [isSafari, setIsSafari] = useState(false);
  
  // Use mounted state to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Determine if dark mode is active
  const isDarkMode = mounted && resolvedTheme === "dark";

  // Calculate colors based on theme using useMemo to prevent unnecessary recalculations
  const colors = useMemo(() => {
    return {
      gradientBackgroundStart: isDarkMode ? darkGradientBackgroundStart : lightGradientBackgroundStart,
      gradientBackgroundEnd: isDarkMode ? darkGradientBackgroundEnd : lightGradientBackgroundEnd,
      firstColor: isDarkMode ? darkFirstColor : lightFirstColor,
      secondColor: isDarkMode ? darkSecondColor : lightSecondColor,
      thirdColor: isDarkMode ? darkThirdColor : lightThirdColor,
      fourthColor: isDarkMode ? darkFourthColor : lightFourthColor,
      fifthColor: isDarkMode ? darkFifthColor : lightFifthColor
    };
  }, [
    isDarkMode,
    darkGradientBackgroundStart, lightGradientBackgroundStart,
    darkGradientBackgroundEnd, lightGradientBackgroundEnd,
    darkFirstColor, lightFirstColor,
    darkSecondColor, lightSecondColor,
    darkThirdColor, lightThirdColor,
    darkFourthColor, lightFourthColor,
    darkFifthColor, lightFifthColor
  ]);

  // Apply CSS variables only once when component mounts and when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.style.setProperty("--gradient-background-start", colors.gradientBackgroundStart);
    root.style.setProperty("--gradient-background-end", colors.gradientBackgroundEnd);
    root.style.setProperty("--first-color", colors.firstColor);
    root.style.setProperty("--second-color", colors.secondColor);
    root.style.setProperty("--third-color", colors.thirdColor);
    root.style.setProperty("--fourth-color", colors.fourthColor);
    root.style.setProperty("--fifth-color", colors.fifthColor);
    root.style.setProperty("--pointer-color", pointerColor);
    root.style.setProperty("--size", size);
    root.style.setProperty("--blending-value", blendingValue);
  }, [colors, pointerColor, size, blendingValue, mounted]);

  // Use requestAnimationFrame for smoother cursor movement
  useEffect(() => {
    if (!interactive) return;
    
    let animationFrameId;
    
    const move = () => {
      if (interactiveRef.current) {
        setCurX(prev => prev + (tgX - prev) / 20);
        setCurY(prev => prev + (tgY - prev) / 20);
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      animationFrameId = requestAnimationFrame(move);
    };
    
    animationFrameId = requestAnimationFrame(move);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [tgX, tgY, curX, curY, interactive]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  // Safari detection with useEffect to avoid hydration mismatch
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Use data attributes for theme to avoid FOUC (Flash of Unstyled Content)
  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 transition-colors duration-300",
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}></div>
        )}
      </div>
    </div>
  );
};