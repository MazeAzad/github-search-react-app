import { useAuth0 } from "@auth0/auth0-react"
const Login = () => {
    const {
        loginWithRedirect,
        user
    } = useAuth0()
    console.log(user);
    return (
        <section className="loginContainer">
            <p className="github">github search</p>
            <p className="loginTitle">Login/Sign up</p>
            <button className="loginButton" onClick={() => { loginWithRedirect() }}>
                login/signup
            </button>
        </section>

    )
}
export default Login;