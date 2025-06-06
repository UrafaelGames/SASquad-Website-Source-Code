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
  publish_at?: string;
  visibility?: string;
};

const Newswire = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        console.error(err);
        setError('Opps. Failed to load announcements. Were come back later. Sorry...');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.max(1, Math.ceil(announcements.length / announcementsPerPage));
  const startIndex = (currentPage - 1) * announcementsPerPage;
  const currentAnnouncements = announcements.slice(startIndex, startIndex + announcementsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="announcements" className="py-4">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl text-center">Recent Announcements</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : currentAnnouncements.length === 0 ? (
          <p className="text-center">No announcements right now.</p>
        ) : (
          <>
            <div className="announcement-list flex flex-col gap-8 mt-8">
              {currentAnnouncements.map((announcement, index) => {
                const announcementNumber = (currentPage - 1) * announcementsPerPage + index + 1;
                return (
                  <div
                    key={announcement.id}
                    className="announcement-item bg-gray-100 p-6 rounded-lg shadow-md"
                  >
                    {announcement.preview_image && (
                      <img
                        src={announcement.preview_image}
                        alt={announcement.title}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                    )}
                    <h2 className="text-xl mb-2">
                      {announcementNumber}. {announcement.title}
                    </h2>
                    <p
                      className="text-base"
                      dangerouslySetInnerHTML={{
                        __html: formatDescription(announcement.description.slice(0, 100) + '...'),
                      }}
                    />
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Author: {announcement.author}</p>
                      {announcement.publish_at && (
                        <p>Scheduled: {new Date(announcement.publish_at).toLocaleString()}</p>
                      )}
                      {/* Opcional: Mostrar estado de visibilidad */}
                      {/* <p>Status: <span className={`font-bold ${
                        announcement.visibility === 'public' ? 'text-green-600' :
                        announcement.visibility === 'unlisted' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {announcement.visibility}
                      </span></p> */}
                    </div>
                    <a
                      href={`https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`}
                      className="text-orange-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="pagination-controls mt-8 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`py-2 px-4 rounded-lg ${
                    currentPage === 1 ? 'bg-gray-300' : 'bg-orange-500'
                  } text-white border-none cursor-pointer text-base`}
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`py-2 px-4 rounded-lg ${
                    currentPage === totalPages ? 'bg-gray-300' : 'bg-orange-500'
                  } text-white border-none cursor-pointer text-base`}
                >
                  Next →
                </button>
              </div>
              <span className="text-gray-700 text-sm">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Newswire;