import React from 'react';
import Class from './Header.module.css';

const Header = () => {
    return(
        <header className={ Class.header }>
            {/* <img src='http://indirtik.com/wp-content/uploads/2019/07/logo-maker-transparent-background-4.png' /> */}
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </header>
    );
}

export default Header;