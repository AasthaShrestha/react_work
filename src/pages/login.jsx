import Navbar from "../components/navbar";
import "../styles/login.css"


const Login =()=>{
    return(
        <>
    <Navbar title={"Login Page"}/>
    <h1>Login Page</h1>
        <div id="container">
            <form>
            <div className="field">
            <label for='email'>Email</label><br></br>
            <input type="email" name="email" id="email" placeholder="youremail@gmail.com" required/><br></br>
            </div>
            <div className="field">
            <label for='password'>Password</label><br></br>
            <input type="password" name="password" id="password" placeholder="yourPassword" required/>
            </div> 
            </form>
            <br></br>

            <input id="login" type="submit" value="login"></input>
        </div>

    </>
    );
}
export default Login;