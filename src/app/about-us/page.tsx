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

export default function AboutUsPage() {
  return (
    <div className="page-about-us">
      {/* Sección de Introducción */}
      <div className="intro-section">
        <div className="intro-content">
          <h1 className="fade-in">About Us - SASquad Team</h1>
          <p className="fade-in">SASquad Team is a group of modders passionate about creation and innovation within the GTA universe. Founded in 2022, our team is composed of creative and talented minds who are constantly looking to push the boundaries, creating unique and exciting mods. We are a group of enthusiasts who are not only dedicated to modding the game, but also enjoy challenging normality, bringing crazy ideas to life and transforming them into something amazing. We are always looking to improve, innovate and offer new experiences for the community of GTA players, because for us, every mod is a new adventure.</p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="mission-vision-section">
        <div className="mission fade-in-up">
          <h2>Our Mission</h2>
          <p>Our mission at SASquad Team is to transform the GTA experience through innovation and limitless creativity. We are dedicated to developing mods that not only extend the game, but reinvent it, taking players to new heights of fun and excitement. We believe in challenging convention, experimenting with fresh ideas and delivering unique content that reflects our passion for creation. Together, we seek to inspire the modding community and deliver experiences that have never been imagined before - adventure and creativity have no boundaries for us!</p>
        </div>
        <div className="vision fade-in-up">
          <h2>Our Vision</h2>
          <p>Our vision at SASquad Team is to be recognized as the leading innovation group within the GTA modding community. We strive to be the epicenter of new ideas, creating mods that set trends, define the future of the gaming experience and connect players from all over the world. We want to inspire other modders to explore their limits and develop content that not only enriches the game, but also transforms it into a platform for unlimited creativity. In the future, SASquad Team will be synonymous with quality, originality and passion in the world of GTA mods.</p>
        </div>
      </div>

      {/* Sección Parallax - Miembros del Team */}
      <section className="parallax-team-members">
        <div className="team-members-content">
          <h2>Meet Our Team</h2>
          <p>Meet the incredible members of SASquad Team</p>

          {/* Sección Ejecutivos */}
          <div className="executives-section">
            <h3>Meet Our Executives</h3>
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
                  src="https://sasquad-team.com/images/Urafael.png"
                  alt="CTO"
                  className="executive-image"
                  width={300}
                  height={300}
                />
                <h3>Urafael</h3>
                <p>CTO / CM / Website Dev</p>
              </div>
              <div className="executive-card">
                <img
                  src="https://sasquad-team.com/images/Michi.png"
                  alt="Lead Developer"
                  className="executive-image"
                  width={300}
                  height={300}
                />
                <h3>MichixG</h3>
                <p>Lead Developer</p>
              </div>
              <div className="executive-card">
                <img
                  src="https://sasquad-team.com/images/Pepis.png"
                  alt="Innovation Lead"
                  className="executive-image"
                  width={300}
                  height={300}
                />
                <h3>Belvann</h3>
                <p>Innovation Lead / Mission Writer</p>
              </div>
              <div className="executive-card">
                <img
                  src="https://sasquad-team.com/images/Artur.png"
                  alt="Mission Writer"
                  className="executive-image"
                  width={300}
                  height={300}
                />
                <h3>ArturSkuller</h3>
                <p>Mission Write</p>
              </div>
            </div>
          </div>

          {/* Sección Miembros */}
          <div className="members-section">
            <h3>Meet Our Members</h3>
            <div className="members-container">
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/Payro.png"
                  alt="Object Modeller"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>Payro</h3>
                <p>Objects Modeller</p>
              </div>
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/Benyel.png"
                  alt="Vehicle Modeller"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>The Benyel</h3>
                <p>Objects Modeller, Tymecycs</p>
              </div>
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/Musho.png"
                  alt="Ped Modeller"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>Musho</h3>
                <p>Missions Scripter</p>
              </div>
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/FileEx.png"
                  alt="Mechanic"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>FileEx</h3>
                <p>Mechanics</p>
              </div>
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/Zacary.png"
                  alt="Mission Scripter"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>Zacary</h3>
                <p>Peds Modeller</p>
              </div>
              <div className="member-card">
                <img
                  src="https://sasquad-team.com/images/Planeta.png"
                  alt="Mission Scripter"
                  className="member-image"
                  width={300}
                  height={300}
                />
                <h3>Planeta</h3>
                <p>Peds Modeller</p>
              </div>
            </div>
          </div>
          <div className="meet-team">
            <a href="./discord-members" className="meet-team-button">
              Meet the staff of SASquad Discord server here
            </a>
          </div>
        </div>
      </section>

     {/* Sección de Contacto */}
<section id="contact" style={{ textAlign: "center", padding: "50px", backgroundColor: "#f4f4f4" }}>
  <h2>Contact us!</h2>
  <p>If you have any questions, suggestions, or just want to join our community, feel free to contact us. We are always open to new members who are passionate about GTA modding.</p>

  <div>
    <h3>E-mail:</h3>
    <p>
      <a href="mailto:mail@sasquad-team.com" className="contact-link">
        <img src="https://img.icons8.com/ios/50/000000/mail.png" alt="Mail Icon" className="contact-icon" width={30} height={30} /> mail@sasquad-team.com
      </a>
    </p>
  </div>

  <div>
    <h3>Join Our Discord Server:</h3>
    <p>Connect with us and other modders in real time! Join our Discord server to share ideas, get support, and learn about the latest news.</p>
    <p>
      <a href="https://discord.gg/3KnDrXpj" target="_blank" className="contact-link">
        <img src="https://img.icons8.com/ios/50/000000/discord.png" alt="Discord Icon" className="contact-icon" width={30} height={30} /> Join our Discord
      </a>
    </p>
  </div>

  <div>
    <h3>Need help or have a complaint?</h3>
    <p>If you have any issues or complaints, please create a ticket on our support page.</p>
    <p>
      <a href="https://support.sasquad-team.com" target="_blank" className="contact-link">
        <img src="https://img.icons8.com/ios/50/000000/help.png" alt="Support Icon" className="contact-icon" width={30} height={30} /> Create a Ticket
      </a>
    </p>
  </div>
</section>


    </div>
  );
}
