import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='logo'>
                <h4>Lyrics App</h4>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='https://github.com/neilkapadia7' target='_blank'>GitHub Profile</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
