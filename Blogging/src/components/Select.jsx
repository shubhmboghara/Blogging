import React, { useId } from 'react'

function Select({
    options = [],   // fix typo from 'opstion'
    label = '',     // fix typo from 'lable'
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (

        <div className="w-full">

            {label &&
                <label
                    htmlFor={id}
                    className=''>
                    {label}
                </label >
            }
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options.map((option, index) => (
                    <option value={option} key={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))}
            </select>

        </div>
    )
}
export default React.forwardRef(Select)