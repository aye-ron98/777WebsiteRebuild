import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as Facebook } from './assets/facebook.svg'; // import svg as react component
import { ReactComponent as Instagram } from './assets/instagram.svg'; //import svg as react component
import { ReactComponent as Carrot } from './assets/dropdowncarrot.svg'; //import svg as react component
import { Navbar, Collapse, Dropdown, Nav } from 'bootstrap-4-react';
import { addEmail } from './utils/firebaseLogic';

import './CSS/components.css';



/**
 * Dropdown component 
 * @param {String} title title of the dropdown component
 * @param {String[]} openText array of strings to be displayed when dropdown is open
 * @precondition openText must be array of strings
 * @postcondition dynamically generates dropdown component for each array of string dropdown component
 * @returns a dropdown component
 */
export const DropdownComponent = ({ title, openText }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750);
        };

        handleResize(); // Initial check on component mount

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const carrotStyle = {
        transform: isDropdownOpen ? 'rotate(0deg)' : 'rotate(270deg)',
    }

    return (
        <div className={`drop-down ${isMobile ? 'mobile' : ''}`}>
            <div className="dropdown-title" onClick={toggleDropdown}>
                {isMobile ? (
                    <div className='carrot'>
                        <Carrot style={carrotStyle} />
                    </div>
                ) : null}
                <h4>{title}</h4>
            </div>
            {isDropdownOpen || !isMobile ? (
                <div className="dropdown-content">
                    {openText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};


/**
 * Hero component
 * @param {String} title Main title of the page
 * @param {String} subtitle optional param of type string
 * @param {String} image optional param of type string
 * @precondition image must be a valid image name in images folder with extension
 * @returns A page Hero component
 */
export const Hero = ({ title, subtitle = undefined, image = undefined }) => {

    const style = {
        backgroundImage: (image !== undefined) ? `url(${require('./images/' + image)})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: (image !== undefined) ? '50vh' : '20vh',
    }

    return (
        <div className="hero" style={style}>
            <h3>{title}</h3>
            {subtitle !== undefined ? <h4>{subtitle}</h4> : <></>}
        </div>
    )

}

/**
 * Render a notice card component
 * @param {Object} props 
 * @precondition props must be an object
 * @returns a square card with an image, title, date, and text
 */
export const NoticeCard = (props) => {

    const data = props.data;

    return (
        <div className="notice-card-container">
            {data.map((data, index) => (
                <NavLink to={data.link}>
                    <div className="notice-card" key={index}>

                        <div className="notice-card-image">
                            <img src={require('./images/' + data.img)} alt={data.img} />
                        </div>
                        <div className="notice-card-content">
                            <h4>{data.title}</h4>
                            <small>{data.date}</small>
                            <p>{data.text}</p>
                        </div>

                    </div>
                </NavLink>
            ))}
        </div>

    );
}


/**
 * Render a jumbotron component
 * @param {String} image path of the image in images folder
 * @param {String} message main message to display in jumbotron
 * @param {String} subtitle optional param of type string
 * @param {String} button optional param of type string
 * @precondition image name of image in images folder with extension
 * @returns A Jumbotron component
 */

export const Jumbotron = ({ image, message, subtitle, button }) => {

    const style = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${require('./images/' + image)})`,
    }


    const navigate = useNavigate();  // hook - cannot be used directly in function

    return (
        <div style={style} className="jumbotron">
            <div className="jumbotron-content">
                <h1>{message}</h1>
                <p>{subtitle}</p>
            </div>
            <div className="jumbotron-button">
                <button type='button' className="jumbo-button" onClick={() => { navigate('/join') }} >{button}</button>
            </div>

        </div >

    )
}

/**
 * Footer class
 */
export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidEmail: null,
            userSuccessfullySubscribed: false,
        }
        this.subscribe = this.subscribe.bind(this);
    }

    /**
     * @param {null}
     * @returns a useful links component
     */
    renderLinks() {
        return (
            <div className='footer-container'>
                <h4> Useful Links </h4>
                <br />
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact </Link>
                <Link to='/faq'> FAQ </Link>
            </div>
        )
    }

    /**
     * notify user of successful subscription or error if an email is not entered
     * @param {null}
     * @returns none
     */
    subscribe() {
        const email = document.getElementById('email').value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email !== '' && emailRegex.test(email)) {
            this.setState({ isValidEmail: true, userSuccessfullySubscribed: true });
            addEmail(email);
        } else {
            this.setState({ isValidEmail: false, userSuccessfullySubscribed: false });
        }
    }

    /**
     * @param {null}
     * @returns a subscription form with submit button
     */
    renderNewsletter() {
        const { isValidEmail, userSuccessfullySubscribed } = this.state;
        console.log(userSuccessfullySubscribed)
        return (
            <div className='footer-container'>
                <h4> Newsletter </h4>
                <br />
                <p> Subscribe to our newsletter to get the latest updates </p>

                {userSuccessfullySubscribed ? <p id='user-subscribe'> Thank you for subscribing! </p> : <>
                    <input type='text' placeholder='Email Address' id='email' />
                    <input type='submit' value='Subscribe' onClick={this.subscribe} />

                    {isValidEmail === false ? <p id='valid-email'> Please enter a valid email address. </p> : <></>}
                </>}

            </div>
        )
    }

    /**
     * @param {null}
     * @returns a social media component with links to social media
     */
    renderSocialMedia() {
        return (
            <div className='footer-container'>
                <h4> Social Media </h4>
                <br />
                <p>1618 Patricia Ave Port Coquitlam, BC</p>
                <a href='mailto:info@777Neptune.ca'>info@777Neptune.ca</a>
                <br />
                <p>Follow us on social media</p>
                <div className='social-media-icons'>
                    {/* add div to fix size */}
                    <div className='media-icon'>
                        <Link to='https://www.facebook.com/777Neptune/'>
                            <Facebook />
                        </Link>
                    </div>
                    <div className='media-icon'>
                        <Link to='https://www.instagram.com/777rcacs/?hl=en'>
                            <Instagram />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <>
                <div className='footer-main-container'>
                    {this.renderLinks()}
                    {this.renderNewsletter()}
                    {this.renderSocialMedia()}
                </div>
            </>
        )
    }

}

/**
 * Bootstrap React NavBar class
 */
export const NavBar = () => {

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? 'black' : 'grey',
        fontWeight: isActive ? 'bold' : 'normal',
        backgroundColor: "#f5f5f5",
    })

    return (


        <Navbar expand="lg" light bg="light">
            <Navbar.Brand href="/">777 Neptune</Navbar.Brand>
            <Navbar.Toggler target="#navbarText" />
            <Collapse navbar id="navbarText">
                <Navbar.Nav mr="auto">
                    <NavLink style={navLinkStyle} to="/">Home</NavLink>

                    <Nav.Item dropdown>
                        <Nav.Link dropdownToggle>Our Squadron</Nav.Link>
                        <Dropdown.Menu>
                            <NavLink className="dropdown-item" style={navLinkStyle} to="/about">About</NavLink>
                            <NavLink className="dropdown-item" style={navLinkStyle} to="/announcements">Announcements</NavLink>
                            <NavLink className="dropdown-item" style={navLinkStyle} to="/staff">Staff</NavLink>
                            <NavLink className="dropdown-item" style={navLinkStyle} to="/sponsoringcomittee">Sponsoring Comittee</NavLink>
                            <NavLink className="dropdown-item" style={navLinkStyle} to="/faq">FAQ</NavLink>
                        </Dropdown.Menu>
                    </Nav.Item>

                    <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
                    <NavLink style={navLinkStyle} to="/calendar">Calendar</NavLink>
                </Navbar.Nav>
                <Navbar.Text>
                    <NavLink style={navLinkStyle} to="/join">Join</NavLink>
                </Navbar.Text>
            </Collapse>
        </Navbar>
    )

}
