"use client";

import React, { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  ListOrderedIcon,
  QuoteIcon,
  Code2Icon,
  LinkIcon,
  Redo2Icon,
  Undo2Icon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ImageIcon,
} from "lucide-react";

import { toast } from "sonner";
import { getToken } from "~/utils/auth";

export function RichTextEditor({
  label = "Description",
  value,
  onChange,
  error,
  placeholder = "Write something amazing...",
}: {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  placeholder?: string;
}) {
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Link,
      Image,
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] focus:outline-none prose max-w-none dark:prose-invert",
      },
    },
  });

  // sync external value
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value && current !== value) {
      editor.commands.setContent(value, {
        emitUpdate: false,
      });
    }
  }, [value, editor]);

  // 🔥 Image Upload
  const handleImageUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      try {
        toast.loading("Uploading image...");

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/upload/image`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${getToken()}` },
            body: formData,
          },
        );

        const data = await res.json();
        toast.dismiss();

        if (!res.ok) throw new Error(data.message);

        editor?.chain().focus().setImage({ src: data.url }).run();
        toast.success("Image uploaded!");
      } catch (err) {
        toast.dismiss();
        toast.error("Upload failed");
      }
    };

    fileInput.click();
  };

  const setLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  if (!editor) return null;

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}

      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 border rounded p-2 bg-black">
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>

        {[1, 2, 3].map((level) => (
          <Button
            key={level}
            type="button"
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: level as any })
                .run()
            }
          >
            {level === 1 ? (
              <Heading1Icon className="h-4 w-4" />
            ) : level === 2 ? (
              <Heading2Icon className="h-4 w-4" />
            ) : (
              <Heading3Icon className="h-4 w-4" />
            )}
          </Button>
        ))}

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <ListIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrderedIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <QuoteIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code2Icon className="h-4 w-4" />
        </Button>

        <Button type="button" onClick={setLink}>
          <LinkIcon className="h-4 w-4" />
        </Button>

        <Button type="button" onClick={handleImageUpload}>
          <ImageIcon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2Icon className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2Icon className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <div ref={editorContainerRef} className="border rounded p-3 bg-black">
        <EditorContent editor={editor} />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
