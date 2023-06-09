import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar2() {
    return (
        <>
            <div className="row mt-0">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link className="nav2Logo mx-5 ps-3" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ps-5 mx-auto">
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">HTML</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">CSS</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">JS</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">NODE JS</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">JAVA</a>
                                </li>

                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">DSA</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="Nav2" href="/">MONGODB</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
