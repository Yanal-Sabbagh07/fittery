import React from 'react'

export default function MenuList(props) {
    return (
        <li 
        className={props.active ? "active" : ""}
        onClick={()=>{
            props.onChecked(props.id)
        }}>
           {props.item}
        </li>
    )
}
