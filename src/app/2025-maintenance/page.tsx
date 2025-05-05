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
import AnnouncementDetail from '../components/page';  
const AnnouncementPage: React.FC = () => {
  const announcementProps = {
    title: "Website maintenance and rebuilding completed",
    description: "It is our pleasure to inform that the SASquad website is now 100% complete. We have made an effort to completely redesign it, to make it more beautiful to the eye, easier to use.\n\n In addition, you can view the site code at: https://github.com/UrafaelGames/SASquad-Website-Source-Code",
    imageUrls: [  
      "https://sasquad-team.com/images/Website.png"
    ],
    author: "SASquad Team",
    publicationDate: "2025-02-09"
  };

  return (
    <div>
      <AnnouncementDetail {...announcementProps} />
    </div>
  );
};

export default AnnouncementPage;
