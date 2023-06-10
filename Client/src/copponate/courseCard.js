import React from 'react'
import { Link } from 'react-router-dom'
export default function CourseCard(props) {
    return (
        <div className="col-md-4 col-12 my-3 mx-auto">
            <div className="card" >
                <img src={props.img} className="card-img-top img-height " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.discription}...</p>
                    <Link to="/Notes" className="btn  btn-secondary">Start Watching</Link>
                </div>
            </div>
        </div>
    )
}
