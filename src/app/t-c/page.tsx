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
import React, { useEffect, useState } from 'react';

interface TermsSection {
  title: string;
  content?: string[] | string;  // Permitir que content sea un array o una cadena
  points?: string[];  // Sección con puntos (lista de strings)
  contacts?: { [key: string]: string };  // Para la sección de Contacto
}

interface TermsData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
}

const TermsAndConditions = () => {
  const [termsData, setTermsData] = useState<TermsData | null>(null);

  useEffect(() => {
    fetch('https://sasquad-team.com/database/adminstrator/security/terms.json')
      .then(response => response.json())
      .then(data => setTermsData(data))
      .catch(error => console.error('Error loading terms:', error));
  }, []);

  if (!termsData) {
    return <section id="terms-container"><p>Loading terms and conditions...</p></section>;
  }

  return (
    <section id="terms-container">
      <div id="terms">
        <h1>{termsData.title}</h1>
        <p>Last updated: {termsData.lastUpdated}</p>
        <p>{termsData.intro}</p>

        {termsData.sections.map((section, index) => (
          <div key={index} className="section">
            <h2>{section.title}</h2>

            {/* Si la sección tiene puntos, mostramos la lista */}
            {section.points && Array.isArray(section.points) && (
              <ul className="points">
                {section.points.map((point, i) => (
                  <li key={i}>
                    {point.split('href="').map((part, index) =>
                      index === 1 ? (
                        <span key={index} className="point-link">
                          {part.split('"')[0]}
                        </span>
                      ) : (
                        <span key={index}>{part}</span>
                      )
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Si la sección tiene contenido y es un array, lo mostramos */}
            {section.content && Array.isArray(section.content) && (
              <div>
                {section.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Si la sección tiene contenido y es solo una cadena de texto */}
            {section.content && typeof section.content === 'string' && (
              <p>{section.content}</p>
            )}

            {/* Si es la sección de contacto */}
            {section.contacts && (
              <div>
                <h3>Contact Information</h3>
                <ul>
                  {Object.entries(section.contacts).map(([key, value], i) => (
                    <li key={i}><strong>{key}:</strong> <a href={value}>{value}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsAndConditions;
