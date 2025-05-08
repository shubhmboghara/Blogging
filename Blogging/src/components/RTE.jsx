import React, { useRef } from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultvalue = "", className }) {
  const editorRef = useRef(null)

  return (
    <div className={`w-full px-4 mt-4 ${className}`}>
      {label && <label className='block mb-2 text-sm font-medium'>{label}</label>}

      {/* Wrap in a touchable div that focuses the editor */}
      <div
        className="border rounded-lg"
        onTouchStart={() => {
          if (editorRef.current) editorRef.current.focus()
        }}
      >
        <Controller
          name={name || "content"}
          control={control}
          defaultValue={defaultvalue}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey='YOUR_API_KEY'
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={defaultvalue}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table help wordcount emoticons'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic underline | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | link image | emoticons | removeformat',
                mobile: {
                  menubar: false,
                  toolbar: 'undo redo | bold italic | bullist | link',
                  plugins: 'lists link autosave'
                },
                resize: true,
                browser_spellcheck: true,
                contextmenu: false,
                statusbar: false,
                quickbars: true,
                placeholder: 'Start writing here…',
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  )
}
