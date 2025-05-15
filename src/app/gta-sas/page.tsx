"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ThemeSong from '../theme-song/page';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

export default function GtaSasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const openDownloadModal = (link: string) => {
    setDownloadLink(link);
    setIsModalOpen(true);
  };

  const closeDownloadModal = () => {
    setIsModalOpen(false);
    setDownloadLink("");
  };

  const continueDownload = () => {
    window.location.href = downloadLink;
    closeDownloadModal();
  };

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
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="page-gta-sas">
      {/* Parallax Effect */}
      <div className="parallaxS">
        <div className="parallaxS-content">
          <a href="./gta-sas" className="logoS-container">
            <img src="https://sasquad-team.com/images/SAS.jpg" alt="SAS Logo" className="logoS" />
          </a>
          <div className="synopsisS">
            <h2>Grand Theft Auto San Andreas Stories</h2>
            <p>In 1989, The Vagos and The Ballas enter the crack business, igniting a fierce rivalry...</p>
          </div>
          <div className="downloadS-button-container">
            <button className="downloadS-button" onClick={() => openDownloadModal("https://drive.google.com/file/d/16srJj6hd3xJHuCVMidIDBLvIgOtMH9xo/view?usp=sharing")}>
              <img src="https://img.icons8.com/ios/50/000000/google-drive.png" alt="Google Drive" className="icon" /> Download Setup from Google Drive
            </button>
            <button className="downloadS-button" onClick={() => openDownloadModal("https://sasquad-team.com/server/mods/gta-sas/GTA_SA_Stories_Setup.exe")}>
              <img src="https://img.icons8.com/ios-filled/50/server.png" alt="Server" className="icon" /> Download Setup from Our Servers
            </button>
            <button className="downloadS-button" onClick={() => openDownloadModal(" https://drive.google.com/file/d/1f6ltHop0Oq31B7Aa_xRaznuK-zshHmBT/view?usp=sharing")}>
              <img src="https://img.icons8.com/ios/50/000000/google-drive.png" alt="Download" className="icon" /> Download Files (Non-Setup) from  Google Drive
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Descarga */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You for Downloading!</h2>
            <p>Would you like to continue with the download?</p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={continueDownload}>Continue Download</button>
              <button className="modal-button cancel" onClick={closeDownloadModal}>Cancel</button>
            </div>
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
            <div><img src="https://sasquad-team.com/images/Anuncio2.png" alt="Image 1" className="carousel-image" /></div>
            <div><img src="https://sasquad-team.com/images/Anuncio3.png" alt="Image 2" className="carousel-image" /></div>
            <div><img src="https://sasquad-team.com/images/Anuncio4.png" alt="Image 3" className="carousel-image" /></div>
          </SlickSlider>
        </div>
      </section>

      {/* Video de YouTube */}
      <section className="parallax">
        <div className="parallax-content">
          <h2>Listen now GTA SAS theme song!</h2>
          <p>We are very pleased to present you our original production, GTA SAS theme song. LISTEN TO IT ON YOUTUBE!</p>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/1RooDjIfVjg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
