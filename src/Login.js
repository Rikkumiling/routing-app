import './Login.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';

const accounts = [
    {username: "Rikku",password: "Test"},
    {username: "Miling", password: "Test2"}
];

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState('Content');
    const [loggedIn, setLogIn] = useState(false);
    const Validate = (e) =>{ e.preventDefault();
        const verify = accounts.find((cred) => cred.username === username && cred.password === password)
        if (verify){
            setPage("Content")
            setLogIn(true)
        }else{
        alert("Invalid Account")
        }
    }   
    //HTML
    return (
    <div>
        {!loggedIn? (
        <div class = "Login-box">
            <h1>Login</h1>
            <form>
                <div>
                    <label>Username: </label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button onClick={Validate}>Login</button>
            </form>
        </div>
        ) : (
        <div className='Navbar'> 
            <BrowserRouter>
                <nav>
                    <h1>Routing Webapp</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact Us</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element = {<About />}/>
                    <Route path="/Contact" element = {<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
        )       
        }
    </div>
    );
}
export default Login;