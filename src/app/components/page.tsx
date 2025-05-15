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

"use client";

import React, { useState } from 'react';

interface AnnouncementDetailProps {
  title: string;
  description: string;
  imageUrls?: string[]; // Support for multiple images
  videoUrl?: string; // support any type of video
  author: string;
  publicationDate: string;
}

const AnnouncementDetail: React.FC<AnnouncementDetailProps> = ({
  title,
  description,
  imageUrls,
  videoUrl,
  author,
  publicationDate
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to detect if the video is from YouTube
  const isYouTube = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Safe fallback for description if it's undefined or null
  const safeDescription = description || '';

  return (
    <section id="announcement-detail">
      <div className="container">
        <h1>{title}</h1>
        <p className="author-info">
          <strong>Author:</strong> {author} | <strong>Date of publication:</strong> {publicationDate}
        </p>

        <div className="description">
          {safeDescription.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p> // Split description into paragraphs
          ))}
        </div>

        {videoUrl && (
          <div className="video-container">
            {isYouTube(videoUrl) ? (
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${videoUrl.split("v=")[1]}`}
                title="Announcement Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video width="100%" height="500" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        {imageUrls && imageUrls.length > 0 && (
          <div className="image-container">
            {imageUrls.map((url, index) => (
              <img 
                key={index} 
                src={url} 
                alt={`Announcement image ${index + 1}`} 
                width={500}  // Adjust width as needed
                height={300} // Adjust height as needed
                onClick={() => setSelectedImage(url)} // Click to show the image in larger view
                style={{ cursor: "pointer" }} // Change cursor to indicate it's clickable
              />
            ))}
          </div>
        )}
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage} alt="Expanded View" width={1000} height={600} />
          </div>
        </div>
      )}

      {/* Styles for the modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-content img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #fff;
          border: none;
          font-size: 20px;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 50%;
        }

        .close-btn:hover {
          background: #ddd;
        }
      `}</style>
    </section>
  );
};

export default AnnouncementDetail;
