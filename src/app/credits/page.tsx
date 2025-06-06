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
import React, { useEffect, useState } from "react";

interface Credit {
  name: string;
  contribution: string;
}

const Credits: React.FC = () => {
  const [credits, setCredits] = useState<Credit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://sasquad-team.com/database/adminstrator/security/credits.json") 
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCredits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading credits:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <main>
        <section id="credits-container">
          <div className="container">
            <h1>CREDITS</h1>
            <p>We would like to thank all the people who, although not officially part of SASquad Team, have contributed significantly to the project.</p>

            {loading && <p>Loading credits...</p>}
            {error && <p style={{ color: "red" }}>Failed to load credits.</p>}

            {!loading && !error && credits.map((credit, index) => (
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
