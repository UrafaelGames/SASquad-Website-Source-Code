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
    title: "Location of hiddens objects",
    description: "As new content that we added to Grand Theft Auto: San Andreas Stories, we have placed in various sectors of the Los Santos map hidden objects that the player must find to complete the game. \n\n But as we know that some of you are lazy looking for them, we will provide a map with their exact locations.",
    imageUrls: [  
      "https://sasquad-team.com/images/locations.webp"
    ],
    author: "SASquad Team",
    publicationDate: "2025-02-06"
  };

  return (
    <div>
      <AnnouncementDetail {...announcementProps} />
    </div>
  );
};

export default AnnouncementPage;
