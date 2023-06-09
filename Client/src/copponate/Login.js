import React, { useContext, useState } from 'react'
import img from '../images/img2.jpg'
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../ContextApi/ContextApi';
import Input from './input';


function Login() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
    })

    const context = useContext(UserContext);
    const { setUser } = context

    const hendalInput = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const hendelSumbit = async (e) => {
        e.preventDefault();

        const responce = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userdata.email,
                password: userdata.password
            })
        })
        const data = await responce.json();
        if (data.token !== undefined) {
            localStorage.setItem('token', data.token);
            setUser(data.msg, data.token)
            if (data.status === 400 || data.msg !== 'redirect Home useAuth') {
                alert("filed valid email or password")
            }
            else {
                navigate('/');
            }
        }
        else {
            alert("filed valid email or password")
        }

    }



    return (
        <>
            <h1 className='mt-3' >Login</h1>
            <div className="container box-shadow  p-5">
                <div className="row">
                    <div className="col-md-7 col-10 order-1 ">
                        <img className='card-img-top' src={img} alt='img' />
                    </div>
                    <div className="col-md-5 col-10 order-2">
                        <form onSubmit={hendelSumbit}>
                            <div className="row">
                                <div className="col-md-7 mx-auto mt-3 ">
                                    <Input htmlFor='email' textName='email' type='email' name='email' id='email' value={useState.email} hendalInput={hendalInput} placeholder='email' />
                                    <Input htmlFor='password' textName='password' type='password' name='password' id='password' value={useState.password} hendalInput={hendalInput} placeholder='password' />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="mt-3">
                            <p>If your have not account? <Link to='/SignUp'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login