import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='Amazon_Image' className='header__logo'></img>
            <div className='header__search'>
                <input className='header__searchInput' type="text"/> 
                <div className='header__nav'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div> 
                    <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Order</span>
                    </div> 
                    <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div> 

                </div>
            </div>

        </div>
    );
}

export default Header
