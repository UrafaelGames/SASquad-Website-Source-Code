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
        setError('Failed to load announcements.');
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
                    <p className="text-sm text-gray-600">Author: {announcement.author}</p>
                    <Link href={`/newswire/${announcement.slug}`} className="text-orange-500">
                      Read more
                    </Link>
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
