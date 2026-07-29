import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "../../ui/Button/Button";

import "../Navbar/Navbar.css";

import logo from "../../../assets/logos/logo5.png";


const navLinks = [
    {
        name: "Solutions",
        href: "#services"
    },
    {
        name: "Industries",
        href: "#industries"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];



const Navbar = () => {


    const [scrolled, setScrolled] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {


        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    }, []);




    // Close menu when clicking outside
    useEffect(() => {


        const closeMenu = (event) => {


            if (
                !event.target.closest(".navbar")
            ) {

                setMenuOpen(false);

            }

        };


        document.addEventListener(
            "click",
            closeMenu
        );


        return () => {

            document.removeEventListener(
                "click",
                closeMenu
            );

        };


    }, []);





    return (

        <header 
            className={`navbar ${scrolled ? "scrolled" : ""}`}
        >


            <div className="navbar-container">



                {/* LOGO */}

                <a 
                    href="/"
                    className="logo"
                    onClick={() => setMenuOpen(false)}
                >

                    <img
                        src={logo}
                        alt="FastDrop Worldwide Logistics"
                    />

                </a>







                {/* DESKTOP NAVIGATION */}

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navLinks.map((link)=>(
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>

                    ))}
                </nav>








                {/* DESKTOP CTA */}

                <div className="desktop-action">

                    <Button 
                        href="#contact"
                        size="sm"
                    >

                        Get Quote

                    </Button>

                </div>









                {/* MOBILE MENU BUTTON */}

                <button

                    type="button"

                    className={`mobile-orb ${
                        menuOpen ? "active" : ""
                    }`}

                    aria-label={
                        menuOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                    }

                    aria-expanded={menuOpen}

                    onClick={() => setMenuOpen(!menuOpen)}

                >


                    {

                        menuOpen

                        ?

                        <FaTimes />

                        :

                        <FaBars />

                    }


                </button>









                {/* MOBILE MENU */}

                <div

                    className={`mobile-menu ${
                        menuOpen ? "open" : ""
                    }`}

                >


                    {
                        navLinks.map((link)=>(

                            <a

                                key={link.name}

                                href={link.href}

                                className={
                                    activeLink === link.name
                                    ? "active-link"
                                    : ""
                                }

                                onClick={() => {
                                    setActiveLink(link.name);
                                    setTimeout(() => {
                                        setMenuOpen(false);
                                    }, 200);
                                    
                                }}

                            >

                                {link.name}

                            </a>

                        ))
                    }






                    <Button 

                        href="#contact"

                        onClick={() => setMenuOpen(false)}

                    >

                        Get Quote

                    </Button>





                    <a 

                        className="track-link"

                        href="#tracking"

                        onClick={() => setMenuOpen(false)}

                    >

                        Track Shipment

                    </a>



                </div>



            </div>


        </header>

    );

};


export default Navbar;