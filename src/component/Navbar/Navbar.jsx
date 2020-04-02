import React from 'react';
import Class from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={Class.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={Class.active}><i class="fa fa fa-user" aria-hidden="true"></i> Profile</NavLink></li>
                <li><NavLink to='/news' activeClassName={Class.active}><i class="fa fa-newspaper-o" aria-hidden="true"></i> News</NavLink></li>
                <li><NavLink to='/messages' activeClassName={Class.active}><i class="fa fa-commenting-o" aria-hidden="true"></i> Messages</NavLink></li>
                <li><NavLink to='/music' activeClassName={Class.active}><i class="fa fa-music" aria-hidden="true"></i> Music</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;