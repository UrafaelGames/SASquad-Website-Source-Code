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
'use client';

import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';
import AnnouncemetsHome from "./home-announcements/page";
import AnnouncementsLayer from './announcementsLayer/page';
import dynamic from 'next/dynamic';
import ThemeSong from "./theme-song/page";

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

export default function Page() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="page-container">

<AnnouncementsLayer />
      
      {/* Sección Intro */}
      <section className="intro">
        <h2>Welcome to SASquad Team</h2>
        <p>
          We are a passionate group of GTA modders, our great motivation is to create new stories and great gameplays for these games so remembered, we are a group that was born in 2022. And we welcome you to our website, where you will find our mods, updates, news, etc., ALL IN ONE PLACE!
        </p>

        <Link href="./gta-sas" className="cta-button">
          Discover our mods
        </Link>
      </section>

      {/* Sección Parallax con Video de YouTube */}
      <section className="parallax">
  <div className="parallax-content">
    <h2>Listen now GTA SAS theme song!</h2>
    <p>We are very pleased to present you our original production, GTA SAS theme song. LISTEN TO IT ON YOUTUBE!</p>
    
    {/* Video de YouTube */}
    <section className="parallax-video">
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/1RooDjIfVjg" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  </div>
</section>

      {/* Carrusel de Imágenes */}
      <section className="carousel-section">
        <h1 className="carousel-title">A Glimpse of GTA San Andreas Stories</h1>
        <div className="carousel-container">
          <SlickSlider {...settings}>
            <div>
              <img src="https://sasquad-team.com/images/Anuncio2.png" alt="Image 1" className="carousel-image" width={500} height={500} />
            </div>
            <div>
              <img src="https://sasquad-team.com/images/Anuncio3.png" alt="Image 2" className="carousel-image" width={500} height={500} />
            </div>
            <div>
              <img src="https://sasquad-team.com/images/Anuncio4.png" alt="Image 3" className="carousel-image" width={500} height={500} />
            </div>
          </SlickSlider>
        </div>
      </section>

      <AnnouncemetsHome />

      {/* Sección Parallax - Ejecutivos del Team */}
      <section className="parallax-executives">
        <div className="executives-content">
          <h2>Meet Our Executives</h2>
          <p>Meet SASquad Team&apos;s top executives</p>
          
          <div className="executives-container">
            <div className="executive-card">
              <img src="https://sasquad-team.com/images/Sharky.png" alt="CEO" className="executive-image" width={150} height={150} />
              <h3>Sharky</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="executive-card">
              <img src="https://sasquad-team.com/images/Urafael.png" alt="CTO" className="executive-image" width={150} height={150} />
              <h3>Urafael</h3>
              <p>CTO / CM / Website Dev</p>
            </div>
            <div className="executive-card">
              <img src="https://sasquad-team.com/images/Michi.png" alt="Lead Developer" className="executive-image" width={150} height={150} />
              <h3>MichixG</h3>
              <p>Lead Developer</p>
            </div>
            <div className="executive-card">
              <img src="https://sasquad-team.com/images/Pepis.png" alt="Innovation Lead" className="executive-image" width={150} height={150} />
              <h3>Belvann</h3>
              <p>Innovation lead / Mission Writter</p>
            </div>
            <div className="executive-card">
              <img src="https://sasquad-team.com/images/Artur.png" alt="Lead Developer" className="executive-image" width={150} height={150} />
              <h3>ArturSkuller</h3>
              <p>Mission Writter</p>
            </div>
          </div>

          {/* Enlace a la página del equipo */}
          <div className="meet-team">
            <a href="./about-us" className="meet-team-button">
              Meet the rest of the SASquad Team here
            </a>
          </div>

        </div>
      </section>

      <section className="patreon-promotion">
        <div className="content">
          <img src="https://sasquad-team.com/images/Patreon.jpg" alt="Patreon Logo" className="patreon-logo" width={150} height={100} />
          <h2>Support us in our Patreon!</h2>
          <p>With your support, we will be able to bring out more and better content for everyone. Join our community now and receive exclusive content!</p>
          <a href="https://www.patreon.com/c/SASquadTeam" target="_blank" className="patreon-button">
  Visit us on Patreon →
</a>

        </div>
      </section>

      {/* Sección Parallax de Contacto */}
      <section className="parallax-contact">
  <div className="contact-content">
    <h2>Contact</h2>
    <p>We would love to hear from you! If you have any questions, comments, or suggestions, feel free to contact us.</p>

    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <p>Email: <a href="mailto:mail@sasquad-team.com">mail@sasquad-team.com</a></p>
      </div>
      <div className="contact-item">
        <i className="fab fa-discord"></i>
        <p>Discord server: <a href="https://discord.gg/3KnDrXpj" target="_blank" rel="noopener noreferrer">Join our server</a></p>
      </div>
      <div className="contact-item">
        <i className="fas fa-life-ring"></i>
        <p>Need help or have a complaint? <a href="https://support.sasquad-team.com" target="_blank" rel="noopener noreferrer">Create a Ticket</a></p>
      </div>
    </div>
  </div>
</section>


      <ThemeSong />

      <section className="thank-you">
        <div className="thank-you-content">
          <h2>Thank you for your support!</h2>
          <p>We want to thank you for being part of our community. Your support motivates us to continue creating quality content and we&apos;ll see you in our future updates!</p>
          <p>If you liked our work, share it and help more people to get to know our project.</p>
          <a href="https://discord.gg/3KnDrXpj" className="thank-you-button">Join our community</a>
        </div>
      </section>

    </div>
  );
}
