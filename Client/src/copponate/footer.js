import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
                    {/* Twitter */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                    {/* Google */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
                    {/* Instagram */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
                    {/* Linkedin */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                    {/* Github */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
                {/* Section: Social media */}
            </div>
            <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(27, 27, 211,0.6)' }}>
                <p>@2023 : Course & Notes Store by pankaj kapuria</p>
            </div>
        </footer>

    )
}

export default Footer
