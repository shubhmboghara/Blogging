import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Controller } from 'react-hook-form'

const toolbarOptions = [
  [{ 'header': [1, 2, 3, false] }],
  ['bold','italic','underline','strike'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link','image','code-block'],
  ['clean']
]

export default function RTE({ name, control, label, defaultValue = '' }) {
  return (
    <div className="w-full mb-4">
      {label && <label className="block mb-2 text-sm font-medium">{label}</label>}
      <Controller
        name={name || 'content'}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            placeholder="Start writing here…"
            modules={{ toolbar: toolbarOptions }}
            formats={[
              'header','bold','italic','underline','strike',
              'list','bullet','link','image','code-block'
            ]}
            style={{ minHeight: 200 }}
            className='bg-white text-black'
          />
        )}
      />
    </div>
  )
}
