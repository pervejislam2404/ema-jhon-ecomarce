import React from 'react';
import img from '../../images/logo.png';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="img-box">
                <img className="image" src={img} alt="" />
            </div>
           <Navbar></Navbar>
        </div>
    );
};

export default Header;