/**  
 * © 2022-2025 SASquad Team  
 *  
 * This code is the property of SASquad Team and the developer Urafael Games.  
 * All rights reserved.  
 *  
 * This code is published solely for reading, analysis,  
 * and to demonstrate the transparency of SASquad Team across its platforms.  
 *  
 * It is strictly forbidden to use it for personal gain  
 * or to publish it on a website as your own.  
 */  
"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">
        <img 
          src="https://sasquad-team.com/images/SASquad_Logo.png" 
          alt="SASquad Team Logo" 
          width="80" // Tamaño ancho de la imagen
          height="80" // Tamaño alto de la imagen
        />
        <h1>SASquad Team</h1>
      </div>
      
      <div 
        className="hamburger-menu" 
        onClick={toggleMenu} 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/download">Downloads</Link></li>
        <li><Link href="/announcements">Ads</Link></li>
        <li><Link href="/gta-sas">GTA SAS</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/t-c">Terms & Conditions</Link></li>
        <li><Link href="/credits">Credits</Link></li>
      </ul>
    </nav>
  );
}
