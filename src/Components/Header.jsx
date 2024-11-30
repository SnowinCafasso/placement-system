import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>St. Joseph's College of Engineering</h1>
            <nav style={styles.nav}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#events" style={styles.link}>Events</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#003366',
        color: '#fff',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
    },
    nav: {
        display: 'flex',
        gap: '0.8rem',
        margin: '5px'
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
    },
};

export default Header;
