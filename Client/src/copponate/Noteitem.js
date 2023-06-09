import React, { useContext } from 'react'
import UserContext from '../ContextApi/ContextApi';

function Noteitem(props) {
    const { _id, title, teg, dis } = props.note

    const context = useContext(UserContext);
    const { deleteNote } = context;



    const clickDelete = () => {
        deleteNote(_id)
    }
    return (
        <div className="col-md-4 col-10 mx-auto mt-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title my-4">{title}</h3>
                    <h5 className="card-title my-4">{teg}</h5>
                    <p className="card-text my-4">{dis}</p>
                    <i onClick={clickDelete} className="fa-solid fa-trash mx-5  fa-xl pointer "></i>
                    <i className="fa-sharp fa-solid fa-book-open-reader mx-5 fa-xl pointer"></i>
                </div>
            </div>
        </div >

    )
}

export default Noteitem
