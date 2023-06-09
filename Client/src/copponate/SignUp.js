import React, { useState, useContext } from 'react'
import img from '../images/img1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Input from './input'
import UserContext from '../ContextApi/ContextApi';
function SignUp() {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const { setUser } = context

    const [userdata, setUserdata] = useState({
        Name: "",
        email: "",
        phoneNumber: "",
        password: "",
        ConfromPassword: ""
    })


    const hendalInput = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const hendalSumbit = async (e) => {
        e.preventDefault();
        const { Name, email, phoneNumber, password, ConfromPassword } = userdata;
        const responce = await fetch("user/registration", {
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name, email, phoneNumber, password, ConfromPassword
            })
        })

        const data = await responce.json();
        if (data.status === 400 || data.length > 0) {
            alert("not registered");
        }
        else {
            localStorage.setItem('token', data.authToken);
            setUser(data.msg, data.token)
            alert("ok sucessfully");
            navigate('/');
        }


    }

    return (<>
        <h1 className='mt-2' >Register Here</h1>
        <div className="container box-shadow  p-2">
            <div className="row">
                <div className="col-md-7 my-auto col-10 mx-auto order-1 ">
                    <img className='card-img-top ' src={img} alt='img' />
                </div>
                <div className="col-md-5 col-8 order-2 mx-auto ">
                    <div className="row">
                        <div className="col-md-7 mx-auto mt-2 ">
                            <form method='POST' onSubmit={hendalSumbit}>

                                <Input htmlFor='FullName' textName='Name' type='text' name='Name' id='FullName' value={useState.Name} hendalInput={hendalInput} placeholder='Full Name' />
                                <Input htmlFor='email' textName='email' type='email' name='email' id='email' value={useState.email} hendalInput={hendalInput} placeholder='email' />
                                <Input htmlFor='phoneNumber' textName='phoneNumber' type='text' name='phoneNumber' id='phoneNumber' value={useState.phoneNumber} hendalInput={hendalInput} placeholder='phoneNumber' />
                                <Input htmlFor='password' textName='password' type='password' name='password' id='password' value={useState.password} hendalInput={hendalInput} placeholder='password' />
                                <Input htmlFor='confrom-password' textName='confrom-password' type='password' name='ConfromPassword' id='confrom-password' value={useState.ConfromPassword} hendalInput={hendalInput} placeholder='confrom-password' />
                                <button type="submit mt-1" className="btn btn-primary">Submit</button>
                            </form>
                            <div className="mt-1">
                                <p>If have account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SignUp