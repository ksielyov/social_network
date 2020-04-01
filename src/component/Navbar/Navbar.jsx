import React from 'react';
import Class from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={Class.nav}>
            <ul>
                <li><a href='/profile'><i class="fa fa fa-user" aria-hidden="true"></i> Profile</a></li>
                <li><a href='/news'><i class="fa fa-newspaper-o" aria-hidden="true"></i> News</a></li>
                <li><a href='/messages'><i class="fa fa-commenting-o" aria-hidden="true"></i> Messages</a></li>
                <li><a href='/music'><i class="fa fa-music" aria-hidden="true"></i> Music</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;