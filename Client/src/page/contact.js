import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../ContextApi/ContextApi';
function Contact() {

  const context = useContext(UserContext)
  const { auth } = context;

  const navigate = useNavigate();
  const CallAboutPage = async () => {
    const auth = localStorage.getItem('token');
    try {
      const responce = await fetch('user/Contact', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })

      const data = await responce.json();

      if (data.msg !== 'ok') {
        alert("Please Login or Register");
        navigate('/login');
      }

    } catch (error) {
      alert("Please Login or Register");
      navigate('/login');
    }
  }

  useEffect(() => {
    CallAboutPage();
  });

  return (
    <>
      <h1 className='mt-3'>Connect Us</h1>
      <div className="row mt-2 ">
        <div className="col-md-5 mx-auto col-10 order-md-1 order-1 coursebackground d-flex align-items-end justify-content-center ">
          <Link className='courseLink mx-3 my-3' target='_blank' to='https://github.com/Pankajkapuria' ><i class="fa-brands fa-github fa-2xl"></i></Link>
          <Link className='courseLink mx-3  my-3' target='_blank' to='https://www.instagram.com/pankaj_kapuria_07/'><i class="fa-brands fa-instagram fa-2xl"></i></Link>
          <Link className='courseLink mx-3  my-3' target='_blank' to='https://www.linkedin.com/in/pankaj-kumar-131982244/'><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
        </div>
      </div>

    </>

  )
}

export default Contact