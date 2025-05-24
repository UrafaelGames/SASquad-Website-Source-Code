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
import React, { useState, useEffect } from 'react';

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(/\s+/);
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
};

const formatDescription = (text: string) => {
  const truncated = truncateWords(text, 20);
  let formattedText = truncated.replace(/\n/g, '<br />');
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  return formattedText;
};

type Announcement = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  video_url: string | null;
  author: string;
  created_at: string;
  slug: string;
};

const AnnouncementsLayer = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [showLayer, setShowLayer] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        if (!res.ok) throw new Error('Failed to fetch announcements');
        const data = await res.json();
        const latestAnnouncement = data[0];
        setAnnouncement(latestAnnouncement);

        const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
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

  if (!announcement || !showLayer) return null;

  return (
    <>
      <div className="announcement-layer">
        <div className="announcement-background" style={{ backgroundImage: `url(${announcement.image})` }}>
          <div className="overlay" />
          <div className="announcement-content">
            <button className="close-btn" onClick={closeLayer}>×</button>

            {announcement.title.toLowerCase().includes('inscripciones') && (
              <div className="tag">¡Inscripciones abiertas!</div>
            )}

            <h2>{announcement.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: formatDescription(announcement.description) }} />
            <a
              href={`https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .announcement-layer {
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .announcement-background {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(5px);
          z-index: 1;
        }

        .announcement-content {
          position: relative;
          z-index: 2;
          color: black;
          width: 800px;
          max-width: 95%;
          padding: 30px;
          background-color: #fefefe;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          text-align: left;
          font-family: 'Arial', sans-serif;
        }

        .tag {
          display: inline-block;
          background-color: #f39c12;
          color: white;
          padding: 8px 15px;
          font-weight: bold;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #000;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        .read-more-link {
          display: inline-block;
          margin-top: 20px;
          font-weight: bold;
          color: #e67e22;
          text-decoration: underline;
        }

        .close-btn {
          position: absolute;
          top: -15px;
          right: -15px;
          background-color: #ff4d4f;
          color: white;
          border: none;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          font-size: 18px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .close-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 600px) {
          .announcement-content {
            padding: 20px;
            width: 90%;
          }

          h2 {
            font-size: 20px;
          }

          .close-btn {
            top: -10px;
            right: -10px;
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementsLayer;
