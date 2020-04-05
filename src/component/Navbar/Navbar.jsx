import React from 'react';
import Class from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import FriendItem from '../FriendItem/FriendItem';

const Navbar = (props) => {

    let friends = props.friendsElements.map(
        data => <FriendItem
            src={data.src}
            name={data.name}
        />
    );

    return (
        <div>
            <nav className={Class.nav}>
                <ul>
                    <li><NavLink to='/profile' activeClassName={Class.active}><i className="fa fa fa-user" aria-hidden="true"></i> Profile</NavLink></li>
                    <li><NavLink to='/news' activeClassName={Class.active}><i className="fa fa-newspaper-o" aria-hidden="true"></i> News</NavLink></li>
                    <li><NavLink to='/messages' activeClassName={Class.active}><i className="fa fa-commenting-o" aria-hidden="true"></i> Messages</NavLink></li>
                    <li><NavLink to='/music' activeClassName={Class.active}><i className="fa fa-music" aria-hidden="true"></i> Music</NavLink></li>
                </ul>
            </nav>

            <div className={Class.friendsList}>
                <div className={Class.friendsCountContainer}>
                    <h1>Friends</h1>
                    <p>{props.friendsCount}</p>
                </div>

                <div className={Class.friends}>{friends}</div>
            </div>
        </div>
    );
}

export default Navbar;