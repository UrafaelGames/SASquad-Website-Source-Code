'use client';
import React, { useEffect, useState } from 'react';
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

const AnnouncementsHome = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        
        if (!res.ok) {
          throw new Error('Failed to fetch announcements');
        }

        const data = await res.json();

        // Toma solo los tres primeros anuncios
        setAnnouncements(data.slice(0, 3));

        setLoading(false);
      } catch (err) {
        setError('There was an error loading the announcements. Please try again later.');
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
              onClick={() => window.location.href = `/newswire/${announcement.slug}`}
            >
              {announcement.preview_image && (
                <img
                  src={announcement.preview_image}
                  alt={announcement.title}
                />
              )}
              <h2>{announcement.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: formatDescription(announcement.description) }} />
              {/* Enlace de lectura más, en caso de que quieras mantener el link */}
              <Link href={`/newswire/${announcement.slug}`}>Read more</Link>
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
