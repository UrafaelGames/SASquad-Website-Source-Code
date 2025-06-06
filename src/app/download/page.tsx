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

export default function DownloadPage() {
    return (
        <div className="page-download">
          {/* Parallax Effect */}
          <div className="parallaxD">
            <div className="parallaxD-content">
              <a href="./gta-sas" className="logo-container">
                <img 
                  src="https://sasquad-team.com/images/SAS.png" 
                  alt="SAS Logo" 
                  className="logo" 
                />
              </a>
              <div className="synopsis">
                <h2>Grand Theft Auto San Andreas Stories</h2>
                <p>In 1989, The Vagos and The Ballas enter the crack business, igniting a fierce rivalry. The VLA, an emerging gang, threatens their dominance. Loco Syndicate sees an opportunity and manages to get The Ballas and Los Vagos to work together, strengthening The Vagos against The Aztecas. The betrayal of a close friend of José, an important figure from the forest, further complicates the power struggle in the streets of San Andreas.</p>
              </div>
              <div className="download-button-container">
                <a href="./gta-sas" className="download-button">
                  Download GTA SAS
                </a>
              </div>
            </div>
          </div>

          {/* Sección de Novedades */}
          <div className="news-section">
            <h2>What&apos;s New in Version 1.0?</h2> 
            <ul className="news-list">
              <li>13 new main misiions!</li>
              <li>2 new circuits/sub-missions</li>
              <li>25 collectibles in LS.</li>
              <li>17 new rampages missions in LS.</li>
              <li>New changes in the LS map</li>
              <li>New radio stations (beta)</li>
              <li>José&apos;s voice and dialogues in free mode.</li>
              <li>English and Spanish subtitles.</li>
              <li>New easter eggs</li>
            </ul>
          </div>
        </div>
    );
}
