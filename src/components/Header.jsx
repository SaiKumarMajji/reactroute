import React from "react"
import { Link, NavLink } from "react-router-dom"


export default function Header() {


    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src= "https://cdn.discordapp.com/attachments/843457560215289865/1123212354612637737/image.png"
                        className="login-icon"
                    />
                </Link>

               <button onClick={fakeLogOut}>Log Out</button>
                
                
            </nav>
        </header>
    )
}