import React from 'react'

const Input = (props) => {
    return (
        <div className="mb-2">
            <label htmlFor={props.htmlFor} className="form-label">{props.textName}</label>
            <input type={props.type} className="form-control" name={props.name} id={props.id} value={props.value} onChange={props.hendalInput} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
