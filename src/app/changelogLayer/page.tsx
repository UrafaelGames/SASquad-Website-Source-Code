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

import { useState, useEffect } from 'react';
import { FaTimes, FaHistory, FaExternalLinkAlt } from 'react-icons/fa';

interface ChangeLogEntry {
  version: string;
  date: string;
  description: string;
  changes: string[];
  detailsLink?: string;
}

export default function ChangelogLayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [changelog, setChangelog] = useState<ChangeLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNewChanges, setHasNewChanges] = useState(false);

  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const response = await fetch('https://sasquad-team.com/database/adminstrator/security/website-controller/get-changelog.php');
        const data = await response.json();
        const entries = Array.isArray(data) ? data : data.changelog || [];
        setChangelog(entries);
        checkNewChanges(entries);
      } catch (error) {
        console.error('Error loading changelog:', error);
        setChangelog([
          {
            version: "1.0.0",
            date: new Date().toISOString().split('T')[0],
            description: "Initial release of the website",
            changes: [
              "Launched official website",
              "Implemented main carousel",
              "Basic downloads section"
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchChangelog();
  }, []);

  const checkNewChanges = (entries: ChangeLogEntry[]) => {
    const lastSeenVersion = localStorage.getItem('lastSeenVersion');
    const latestVersion = entries[0]?.version;
    setHasNewChanges(!!latestVersion && latestVersion !== lastSeenVersion);
  };

  const togglePanel = () => {
    if (!isOpen && changelog.length > 0) {
      localStorage.setItem('lastSeenVersion', changelog[0].version);
      setHasNewChanges(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante minimal */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition-all z-40 flex items-center justify-center group"
        aria-label="Ver changelog"
      >
        <FaHistory className="text-lg" />
        {hasNewChanges && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-ping opacity-75"></span>
        )}
      </button>

      {/* Overlay y panel minimal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-3 animate-fadeIn">
          <div className="bg-black text-white rounded-md shadow-lg w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden border border-gray-700">
            {/* Header compacto */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
              <div>
                <h2 className="text-lg font-bold">Changelog</h2>
              </div>
              <button
                onClick={togglePanel}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Contenido con scroll */}
            <div className="overflow-y-auto px-4 py-3 flex-1">
              {loading ? (
                <div className="text-center py-6 text-gray-400 animate-pulse">Cargando...</div>
              ) : changelog.length === 0 ? (
                <div className="text-center py-6 text-gray-500">Sin registros disponibles.</div>
              ) : (
                <div className="space-y-4">
                  {changelog.map((entry, index) => (
                    <div key={index} className="pb-3 border-b border-gray-700 last:border-b-0">
                      <div className="flex justify-between items-center mb-1">
                        <div>
                          <h3 className="text-base font-bold">v{entry.version}</h3>
                          <span className="text-xs text-gray-400">
                            {new Date(entry.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        {entry.detailsLink && (
                          <a
                            href={entry.detailsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:underline flex items-center"
                          >
                            Detalles <FaExternalLinkAlt className="ml-1 text-xs" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{entry.description}</p>
                      {Array.isArray(entry.changes) && entry.changes.length > 0 && (
                        <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 pl-4">
                          {entry.changes.map((change, i) => (
                            <li key={i}>{change}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer compacto */}
            <div className="px-4 py-2 border-t border-gray-700 text-xs text-gray-400 text-center">
              v{changelog[0]?.version || '1.0.0'}
            </div>
          </div>
        </div>
      )}
    </>
  );
}