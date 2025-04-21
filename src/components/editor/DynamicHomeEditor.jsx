"use client";
 
import dynamic from "next/dynamic";
 
export const EditorHome = dynamic(() => import("./EditorHome"), { ssr: false });
