import React from 'react'
import img from '../images/pankaj3.jpg';


function About() {
  return (
    <div className="row  my-5 ">


      <div className="col-12 mx-auto mt-5  ">
        <div className="row">
          <div className="col-md-5 mx-auto col-10 order-2 order-md-2  d-flex flex-column justify-content-center  align-items-start ">
            <h1>About US</h1>
            <p className='mt-3 fw-semibold'> My Name is Pankaj Kapuria. I am From Jhunjhunu. I graduate in <span className="fw-semibold text-color">College of technology and engineering udaipur. My branch is computer science.</span> </p>
            <p className='fw-semibold'>Knowage:- <span className="fw-semibold text-color">DSA JAVA WEBDEVLOPER NODEJS MONGODB</span></p>
            <p className='fw-semibold'>ProFaction :- Student</p>
            <p className='fw-semibold'>Connect Number :-7733890716 </p>
            <p className='fw-semibold'>Email :-pankajJJn60@gmail.com </p>
          </div>
          <div className="col-md-5 mx-auto col-10 order-md-1 order-1 ">
            <img className='img-fluid img-thumbnail rounded' src={img} alt="" />
          </div>

        </div>


      </div>
    </div>

  )
}

export default About
