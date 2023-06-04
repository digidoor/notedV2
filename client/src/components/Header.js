import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import stylesheet from "../pages/Stylesheets/header";

const styles = {
    //HEADER STYLING
    header: {
        backgroundColor: '#bbe8d9',
        height: '90px',
    },
    // MAIN TITLE STYLING
    main: {
        color: 'black',
        fontSize: '123px',
        textShadow: '3px 2px 2px #ef7c8e',
        fontWeight: '500',
        lineHeight: '140px',
    },
    // NAVBAR
    nav: {
        backgroundColor: '#feedaa',
        color: 'black',
        height: '40px',
        lineHeight: '2',
        fontSize: '20px',
        boxShadow: '0px 2px 4px 0 grey'
    },

    navItem: {
        color: 'black',
        textShadow: '3px 2px 2px #ef7c8e',
    }
}

function showNavigation() {
    if (Auth.loggedIn()) {
        return (
            <ul className="nav nav-pills d-flex justify-content-end" style={styles.nav}>
                <li className="mx-1 nav-item">
                    <Link to="/home" style={styles.navItem}>
                    <i className="large material-icons">home</i>
                    </Link>
                </li>
                <li className="mx-1 nav-item">
                    <Link to="/calendar" style={styles.navItem}>
                    <i className="large material-icons">date_range</i>
                    </Link>
                </li>
                {/* still needs to be set up to navigate to the weather section on the calendar page */}
                <li className="mx-1 nav-item">
                    <Link to="/calendar" style={styles.navItem}>
                    <i className="large material-icons">cloud</i>
                    </Link>
                </li>
                <li className="mx-1 nav-item">
                    <Link to="/nutrition" style={styles.navItem}>
                    <i className="large material-icons">restaurant_menu</i>
                    </Link>
                </li>
                <li className="mx-1 nav-item">
                    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                    <a href="/" onClick={() => Auth.logout()} style={styles.navItem}>
                    <i className="large material-icons">exit_to_app</i>
                    </a>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="nav nav-pills d-flex justify-content-end" style={styles.nav}>
                <li className="mx-1 nav-item">
                    <Link to="/login">
                    </Link>
                </li>
            </ul>
        );
    }
}

function Header() {
    return (
        <>
            <header className ='header' style={styles.header}>
                <h1 style={styles.main}>Noted</h1>
            </header>
            <nav>
                {/* <ul className="nav nav-pills d-flex justify-content-end" style={styles.nav}>
                    <li className="nav-item">
                        <a
                            href="#Home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            style={currentPage === 'Home' ? styles.navPillActive : styles.navPillInactive}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Calendar"
                            onClick={() => handlePageChange('Calendar')}
                            className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}
                            style={currentPage === 'Calendar' ? styles.navPillActive : styles.navPillInactive}>
                            Calendar
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Nutrition"
                            onClick={() => handlePageChange('Nutrition')}
                            className={currentPage === 'Nutrition' ? 'nav-link active' : 'nav-link'}
                            style={currentPage === 'Nutrition' ? styles.navPillActive : styles.navPillInactive}>
                            Nutrition
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Login"
                            onClick={() => handlePageChange('Login')}
                            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                            style={currentPage === 'Login' ? styles.navPillActive : styles.navPillInactive}>
                            Login
                        </a>
                    </li>
                </ul> */}
                {showNavigation()}
            </nav>
        </>
    )
}

export default Header;