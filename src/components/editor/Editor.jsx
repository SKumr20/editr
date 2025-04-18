"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";

export default function Editor() {
  // Get the theme
  const { resolvedTheme } = useTheme();
  
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  
  // Renders the editor instance using a React component.
  return (
    <div className="h-screen">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme}
        className="h-full w-full"
      />
    </div>
  );
}