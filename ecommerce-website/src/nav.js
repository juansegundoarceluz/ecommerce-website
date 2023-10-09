import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import logo from '../src/img/imagen.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css';








const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className='Free'>

                <div className='icon'>
                    <FaTruck />
                </div>
                <p> FREE shiping when shpping upto $1000</p>

            </div>
            <div className='main-header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo'></img>

                    </div>

                    <div className='search-box'>
                        <input type='text' value='' placeholder='Enter the product Name' autoComplete='off'></input>
                        <button>Search</button>
                    </div>
                    <div className='icon-input'>
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                <div className='user_icon'>
                                    <AiOutlineUserAdd />
                                </div>
                                <p>Hello, {user.name}</p>
    
                            </div>
                            )

                        }
                        <div className='second_icon'>
                            <Link to="/" className='link'><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut /> </button>
                            :
                            <button onClick={() => loginWithRedirect()}><BiLogIn /></button>
                        }

                       


                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;