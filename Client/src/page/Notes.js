import React, { useContext, useEffect } from 'react'
import Noteitem from '../copponate/Noteitem'
import { Link } from 'react-router-dom'
// import NoteAdd from '../copponate/NoteAdd'
import UserContext from '../ContextApi/ContextApi'
import { useNavigate } from 'react-router-dom';

function Notes() {
  const navigate = useNavigate();
  const { getNotes, notes } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      alert("please login")
      navigate('/login')
    }
    getNotes();
  }, [0])


  return (
    <>

      {notes.length === 0 ? <h3 className='mt-5' >No Notes, Add Notes </h3> : <>
        <div className='row'>
          <div className="col-md-10 clo-11 mx-auto">
            <div className="row">
              <h2 className='mt-3'>Your Notes</h2>
              {notes.map((e, i) => {
                return <Noteitem key={i} note={e} />
              })}
            </div>
          </div>
        </div>
      </>}

      <Link to='/note/NodeAdd' className='p-2 border border-3 border-primary rounded position-fixed positionFixed'>
        <i className="fa-solid fa-plus  fa-2xl"></i>
      </Link>



    </>
  )
}

export default Notes
