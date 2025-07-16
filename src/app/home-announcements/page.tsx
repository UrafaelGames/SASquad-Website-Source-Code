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
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const formatDescription = (text: string) => {
  const words = text.split(/\s+/).slice(0, 30).join(' ');

  let formattedText = words.replace(/\n/g, '<br />');
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

const AnnouncementsHome = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        
        if (!res.ok) {
          throw new Error('Opps. Failed to fetch announcements. Were come back later. Sorry..');
        }

        const data = await res.json();

        // Toma solo los tres primeros anuncios
        setAnnouncements(data.slice(0, 3));

        setLoading(false);
      } catch (err) {
        setError('Opps. There was an error loading the announcements. Please try again later.');
        setLoading(false);
        console.log(err);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <section id="announcements-home">
        <div className="container">
          <h1>Recent Announcements</h1>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="announcements-home">
        <div className="container">
          <h1>Recent Announcements</h1>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (announcements.length === 0) {
    return (
      <section id="announcements-home">
        <div className="container">
          <h1>Recent Announcements</h1>
          <p>No announcements available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="announcements-home">
      <div className="container">
        <h1>Recent Announcements</h1>
        <div className="announcement-list">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="announcement-item"
             onClick={() => window.location.href = `https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`}
            >
              {announcement.preview_image && (
                <img
                  src={announcement.preview_image}
                  alt={announcement.title}
                />
              )}
              <h2>{announcement.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: formatDescription(announcement.description) }} />
              {/* Enlace de lectura  */}
             <a
  href={`https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Read more
</a>

            </div>
          ))}
        </div>

        {/* Link to more announcements */}
        <div className="more-announcements">
          <Link href="/newswire">Click here to see more announcements from SASquad Team</Link>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsHome;
