import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const styles = {
    //HEADER STYLING
    header: {
        backgroundColor: '#bbe8d9',
        height: '90px',
    },
    // MAIN TITLE STYLING
    main: {
        fontSize: '123px',
        textShadow: '3px 2px 2px #ef7c8e',
    },
    // NAVBAR
    nav: {
        backgroundColor: '#feedaa',
        color: 'black',
    }
}

function showNavigation() {
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
                <li className="mx-1">
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li className="mx-1">
                    <Link to="/calendar">
                        Calendar
                    </Link>
                </li>
                <li className="mx-1">
                    <Link to="/nutrition">
                        Nutrition
                    </Link>
                </li>
                <li className="mx-1">
                    {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                    <a href="/" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="nav nav-pills d-flex justify-content-end">
                <li className="mx-1">
                    <Link to="/signup">
                        Signup
                    </Link>
                </li>
                <li className="mx-1">
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );
    }
}

function Header() {
    return (
        <>
            <header style={styles.header}>
                <h1 style={styles.main}>Noted</h1>
            </header>
            <nav>
                <ul className="nav nav-pills d-flex justify-content-end" style={styles.nav}>
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
                </ul>
                {showNavigation()}
            </nav>
        </>
    )
}

export default Header;