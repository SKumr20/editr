"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { codeBlock } from "@blocknote/code-block";

// Save contents to local storage.
async function saveToStorage(jsonBlocks) {
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

// Get previously stored editor contents.
async function loadFromStorage() {
  const storageString = localStorage.getItem("editorContent");
  return storageString ? JSON.parse(storageString) : undefined;
}

export default function Editor() {
  // Get the theme
  const { resolvedTheme } = useTheme();
  
  const [initialContent, setInitialContent] = useState("loading"); // Remove TypeScript type annotation here

  // Load the content from local storage when the component mounts.
  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  // Create the editor with inital content 
  // SEE DOCS
  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({
       initialContent,
       // add plugins here
       extensions: [codeBlock],
    });
  }, [initialContent]);

  // If the editor is not created yet, show loading text.
  if (editor === undefined) {
    return "Loading content...";
  }

  // Save content to local storage whenever it changes.
  const handleEditorChange = () => {
    saveToStorage(editor.document);
  };

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
