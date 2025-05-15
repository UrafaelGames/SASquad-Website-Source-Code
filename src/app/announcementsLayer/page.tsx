'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

  if (!announcement) return null;

  return (
    <>
      {showLayer && (
        <div className="announcement-layer">
          <div
            className="announcement-background"
            style={{ backgroundImage: `url(${announcement.image})` }}
          >
            <div className="overlay" />
            <div className="announcement-content">
              <button className="close-btn" onClick={closeLayer}>X</button>
              <h2>{announcement.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: formatDescription(announcement.description) }} />
              <a
  href={`https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`}
  className="text-orange-500"
  target="_blank"
  rel="noopener noreferrer"
>
  Read more
</a>
            </div>
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }

        .announcement-content {
          position: relative;
          z-index: 2;
          color: white;
          width: 700px;
          max-width: 90%;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          text-align: center;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          color: white;
        }

        .read-more-btn {
          padding: 10px 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
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
