import './Navbar.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
// import logo from '../logo.png';

// const pages = ["/", "/about", "/resources", "/forums", "/contact"];
const pages = ['/', '/about']

// const pageNames = ["home", "about", "resources", "forums", "contact"];
const pageNames = ['home', 'about']

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()
    // const location = useLocation();
    // const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNav = page => () => {
        handleClose();
        navigate(page);
    };

    // const handleLogout = () => {
    //     setLogin({ first: "", last: "", username: "", token: "" });
    //     handleNav('/login')()
    // };

    // const handleTabStyle = (page) => {
    //     return page === location.pathname ? "active tab" : "unactive tab";
    // }

    return (
        <>
            <div className='navBar container'>
                <div className='home' onClick={handleNav('/')}>
                    <Link to="/">Home</Link>
                </div>
                <div className='about' onClick={handleNav('/about')}>
                    <Link to="/about">About</Link>
                </div>
                <div className='weather' onClick={handleNav('/weather')}>
                    <Link to="/weather">Weather</Link>
                </div>
                <button>
                    Dark mode
                </button>
            </div>
        </>
    );
};

export default Navbar;
