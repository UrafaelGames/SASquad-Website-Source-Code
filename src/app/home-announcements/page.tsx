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
import React from 'react';

const AnnouncementsHome = () => {
  const announcementsHome = [
    {
      title: "Publication of the website source code",
      description: "As a transparency campaign, we, SASquad Team, decided to release the source code of our website...",
      image: "https://sasquad-team.com/images/SASquad_Logo.png",
      link: "./website-code-release",
    },
    {
      title: "Website maintenance and rebuilding completed",
      description: "It is our pleasure to announce that the website has been 100% redesigned...",
      image: "https://sasquad-team.com/images/SASquad_Logo.png",
      link: "./2025-maintenance",
    }
  ];

  return (
    <section id="announcements">
      <div className="container">
        <h1>Recent Announcements</h1>
        <div className="announcement-list">
          {announcementsHome.map((announcementHome, index) => (
            <div key={index} className="announcement-item">
              <img 
                src={announcementHome.image} 
                alt={announcementHome.title} 
              />
              <h2>{announcementHome.title}</h2>
              <p>{announcementHome.description}</p>
              <a href={announcementHome.link}>Read more</a>
            </div>
          ))}
        </div>
        {/* Link to more announcements */}
        <div className="more-announcements">
          <a href="./announcements">Click here to see more announcements from SASquad Team</a>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsHome;
