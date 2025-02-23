"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ThemeSong from '../theme-song/page';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

export default function GtaSasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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

  
    const handleDownload = async () => {
      if (!username || !email) return;

      try {
          await fetch("https://sasquad-team.com/server/database/sendMail.php", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`,
          });

          alert("Thank you! Your information has been saved. You will receive updates soon. An email was sent to your email with the thanks and also videos of how to install the mod.");
          setIsModalOpen(false);
          
          // Redirigir al usuario a la descarga
          window.location.href = "https://drive.google.com/file/d/1f6ltHop0Oq31B7Aa_xRaznuK-zshHmBT/view?usp=sharing";
      } catch (error) {
          console.error("Error saving user data:", error);
          alert("There was an issue saving your information. Please try again.");
      }
  };


    return (
        <div className="page-gta-sas">
          {/* Parallax Effect */}
          <div className="parallaxS">
            <div className="parallaxS-content">
              <a href="./gta-sas" className="logoS-container">
                <img 
                  src="https://sasquad-team.com/images/SAS.jpg" 
                  alt="SAS Logo" 
                  className="logoS" 
                />
              </a>
              <div className="synopsisS">
                <h2>Grand Theft Auto San Andreas Stories</h2>
                <p>In 1989, The Vagos and The Ballas enter the crack business, igniting a fierce rivalry...</p>
              </div>
              <div className="downloadS-button-container">
                <button className="downloadS-button" onClick={() => setIsModalOpen(true)}>
                  Download GTA SAS
                </button>
              </div>
            </div>
          </div>

  {/* Modal */}
  {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>Enter your details to download</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="legal-text">
  This information will only be used to send you a thank-you message and other emails with notifications.  
  You can read more about this in our Terms and Conditions, Article 12, at:  
  <a href="https://sasquad-team.com/t-c" target="_blank" rel="noopener noreferrer">
    https://sasquad-team.com/t-c
  </a>
</p>

                <button onClick={handleDownload}>Submit & Download</button>
                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </div>
          )}
          {/* Sección de Novedades */}
          <div className="newsS-section">
            <h2>What&apos;s New in Version 1.0?</h2> 
            <ul className="newsS-list">
              <li>13 new main missions!</li>
              <li>2 new circuits/sub-missions</li>
              <li>25 collectibles in LS.</li>
              <li>17 new rampages missions in LS.</li>
              <li>New changes in the LS map</li>
              <li>New radio stations (beta)</li>
              <li>José&apos;s voice and dialogues in free mode.</li> 
              <li>New easter eggs</li>
            </ul>
          </div>

          <ThemeSong />

          {/* Carousel Section */}
          <section className="carousel-section">
            <h1 className="carousel-title">GTA SAS Screenshots</h1>
            <div className="carousel-container">
              <SlickSlider {...settings}>
                <div>
                  <img 
                    src="https://sasquad-team.com/images/Anuncio2.png" 
                    alt="Image 1" 
                    className="carousel-image" 
                  />
                </div>
                <div>
                  <img 
                    src="https://sasquad-team.com/images/Anuncio3.png" 
                    alt="Image 2" 
                    className="carousel-image" 
                  />
                </div>
                <div>
                  <img 
                    src="https://sasquad-team.com/images/Anuncio4.png" 
                    alt="Image 3" 
                    className="carousel-image" 
                  />
                </div>
              </SlickSlider>
            </div>
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
        </div>
    );
}
