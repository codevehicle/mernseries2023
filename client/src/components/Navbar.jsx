import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { LuBus } from "react-icons/lu";


export const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return (
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/"><LuBus />  CodesVehicle</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        { isLoggedIn ? ( <li><NavLink to="/logout">Logout</NavLink></li> 
                        ) : (
                        <>
                        <li><NavLink to="/register">Sign up</NavLink></li>
                        <li><NavLink to="/login">Log in</NavLink></li>
                        </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}