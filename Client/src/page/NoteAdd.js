import React, { useContext, useState } from 'react'
import Input from '../copponate/input'
import UserContext from '../ContextApi/ContextApi'
import { useNavigate } from 'react-router-dom';
// import Notes from './Notes';

function NoteAdd() {
    const navtate = useNavigate();
    const context = useContext(UserContext);
    const { addNote } = context

    const [userdata, setUserdata] = useState({
        title: "",
        teg: "",
        dis: ""
    })
    const hendalInput = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    const hendelSumbit = (e) => {
        e.preventDefault();
        addNote(userdata.title, userdata.teg, userdata.dis);
        navtate('/Notes');
    }
    return (
        <div>
            <h1>Add Notes</h1>
            <div className="col-md-7 col-10 mx-auto">
                <form onSubmit={hendelSumbit}>
                    <Input htmlFor='title' textName='title' type='text' name='title' id='title' value={useState.title} hendalInput={hendalInput} placeholder='title' />
                    <Input htmlFor='teg' textName='teg' type='text' name='teg' id='teg' value={useState.teg} hendalInput={hendalInput} placeholder='teg' />
                    <Input htmlFor='dis' textName='dis' type='text' name='dis' id='dis' value={useState.dis} hendalInput={hendalInput} placeholder='dis' />
                    <button className='btn btn-primary'>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default NoteAdd
