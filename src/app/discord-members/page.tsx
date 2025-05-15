'use client';
import React, { useEffect, useState } from 'react';
import DiscordActive from '../discord-active/page';

interface Member {
  name: string;
  role: string;
  image: string;
}

const ThankYouPage = () => {
  const [executives, setExecutives] = useState<Member[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);  // Estado de carga

  useEffect(() => {
    fetch('https://sasquad-team.com/database/adminstrator/security/team.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.discord) {
          setExecutives(data.discord.executives || []);
          setMembers(data.discord.members || []);
        }
      })
      .catch((err) => console.error('Error loading team data:', err))
      .finally(() => setIsLoading(false));  // Finaliza el loading
  }, []);

  // Renderizado de carga
  if (isLoading) {
    return (
      <section className="parallax-team-members">
        <div className="team-members-content">
          <h2>Loading team data...</h2>
          <p>Please wait while we load the data.</p>
        </div>
      </section>
    );
  }

  // Renderizado cuando no hay datos
  if (executives.length === 0 && members.length === 0) {
    return (
      <section className="parallax-team-members">
        <div className="team-members-content">
          <h2>No data found</h2>
          <p>There is no team data available at the moment. Please check back later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="parallax-team-members">
      <div className="team-members-content">
        <h2>Meet our administrative team on Discord</h2>
        <p>Meet the incredible administrative team that can help you.</p>
        <p>If you have any complaints or questions, please write to staff.support@sasquad-team.com.</p>

        {/* Sección Ejecutivos */}
        <div className="executives-section">
          <h3>Meet superior administration</h3>
          <div className="executives-container">
            {executives.map((executive, index) => (
              <div className="executive-card" key={index}>
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="executive-image"
                  width={300}
                  height={300}
                />
                <h3>{executive.name}</h3>
                <p>{executive.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Miembros */}
        <div className="members-section">
          <h3>Meet inferior administration</h3>
          <div className="members-container">
            {members.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DiscordActive />
    </section>
  );
};

export default ThankYouPage;
