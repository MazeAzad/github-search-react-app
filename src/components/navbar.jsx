import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
    const { logout, user } = useAuth0()
    const { picture } = user;
    return (
        <nav className="navbar">
            <div className="userImageContainer">
                <img src={picture} alt="picture" />
            </div>
            <button className='logoutBtn' onClick={() => { logout({ returnTo: "http://127.0.0.1:5173/login" }) }}>logout</button>
        </nav>

    )
}



export default Navbar;