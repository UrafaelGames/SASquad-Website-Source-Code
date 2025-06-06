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

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ThemeSong from '../theme-song/page';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

interface CarouselImage {
  url: string;
  alt: string;
}

interface VideoData {
  videoId: string;
  title: string;
  description: string;
  error?: string;
}

export default function GtaSasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState<VideoData>({
    videoId: '1RooDjIfVjg',
    title: 'Listen now GTA SAS theme song!',
    description: 'We are very pleased to present you our original production, GTA SAS theme song. LISTEN TO IT ON YOUTUBE!'
  });
  const [videoLoading, setVideoLoading] = useState(true);

  // Cargar imágenes del carrusel desde el servidor
  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await fetch('https://sasquad-team.com/database/adminstrator/security/website-controller/get-carousel-images.php');
        if (!response.ok) throw new Error('Error al cargar imágenes');
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setCarouselImages(data);
        } else if (data.images && Array.isArray(data.images)) {
          setCarouselImages(data.images);
          console.error('Error del servidor:', data.error);
        } else {
          throw new Error('Formato de respuesta inválido');
        }
      } catch (error) {
        console.error('Error:', error);
        setCarouselImages([
          { url: 'https://sasquad-team.com/images/Anuncio2.png', alt: 'GTA SAS Screenshot 1' },
          { url: 'https://sasquad-team.com/images/Anuncio3.png', alt: 'GTA SAS Screenshot 2' },
          { url: 'https://sasquad-team.com/images/Anuncio4.png', alt: 'GTA SAS Screenshot 3' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselImages();
  }, []);

  // Cargar datos del video
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('https://sasquad-team.com/database/adminstrator/security/website-controller/get-video-data.php?page=gta-sas', {
          cache: 'no-store'
        });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data: VideoData = await response.json();
        setVideoData(data);
        
        if (data.error) {
          console.error('Error del servidor:', data.error);
        }
      } catch (error) {
        console.error('Error loading video data:', error);
      } finally {
        setVideoLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  // Resto de tus funciones existentes (openDownloadModal, closeDownloadModal, continueDownload)
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
            <img src="https://sasquad-team.com/images/SAS.png" alt="SAS Logo" className="logoS" />
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
            <button className="downloadS-button" onClick={() => openDownloadModal("https://drive.google.com/file/d/1f6ltHop0Oq31B7Aa_xRaznuK-zshHmBT/view?usp=sharing")}>
              <img src="https://img.icons8.com/ios/50/000000/google-drive.png" alt="Download" className="icon" /> Download Files (Non-Setup) from Google Drive
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
          {loading ? (
            <div className="loading-placeholder">Loading screenshots...</div>
          ) : (
            <SlickSlider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img 
                    src={image.url} 
                    alt={image.alt || `GTA SAS Screenshot ${index + 1}`} 
                    className="carousel-image"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://sasquad-team.com/images/Anuncio${(index % 3) + 2}.png`;
                      (e.target as HTMLImageElement).alt = `Fallback GTA SAS Screenshot ${index + 1}`;
                    }}
                  />
                </div>
              ))}
            </SlickSlider>
          )}
        </div>
      </section>

      {/* Video de YouTube */}
      <section className="parallax">
        <div className="parallax-content">
          <h2>{videoData.title}</h2>
          <p>{videoData.description}</p>
          <div className="video-container">
            {videoLoading ? (
              <div className="video-loading">Loading video...</div>
            ) : (
              <iframe 
                src={`https://www.youtube.com/embed/${videoData.videoId}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}