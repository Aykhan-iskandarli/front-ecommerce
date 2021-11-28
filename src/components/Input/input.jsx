import React from 'react'
import "./input.css"

const input = ({children,className,style,placeholder,type, onChange,value,checked,required,name}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} checked={checked} name={name} required={required} className={`input ${className}`} style={style} onChange={onChange}>
            {children}
        </input>
    )
}

export default input
