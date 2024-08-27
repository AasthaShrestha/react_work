import"../styles/navbar.css";
import logo from "../logo.svg"
import {Link} from "react-rout er-dom"
export default function Navbar({title}){
    return(
        <>
        <div id='nav'>
        <div id='logo'>
        <img src={logo} height={100} width={100}></img>
        <h1>{title}</h1>
        </div>
        <div id='menus'>
          <Link to='/'><p>Home</p></Link>
          <Link to='/documents'><p>Documents</p></Link>
          <Link to='/downloads'><p>Settings</p></Link>
          <Link to='/profile'><p>Profile</p></Link>
          <Link to='/settings'><p>Downloads</p></Link>
        </div>
      </div>
        </>
    );
}