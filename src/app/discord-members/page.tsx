import React from 'react';
import DiscordActive from '../discord-active/page';

const ThankYouPage = () => {
  return (
    // Sección Parallax - Miembros del Team
    <section className="parallax-team-members">
      <div className="team-members-content">
        <h2>Meet our administrative team on Discord</h2>
        <p>Meet the incredible administrative team that can help you.</p>
        <p>If you have any complaints or questions, please write to staff.support@sasquad-team.com.</p>

        {/* Sección Ejecutivos */}
        <div className="executives-section">
          <h3>Meet superior administration</h3>
          <div className="executives-container">
            <div className="executive-card">
              <img
                src="https://sasquad-team.com/images/Sharky.png"
                alt="CEO"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Sharky</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="executive-card">
              <img
                src="https://sasquad-team.com/images/Artur.png"
                alt="Owner"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>ArturSkuller</h3>
              <p>Server owner</p>
            </div>
            <div className="executive-card">
              <img
                src="https://sasquad-team.com/images/Urafael.png"
                alt="Head"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Urafael</h3>
              <p>Staff head, Ejecutivo de Rockstar Leeds</p>
            </div>
            <div className="executive-card">
              <img
                src="/images/Blind.png"
                alt="Admin 1"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>BlindZyrius</h3>
              <p>Ejecutivo de Rockstar Leeds</p>
            </div>
            <div className="executive-card">
              <img
                src="/images/Ynkwon.png"
                alt="Admin 2"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Ynkwon</h3>
              <p>Ejecutivo de Rockstar Leeds</p>
            </div>
            <div className="executive-card">
              <img
                src="/images/Blags.png"
                alt="Admin 3"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Blagstle</h3>
              <p>Ejecutivo de Rockstar Leeds</p>
            </div>
            <div className="executive-card">
              <img
                src="/images/Gleen.png"
                alt="Admin 4"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Gleen</h3>
              <p>Ejecutivo de Rockstar Leeds</p>
            </div>
            <div className="executive-card">
              <img
                src="/images/Lewis.png"
                alt="Admin 5"
                className="executive-image"
                width={300}
                height={300}
              />
              <h3>Lewis</h3>
              <p>Liberty City Police Department</p>
            </div>
          </div>
        </div>

        {/* Sección Miembros */}
        <div className="members-section">
          <h3>Meet inferior administration</h3>
          <div className="members-container">
            <div className="member-card">
              <img
                src="/images/Ivan.png"
                alt="Mod 1"
                className="member-image"
                width={300}
                height={300}
              />
              <h3>Ivans</h3>
              <p>San Fierro Police Department</p>
            </div>
            <div className="member-card">
              <img
                src="https://sasquad-team.com/images/Pepis.png"
                alt="Mod 2"
                className="member-image"
                width={300}
                height={300}
              />
              <h3>Belvann</h3>
              <p>San Fierro Police Departmet</p>
            </div>
            <div className="member-card">
              <img
                src="https://sasquad-team.com/images/Payro.png"
                alt="Mod 3"
                className="member-image"
                width={300}
                height={300}
              />
              <h3>Payro</h3>
              <p>San Fierro Police Department</p>
            </div>
          </div>
        </div>
      </div>

      <DiscordActive />
    </section>

  );
};

export default ThankYouPage;
