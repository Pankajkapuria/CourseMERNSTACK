import { useState } from "react"
import UserContext from "./ContextApi"

const UserState = (props) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    const setUser = (user, token) => {
        setAuth({
            ...auth,
            user: user,
            token: token
        })
    }





    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // GET ALL Notes;
    const getNotes = async () => {
        try {
            const auth = localStorage.getItem('token');
            const note = await fetch(`notes/fatch`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            })
            const jsondata = await note.json();
            setNotes(jsondata);
        } catch (error) {
            setNotes(notesInitial);
        }
    }


    // add Notes
    const addNote = async (title, teg, dis) => {
        const auth = localStorage.getItem('token');
        const response = await fetch(`notes/addNotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth}`,
            },
            body: JSON.stringify({ title, teg, dis })
        })
        const json = await response.json();
        setNotes(notes.concat(json));
    }

    const deleteNote = async (_id) => {
        const auth = localStorage.getItem('token');
        const response = await fetch(`notes/deleteNotes/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth}`,
            },
        })

        const data = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== _id })
        setNotes(newNotes);
        console.log(data);
    }


    return (
        <UserContext.Provider value={{ auth, setAuth, setUser, getNotes, notes, addNote, deleteNote }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;