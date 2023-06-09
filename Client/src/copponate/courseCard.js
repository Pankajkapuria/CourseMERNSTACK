import React from 'react'
// import img from '../images/img1.jpg'
export default function CourseCard(props) {
    return (
            <div className="col-md-4 col-10 my-3 ">
                <div className="card" >
                    <img src={props.img} className="card-img-top img-height " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.discription}...</p>
                        <a href="/" className="btn  btn-secondary">Start Watching</a>
                    </div>
                </div>
            </div>
    )
}
