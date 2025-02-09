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

import React from "react";

const Credits: React.FC = () => {
  const credits = [
    { name: "Uriel Sánchez", contribution: "King Knuts Restaurant" },
    { name: "Song of big boss, Calvin.l, Rp911, LC.net", contribution: "Vehicles" },
    { name: "Mix Mods", contribution: "Essentials pack" },
    { name: "Almico / Lowpolyped", contribution: "Ice cube skin" },
    { name: "14todoeltiempoDc", contribution: "PS2 atmosphere" },
    { name: "Ricky Retriever", contribution: "Peds" },
    { name: "SlingShot753", contribution: "Weapons and pickups" },
    { name: "Hackman128", contribution: "SAORS" },
    { name: "VanBross", contribution: " Firsts missions" }
  ];

  return (
    <div>

      <main>
        <section id="credits-container">
          <div className="container">
            <h1>Credits</h1>
            <p>We would like to thank all the people who, although not officially part of SASquad Team, have contributed significantly to the project.</p>
            
            {/* Mostrar créditos de manera dinámica */}
            {credits.map((credit, index) => (
              <div key={index} className="credit-item">
                <p><strong>{credit.name}</strong>: {credit.contribution}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Credits;
