import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultvalue = "", className }) {
  return (
    <>
      <div className='w-full  relative ml-20  mt-[1rem] mr-1000 '>
        {label && <label className='inline-block mb-1 pl-1'>
          {label}
        </label>}
      </div>
      <div className="mt-1">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="n380xa2fvlngbzd26ghnt4nbnqhegswxf4akvfz1cckdgz8r"
              initialValue={defaultvalue}
              className="mt-20"
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                  'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons'
                ],


                toolbar:
                  'undo redo | formatselect | bold italic underline | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | link image | emoticons | removeformat | help'

              }}
              onEditorChange={onChange}
            />
          )}

        />
      </div>
    </>
  )

}
