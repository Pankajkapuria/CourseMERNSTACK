import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../ContextApi/ContextApi';
function Contact() {

  const context = useContext(UserContext)
  const { auth } = context;

  const navigate = useNavigate();
  const CallAboutPage = async () => {
    const auth = localStorage.getItem('token');
    try {
      const responce = await fetch('http://localhost:8000/user/Contact', {
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
    <div>
      {JSON.stringify(auth)}
    </div>
  )
}

export default Contact