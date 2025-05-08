import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

const generatedId = useId()  
const id = props.id || generatedId;   

    return (
        <div className="w-full">
          {label && <label className='block mb-1' htmlFor={props.id}>
            {label}
        </label>}

        <input 
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
        ref={ref} {...props} id={id}
        ></input>
        </div>
    )   
})

export default Input

// 🧠 useRef() creates a reference to access real HTML elements

// 🧠 React.forwardRef lets a custom component accept and use that reference

// 🧠 We attach the ref to the <input> inside the child component

// 🧠 Now the parent can control that input — like focus(), clear(), etc.
