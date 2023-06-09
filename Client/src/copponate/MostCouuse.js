import React from 'react'
import CourseCard from './courseCard'
import MostCourseApi from '../API/MostCourseApi'
export default function MostCouuse() {
    return (
        <div className='' >
            <div className="row">
                <div className="col-md-10 col-10 mx-auto ">
                    <div className="row">
                        {MostCourseApi.map((val, ind) => {
                            return <CourseCard key={ind} title={val.title} img={val.Img} discription={val.Discription.slice(0,180)} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
