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

const Announcements = () => {
  const announcements = [
    {
      title: "Use of Emails and user names",
      description: "We inform you that from now on, SASquad Team will ask for a username and password...",
      image: "https://sasquad-team.com/images/SASquad_Logo.png",
      link: "./use-of-emails-and-usernames",
    },
    {
      title: "Publication of the website source code",
      description: "As a transparency campaign, we, SASquad Team decided to release the source code of our website...",
      image: "https://sasquad-team.com/images/SASquad_Logo.png",
      link: "./website-code-relase",
    },
    {
        title: "Website maintenance and rebuilding completed",
        description: "It is our pleasure to announce that the website has been 100% redesigned...",
        image: "https://sasquad-team.com/images/SASquad_Logo.png",
        link: "./2025-maintenance",
      },
      {
        title: "Scheduled website maintenance",
        description: "We inform you of a scheduled maintenance to the website...",
        image: "https://sasquad-team.com/images/SASquad_Logo.png",
        link: "./2025-maintenance-scheduled",
      },
    {
        title: "Location of hidden objects",
        description: "Discover the locations of the hidden objects...",
        image: "https://sasquad-team.com/images/SAS.jpg",
        link: "/location-hidden-objects",
      }
  ];

  return (
    <section id="announcements">
      <div className="container">
        <h1>Recent Announcements</h1>
        <div className="announcement-list">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-item">
              <img 
                src={announcement.image} 
                alt={announcement.title} 
              />
              <h2>{announcement.title}</h2>
              <p>{announcement.description}</p>
              <a href={announcement.link}>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
