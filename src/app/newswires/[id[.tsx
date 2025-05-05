'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface AnnouncementDetailProps {
  title: string;
  description: string;
  imageUrls?: string[];
  videoUrl?: string;
  author: string;
  publicationDate: string;
}

const AnnouncementPage: React.FC = () => {
  const [announcement, setAnnouncement] = useState<AnnouncementDetailProps | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://sasquad-team.com/database/adminstrator/security/newswire/getAnnouncement.php?id=${id}`)
        .then((response) => response.json())
        .then((data) => setAnnouncement(data))
        .catch((error) => console.error('Error fetching announcement:', error));
    }
  }, [id]);

  if (!announcement) return <p>Loading...</p>;

  return (
    <section id="announcement-detail">
      <div className="container">
        <h1>{announcement.title}</h1>
        <p className="author-info">
          <strong>Author:</strong> {announcement.author} | <strong>Date of publication:</strong> {announcement.publicationDate}
        </p>
        <div className="description">
          {announcement.description.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementPage;
