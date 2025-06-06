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
import React, { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaShareAlt, FaWhatsapp, FaTwitter, FaFacebookF, FaLink, FaClock, FaDiscord } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
  preview_image: string;
  link: string;
  video_url: string | null;
  author: string;
  created_at: string;
  slug: string;
};

const AnnouncementsLayer = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showLayer, setShowLayer] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [slideTransition, setSlideTransition] = useState<'left'|'right'|'none'>('none');
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('https://sasquad-team.com/database/adminstrator/security/newswire/getSASAnnouncements.php');
        if (!res.ok) throw new Error('Failed to fetch announcements');
        const data = await res.json();
        setAnnouncements(data);

        const seenInSession = sessionStorage.getItem('hasSeenAnnouncement');
        const remindTime = localStorage.getItem('remindAnnouncementTime');
        
        if ((!seenInSession || (remindTime && new Date() > new Date(remindTime)))) {
          if (remindTime) localStorage.removeItem('remindAnnouncementTime');
          setShowLayer(true);
          sessionStorage.setItem('hasSeenAnnouncement', 'true');
        }
      } catch (err) {
        console.error('Error fetching announcements:', err);
      }
    };

    fetchAnnouncements();
  }, []);

  const closeLayer = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => setShowLayer(false), 500);
  }, []);

  const handleRemindMe = useCallback(() => {
    const now = new Date();
    const remindTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour later
    localStorage.setItem('remindAnnouncementTime', remindTime.toISOString());
    closeLayer();
  }, [closeLayer]);

  const changeSlide = useCallback((direction: 'next'|'prev') => {
    setSlideTransition(direction === 'next' ? 'left' : 'right');
    setTimeout(() => {
      setCurrentSlide(prev => 
        direction === 'next' 
          ? (prev === announcements.length - 1 ? 0 : prev + 1)
          : (prev === 0 ? announcements.length - 1 : prev - 1)
      );
      setSlideTransition('none');
    }, 300);
  }, [announcements.length]);

  const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);

  const toggleShareOptions = useCallback(() => {
    setShowShareOptions(prev => !prev);
    setCopied(false);
  }, []);

  const shareOnSocial = useCallback((platform: string) => {
    const announcement = announcements[currentSlide];
    const url = `https://sasquad-team.com/sasquad/newswire/announcement?slug=${announcement.slug}`;
    const text = `Check out this announcement: ${announcement.title}`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'discord':
        window.open(`https://discord.com/channels/@me?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      default:
        break;
    }
    setShowShareOptions(false);
  }, [announcements, currentSlide]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide(); // Swipe left
    } else if (touchEnd - touchStart > 50) {
      prevSlide(); // Swipe right
    }
  };

  if (!announcements.length || !showLayer) return null;

  const currentAnnouncement = announcements[currentSlide];

  return (
    <>
      <div className={`announcement-layer ${isClosing ? 'fade-out' : 'fade-in'}`}>
        <div 
          className="announcement-background" 
          style={{ backgroundImage: `url(${currentAnnouncement.preview_image})` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentAnnouncement.video_url && (
            <div className="video-overlay">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={currentAnnouncement.video_url} type="video/mp4" />
              </video>
            </div>
          )}
          
          <div className="overlay" />
          
          <div className="announcement-content-wrapper">
            <div className={`announcement-content ${slideTransition === 'left' ? 'slide-out-left' : ''} ${
              slideTransition === 'right' ? 'slide-out-right' : ''
            }`}>
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto shadow-xl">
                <button 
                  className="close-btn absolute -top-3 -right-3 bg-gradient-to-br from-red-400 to-red-700 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  onClick={closeLayer}
                >
                  <FaTimes className="text-lg" />
                </button>
                
                {currentAnnouncement.title.toLowerCase().includes('inscripciones') && (
                  <div className="tag bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3.5 py-1.5 rounded-xl text-sm font-bold mb-3.5 inline-block shadow-md">
                    Open Registrations!
                  </div>
                )}
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                  {currentAnnouncement.title}
                </h2>
                
                <div 
                  className="text-gray-700 text-base leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: formatDescription(currentAnnouncement.description) }} 
                />
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-3">
                    <a
                      href={`https://sasquad-team.com/sasquad/newswire/announcement?slug=${currentAnnouncement.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-link bg-gradient-to-r from-orange-600 to-red-700 text-white px-5 py-2.5 rounded-lg font-bold hover:translate-y-[-2px] hover:shadow-lg transition-all"
                    >
                      Read More →
                    </a>
                    
                    <button 
                      onClick={handleRemindMe}
                      className="text-gray-500 hover:text-orange-500 text-sm flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 rounded-lg transition-colors"
                    >
                      <FaClock /> Later
                    </button>
                  </div>
                  
                  <div className="relative">
                    <button 
                      onClick={toggleShareOptions}
                      className="share-btn bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors"
                    >
                      <FaShareAlt />
                    </button>
                    
                    {showShareOptions && (
                      <div className="share-options absolute right-0 bottom-full mb-2 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-10">
                        <button 
                          onClick={() => shareOnSocial('whatsapp')}
                          className="p-2 text-green-500 hover:bg-green-50 rounded-full"
                          title="Share on WhatsApp"
                        >
                          <FaWhatsapp />
                        </button>
                        <button 
                          onClick={() => shareOnSocial('twitter')}
                          className="p-2 text-blue-400 hover:bg-blue-50 rounded-full"
                          title="Share on Twitter"
                        >
                          <FaTwitter />
                        </button>
                        <button 
                          onClick={() => shareOnSocial('facebook')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                          title="Share on Facebook"
                        >
                          <FaFacebookF />
                        </button>
                        <button 
                          onClick={() => shareOnSocial('discord')}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
                          title="Share on Discord"
                        >
                          <FaDiscord />
                        </button>
                        <button 
                          onClick={() => shareOnSocial('copy')}
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded-full relative"
                          title="Copy link"
                        >
                          <FaLink />
                          {copied && (
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </span>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Slide controls */}
                {announcements.length > 1 && (
                  <div className="flex items-center justify-center mt-6 gap-4">
                    <button 
                      onClick={prevSlide}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    >
                      <IoIosArrowBack />
                    </button>
                    
                    <div className="flex gap-2">
                      {announcements.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-orange-500' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextSlide}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
                
                {/* Footer */}
                <footer className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
                  <p>© {new Date().getFullYear()} SASquad Team. All rights reserved.</p>
                  <p className="mt-1">Published by {currentAnnouncement.author} on {new Date(currentAnnouncement.created_at).toLocaleDateString()}</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .announcement-layer {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          touch-action: pan-y;
        }

        .fade-in {
          animation-name: fadeIn;
        }

        .fade-out {
          animation-name: fadeOut;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }

        .announcement-background {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.7;
        }

        .video-overlay video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65));
          backdrop-filter: blur(6px);
          z-index: 1;
        }

        .announcement-content-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 90%;
          max-width: 700px;
        }

        .announcement-content {
          position: relative;
          animation: slideIn 0.6s ease forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 0.3s ease forwards;
        }

        .slide-out-right {
          animation: slideOutRight 0.3s ease forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-100px); }
        }

        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100px); }
        }

        .read-more-link:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 600px) {
          .announcement-content > div {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementsLayer;