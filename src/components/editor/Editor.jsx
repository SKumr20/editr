"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeBlock } from "@blocknote/code-block";
import { useCreateBlockNoteWithLiveblocks } from "@liveblocks/react-blocknote";

// Fallback for loading from localStorage before room is ready
async function loadFromStorage() {
  const storageString = localStorage.getItem("editorContent");
  return storageString ? JSON.parse(storageString) : undefined;
}

// Save content locally as backup (optional)
async function saveToStorage(jsonBlocks) {
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

export default function Editor() {
  const { resolvedTheme } = useTheme();
  const [initialContent, setInitialContent] = useState(undefined);

  // Load local content once on mount (optional for fallback or pre-population)
  useEffect(() => {
    loadFromStorage().then((content) => {
      if (content) {
        setInitialContent(content);
      }
    });
  }, []);

  // Create editor instance using Liveblocks
  const editor = useCreateBlockNoteWithLiveblocks({
    extensions: [codeBlock],
    initialContent,
  });

  // Optional: Store content changes locally
  const handleEditorChange = () => {
    if (editor) {
      saveToStorage(editor.document);
    }
  };

  if (!editor) return "Loading collaborative editor...";

  return (
    <div className="h-screen">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme}
        className="h-full w-full"
        onChange={handleEditorChange}
      />
    </div>
  );
}
