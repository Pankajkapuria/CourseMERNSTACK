import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='row bg-primary text-white'>
            <div className='col-12 mx-auto mt-5'>
                <div className="row">
                    <div className=" col-md -3 ">
                        <p>Pankaj kapuria</p>
                        <p>The Ultimate Guide To Ace SDE Interviews.</p>
                    </div>
                    <div className=" col-md -3 ">
                        <p>Menu</p>
                        <li><Link className='p' to='/'>Home</Link></li>
                        <li>Course</li>
                        <li>Notes</li>
                        <li>Connect</li>
                        <li>About</li>
                    </div>
                    <div className=" col-md -3 ">
                        <p>Service</p>
                        <li>Privicy</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
