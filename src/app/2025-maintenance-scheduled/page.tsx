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
    title: "Scheduled website maintenance",
    description: "We inform that we will make a scheduled maintenance to our website, which will bring too many performance and visual improvements that we hope you like, while we will delete all the content that is currently there and enable the main page to download the mod. \n\n In addition, we will release the source code of the page so that everyone can see them and be sure that we do not share any kind of virus.",
    imageUrls: [ 
      "https://sasquad-team.com/images/SASquad_Logo.png"
    ],
    author: "SASquad Team",
    publicationDate: "2025-02-07"
  };

  return (
    <div>
      <AnnouncementDetail {...announcementProps} />
    </div>
  );
};

export default AnnouncementPage;
