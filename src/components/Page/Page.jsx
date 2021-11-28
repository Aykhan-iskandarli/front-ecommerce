import React from 'react'
import "./page.css"

const Page = ({children,className,style}) => {
    return (
        <div className={`page ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Page
