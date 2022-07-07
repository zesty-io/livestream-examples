import React from 'react'

export default function AwesomeHeader({
    title,
    subtitle,
    image
}){
    return ( 
        <div style={{backgroundColor: 'seagreen', backgroundImage: `url(${image})` }}>
            
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
        </div>
    )
}