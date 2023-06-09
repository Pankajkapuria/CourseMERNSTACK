import React from 'react'
import CourseCard from '../copponate/courseCard'
import MostCouuse from '../copponate/MostCouuse';
import CourseApi from '../API/CourseApi';

function Course() {
  return (
    <div className='my-5' >
      <h2 className='text-center text-color my-3' >Free Courses</h2>
      <div className="row">
            <MostCouuse/>
        <div className="col-10 mx-auto">
          <div className="row">
            {CourseApi.map( (val,ind)=>{
              return <CourseCard key={ind} title={val.title} img={val.Img} discription={val.Discription.slice(0,180)} />
            } )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course;
