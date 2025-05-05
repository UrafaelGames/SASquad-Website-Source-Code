'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const formatDescription = (text: string) => {
  let formattedText = text.replace(/\n/g, '<br />');
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  return formattedText;
};

type Announcement = {
  id: number;
  title: string;
  description: string;
  preview_image: string;
  link: string;
  video_url: string | null;
  author: string;
  created_at: string;
  slug: string;
};

const AnnouncementsLayer = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [showLayer, setShowLayer] = useState<boolean>(false);

  // Verifica si estamos en el cliente antes de usar localStorage
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        
        if (!res.ok) {
          throw new Error('Failed to fetch announcements');
        }

        const data = await res.json();
        console.log('Fetched announcements:', data); // Debugging line

        // Mostrar solo el último anuncio
        const latestAnnouncement = data[0];
        setAnnouncement(latestAnnouncement);

        // Mostrar el layer solo si es la primera vez que el usuario entra
        const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
        console.log('Has seen announcement:', hasSeenAnnouncement); // Debugging line
        if (!hasSeenAnnouncement) {
          setShowLayer(true);
          localStorage.setItem('hasSeenAnnouncement', 'true');
        }
      } catch (err) {
        console.error('Error fetching announcement:', err);
      }
    };

    fetchAnnouncement();
  }, []);

  const closeLayer = () => {
    setShowLayer(false);
  };

  if (!announcement) return null;  // Si no hay anuncio, no se renderiza nada

  return (
    <>
      {showLayer && (
        <div className="announcement-layer">
          <div className="announcement-content">
            <button className="close-btn" onClick={closeLayer}>X</button>
            <div className="announcement-image-container">
              {announcement.preview_image && (
                <img
                  src={announcement.preview_image}
                  alt={announcement.title}
                  className="announcement-image"
                />
              )}
            </div>
            <h2>{announcement.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: formatDescription(announcement.description) }} />
            <Link href={`/newswire/${announcement.slug}`}>
              <button className="read-more-btn">Read more</button>
            </Link>
          </div>
        </div>
      )}
      <style jsx>{`
        .announcement-layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .announcement-content {
          background: black;
          padding: 20px;
          width: 700px; /* Ancho más grande */
          height: 400px; /* Ajuste de altura */
          color: white;
          text-align: left;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .announcement-image-container {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        .announcement-image {
          max-width: 150px;
          height: auto;
          margin-right: 20px;
        }

        h2 {
          margin-top: 10px;
          font-size: 24px;
        }

        .read-more-btn {
          padding: 10px 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: auto;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #FF5733;
          color: white;
          border: none;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default AnnouncementsLayer;
