import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"; //import librairie Pour mettre des liens à nos routes

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
            <Link to="/">
            <li className="items">ACCUEIL</li>
            </Link>
            <Link to="/ecrire">
            <li  className="items">ECRIRE</li>
            </Link>
            <Link to="/contact">
            <li className="items">CONTACT</li>
            </Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  );
}
