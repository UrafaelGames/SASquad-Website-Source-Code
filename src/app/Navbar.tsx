/**  
 * © 2022-2025 SASquad Team  
 *  
 * This code is the property of SASquad Team and the developer Urafael Games.  
 * All rights reserved.  
 *  
 * It is published solely for reading, analysis,  
 * and to demonstrate the transparency of SASquad Team across its platforms.  
 *  
 * It is strictly forbidden to use it for personal gain  
 * or to publish it on a website as your own.  
 */  
"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  // Cierra el menú cada vez que la ruta cambia
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]); 

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">
        <img 
          src="https://sasquad-team.com/images/SASquad_Logo.png" 
          alt="SASquad Team Logo" 
          width="80"
          height="80"
        />
        <div className="logo-text">
          <span>SASQUAD</span>
          <span>TEAM</span>
        </div>
      </div>

      <div 
        className="hamburger-menu cursor-pointer flex flex-col justify-center items-center space-y-1 w-8 h-8"
        onClick={toggleMenu} 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div
          className={`h-1 w-full bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <ul className={`nav-links transition-transform duration-300 ease-in-out ${isMenuOpen ? "open" : ""}`}>
        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link href="/download" onClick={() => setIsMenuOpen(false)}>Downloads</Link></li>
        <li><Link href="/newswire" onClick={() => setIsMenuOpen(false)}>Newswire</Link></li>
        <li><Link href="/gta-sas" onClick={() => setIsMenuOpen(false)}>GTA SAS</Link></li>
        <li><Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link href="/t-c" onClick={() => setIsMenuOpen(false)}>Terms & Conditions</Link></li>
        <li><Link href="/credits" onClick={() => setIsMenuOpen(false)}>Credits</Link></li>
      </ul>
    </nav>
  );
}
