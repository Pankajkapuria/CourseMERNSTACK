import './App.css';
// import NavBar1 from './copponate/NavBar1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './page/Home';
// import { BrowserRouter,Router } from 'react-router-dom'\
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './page/About';
import Notes from './page/Notes';
import Course from './page/Course';
import Contact from './page/contact';
import NavBar from './copponate/NavBar';
import Login from './copponate/Login';
import SignUp from './copponate/SignUp';
import UserState from './ContextApi/ContextState';
import NoteAdd from './page/NoteAdd';

function App() {
  return (
    <UserState>
      <div className='App' >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Notes' element={<Notes />} />
            <Route exact path='/Course' element={<Course />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/NodeAdd' element={<NoteAdd />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserState>
  );
}

export default App;
