import React from 'react';

const styles = {
    navPillActive: {
      backgroundColor: "gray",
      color: "black"
  
    },
    navPillInactive: { 
      color: "gray"
    },
    navBar: {
      paddingBottom: '3px',
      borderBottom: '1px solid black',
    }
  }

function Header({ currentPage, handlePageChange}) {
    return (
        <>
        <header>
            <h1>Noted</h1>
        </header>
        <nav>
            <ul className="nav nav-pills d-flex justify-content-end">
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
        </nav>
    </>
    )
}

export default Header;