import React from 'react'
import NavBar1 from './NavBar1'
import NavBar2 from './NavBar2'

export default function NavBar() {
    return (
        <>
            <div className='navber'>
                <NavBar1 />
                <hr className='hr' />
                <NavBar2 />
            </div>
        </>
    )
}
