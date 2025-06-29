import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => (
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/" >
                <i className="fa fa-home"></i> Início
                {/* coloquei inicio */}
            </Link>
            <Link to="/contato">
                <i className="fa fa-user"></i> Contato
                {/* coloquei usuarios */}
            </Link>
        </nav>
    </aside>
)
export default Nav;