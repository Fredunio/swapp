import { RichTextEditor } from "@mantine/tiptap";
import { Link } from "@tiptap/extension-link";

import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

let filterTimeout: NodeJS.Timeout;

const debounceUpdate = (
  updatedContent: string,
  func: (contentHtml: string) => void,
  timeout: number
) => {
  clearTimeout(filterTimeout);
  if (!updatedContent) return;

  filterTimeout = setTimeout(() => {
    console.log("====>", updatedContent);
    func(updatedContent);
  }, timeout);
};

export default function TextEditor({
  initialContent,
  onUpdate,
  debounceTime,
}: {
  initialContent?: string;
  onUpdate: (contentHtml: string) => void;
  debounceTime?: number;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: initialContent,
    immediatelyRender: false, // avoid hydration mismatches
    onUpdate: ({ editor }) => {
      if (debounceTime) {
        debounceUpdate(editor.getHTML(), onUpdate, debounceTime);
      } else {
        onUpdate && onUpdate(editor.getHTML());
      }
    },
  });

  return (
    <RichTextEditor mih={300} editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
