import React, { useContext } from "react";
import { Link, useLocation } from 'react-router-dom'
import UserContext from "../ContextApi/ContextApi";

const NavBar1 = () => {
    const location = useLocation();
    // use Context
    const context = useContext(UserContext);
    const { auth, setAuth } = context;
    const handleSumbit = () => {
        setAuth({
            user: null,
            token: ""
        })
        localStorage.clear();
        alert("Logout SucessFully")
    }


    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg  ">
                            <Link className="ms-5 logo" to="/"  >PankajKapuria</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                <ul className="navbar-nav ms-auto"  >
                                    <li className="nav-item active">
                                        <Link className={`NavItem mx-3 ${location.pathname === '/' ? 'activeclass' : ''}`} to="/">Home</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className={`NavItem mx-3 ${location.pathname === '/Course' ? 'activeclass' : ''}`} to="/Course">Course</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className={`NavItem mx-3 ${location.pathname === '/Notes' ? 'activeclass' : ''}`} to="/Notes">Notes</Link>
                                    </li><li className="nav-item active">
                                        <Link className={`NavItem mx-3 ${location.pathname === '/Contact' ? 'activeclass' : ''}`} to="/Contact">Contact</Link>
                                    </li><li className="nav-item active">
                                        <Link className={`NavItem mx-3 ${location.pathname === '/About' ? 'activeclass' : ''}`} to="/About">About</Link>
                                    </li>
                                </ul>



                                {auth.token === "" ? (<>
                                    <Link to='/Login' type="button" className="btn btn-primary mx-3">Login</Link>
                                    <Link to='/SignUp' type="button" className="btn btn-primary mx-3">Sign Up</Link>
                                </>) : (<>
                                    <Link onClick={handleSumbit} to='/' type="button" className="btn btn-primary mx-3">Logout</Link>
                                </>)}

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar1;