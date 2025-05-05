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
    title: "Publication of the website source code",
    description: "As a transparency campaign, we, SASquad Team decided to release the source code of our website, so that all our community can see and review its code.\n\n Since we receive too many complaints that we inject malware, pishing, etc., with this measure we give to understand to our community that we do not perform those practices, since it would not benefit us in any way to do so.\n\n You can see the code in this GitHub repository: https://github.com/UrafaelGames/SASquad-Website-Source-Code",
    imageUrls: [  
      "https://sasquad-team.com/images/SASquad_Logo.png"
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
