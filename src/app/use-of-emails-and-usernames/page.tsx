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
    title: "Use of Emails and user names",
    description: "We inform you that from now on, SASquad Team will ask for a username and password in order to be able to download your projects. This is the reason to send you first, an emai with a thank you message about the downloads, and second, to send you news about our projects.\n\n Don't worry, we will not use your e-mails for any other purpose than this, these e-mails will be stored in a secure database that we will manage. And we will not share them with third parties.\n\n You can read our terms and conditions related to this in article 12, visit https://sasquad-team.com/t-c.",
    imageUrls: [  
      "https://sasquad-team.com/images/SASquad_Logo.png"
    ],
    author: "SASquad Team",
    publicationDate: "2025-02-25"
  };

  return (
    <div>
      <AnnouncementDetail {...announcementProps} />
    </div>
  );
};

export default AnnouncementPage;
