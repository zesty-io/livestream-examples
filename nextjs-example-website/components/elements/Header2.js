import React from 'react'

export default function Header2({text='Fallback data'}){
    return ( 
        <div>
            <hr />
            <h2>{text}</h2>
            <hr/>
        </div>
    )
}