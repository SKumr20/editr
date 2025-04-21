"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";
import { useTheme } from "next-themes";



export default function App() {

  // Get the theme
  const { resolvedTheme } = useTheme();

  // Stores the document JSON.
  const [blocks, setBlocks] = useState([]);

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Welcome To Editr.",
        props: { level: '2'}
      },
      {
        type: "image",
        props: { 
          url: "https://cataas.com/cat/gif",
          height: '100',
          width: '100',
        }
      },
      {
        type: "heading",
        content: "Start Typing below.",
        props: { level: '3'}
      },
    ],
  });

  // Renders the editor instance and its document JSON.
  return (
    <div className="h-full overflow-auto rounded-lg">
        <BlockNoteView
          editor={editor}
          theme={resolvedTheme}
          onChange={() => {
            // Saves the document JSON to state.
            setBlocks(editor.document);
          }}
        />
    </div>
  );
}
