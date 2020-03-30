import React from 'react';

const Navbar = () => {
    return(
        <nav className='nav'>
            <ul>
                <li><a><i class="fa fa fa-user" aria-hidden="true"></i> Profile</a></li>
                <li><a><i class="fa fa-newspaper-o" aria-hidden="true"></i> News</a></li>
                <li><a><i class="fa fa-commenting-o" aria-hidden="true"></i> Messages</a></li>
                <li><a><i class="fa fa-music" aria-hidden="true"></i> Music</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;