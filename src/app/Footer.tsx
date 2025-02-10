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

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SASquad Team. All Rights Reserved.</p>
        <div className="social-links">
          <Link href="https://www.youtube.com/@SASquadStories" target="_blank" className="social-icon">
            <i className="fab fa-youtube"></i> {/* YouTube icon */}
          </Link>
          <Link href="https://discord.gg/3KnDrXpj" target="_blank" className="social-icon">
            <i className="fab fa-discord"></i> {/* Discord icon */}
          </Link>
        </div>
        <p className="creator">
          Website created by{' '}
          <Link href="https://urafaelgames.com" target="_blank" className="creator-link">
            Urafael Games
          </Link>
        </p>
        <p className="powered-by">
          Powered by{' '}
          <Link href="https://nextjs.org" target="_blank" className="powered-link">
            Next.js
          </Link>
        </p>
        <p className="disclaimer">
          Discriminator: SASquad Team does not belong to any subsidiary of Rockstar Games, nor do we have anything to do with Rockstar Leeds. Rockstar and GTA are registered trademarks of Take-Two Interactive, all rights reserved to them.
        </p>
      </div>
    </footer>
  );
}
