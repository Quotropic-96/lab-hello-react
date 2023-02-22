import ironHackLogo from '../images/ironhack-logo-xs.png';
import burgerIcon from '../images/menu-top-xs.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={ironHackLogo} alt="Iron Hack Logo" />
            <img id='menu-icon' src={burgerIcon} alt="Menu icon" />
        </nav>
    );
}

export default Navbar