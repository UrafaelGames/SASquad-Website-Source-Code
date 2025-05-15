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

//Algoritmo por Javier Barros
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaYoutube, FaDiscord, FaHeart } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        {/* Main Content */}
        <div className="footer-main">
          {/* Copyright */}
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            © {startYear}-{currentYear} SASquad Team. All Rights Reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://www.youtube.com/@SASquadStories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube className="icon" />
            </motion.a>
            <motion.a
              href="https://discord.gg/3KnDrXpj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDiscord className="icon" />
            </motion.a>
          </motion.div>

          {/* Credits */}
          <motion.p 
            className="creator"
            whileHover={{ scale: 1.02 }}
          >
            Website created with{' '}
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{ display: 'inline-block', color: 'red' }}
            >
              <FaHeart className="heart-icon" />
            </motion.span>{' '}
            by{' '}
            <Link href="https://urafaelgames.com" target="_blank" className="creator-link">
              Urafael Games
            </Link>
          </motion.p>

          {/* Designer */}
          <motion.p 
            className="designer"
            whileHover={{ scale: 1.02 }}
          >
            Design by{' '}
            <Link href="https://nahalanjum.vercel.app/" target="_blank" className="designer-link">
              Nahan Anjum
            </Link>
          </motion.p>

          {/* Powered By */}
          <motion.p 
            className="powered-by"
            whileHover={{ scale: 1.02 }}
          >
            Powered by{' '}
            <Link href="https://nextjs.org" target="_blank" className="powered-link">
              <SiNextdotjs className="inline-icon" /> Next.js
            </Link>
          </motion.p>
        </div>

        {/* Legal Disclaimer */}
        <motion.div
          className="legal-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="disclaimer-text">
            Disclaimer: SASquad Team does not belong to any subsidiary of Rockstar Games, nor do we have anything to do with Rockstar Leeds. Rockstar and GTA are registered trademarks of Take-Two Interactive, all rights reserved to them.
          </p>
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          initial={{
            opacity: 0,
            y: 0,
            x: Math.random() * 100
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -Math.random() * 40 - 20,
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}
    </motion.footer>
  );
}
