'use client';

import React, { useState } from 'react';

interface Announcement {
  slug: string;
  title: string;
  description: string;
  images: string[];
  video_url: string;
  author: string;
  created_at: string;
}

function processDescription(description: string): string {
  return description.trim()
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\n/g, '<br />')
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
}

export default function AnnouncementClient({ announcement }: { announcement: Announcement }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { title, description, images, video_url, author, created_at } = announcement;

  const handleImageClick = (index: number) => {
    setIsImageOpen(true);
    setCurrentImage(index);
  };

  return (
    <section id="announcement-detail">
      <div className="container">
        <h1>{title}</h1>
        <p className="author-info">
          <strong>Author:</strong> {author} • <strong>Date:</strong> {new Date(created_at).toLocaleDateString()}
        </p>

        <div className="description" dangerouslySetInnerHTML={{ __html: processDescription(description) }} />

        {images?.length > 0 && (
          <div className="image-container">
            {images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)} className="image-item">
                <img src={image} alt={`Announcement Image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        <hr className="separator" />

        {video_url && (
          <div className="video-container">
            {video_url.includes('youtube.com') || video_url.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${video_url.split('v=')[1]}`}
                title="Announcement Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls>
                <source src={video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>

      {isImageOpen && (
        <div className="image-modal" onClick={() => setIsImageOpen(false)}>
          <div className="image-modal-content">
            <img src={images[currentImage]} alt="Full Announcement" />
          </div>
        </div>
      )}
    </section>
  );
}
