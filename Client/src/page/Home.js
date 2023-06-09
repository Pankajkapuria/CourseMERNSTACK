import React from 'react'
import img1 from '../images/img2.jpg'
import MostCouuse from '../copponate/MostCouuse'
import { Link } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      {/* mid section */}
      <div className="row mt-5">
        <div className="col-12 mx-auto">
          <div className="row">
            <div className="col-md-5 mx-auto col-10 order-2 order-md-1 d-flex flex-column justify-content-center  align-items-start ">
              <h2>Learn code with <span className='text-color' >PankajKapuria</span></h2>
              <h3 className='ms-2'>Course Learn  <span className="courseName"></span> </h3>
              <p className='text-secondary' >Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
              <Link to="/Course" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Free Course &rarr;</Link>
            </div>
            <div className="col-md-5 mx-auto col-10 order-1 order-md-2">
              <img className='card-img-top' src={img1} alt="" />
            </div>
          </div>

        </div>
      </div>

      <h1 className='text-center mt-5 pt-5' >Most Course</h1>
      {/* most course */}
      <MostCouuse />

    </div>
  )
}
