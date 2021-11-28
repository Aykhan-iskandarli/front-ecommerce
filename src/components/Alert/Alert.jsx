import React from 'react'

const Alert = ({className, style,children}) => {
    return (
        <div className={`alert ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Alert
