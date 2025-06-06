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

import { useEffect, useState } from "react";

interface Member {
  name: string;
  role: string;
  image: string;
}

export default function AboutUsPage() {
  const [executives, setExecutives] = useState<Member[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sasquad-team.com/database/adminstrator/security/team.json?timestamp=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        setExecutives(data.executives);
        setMembers(data.members);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading team data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="logo"></div>
          <p className="loading-text">Loading...</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-about-us">
      {/* Sección de Introducción */}
      <div className="intro-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src="https://sasquad-team.com/GTA_SAS_Trailer.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="intro-content">
          <h1 className="fade-in">About Us - SASquad Team</h1>
          <p className="fade-in">
            SASquad Team is a group of modders passionate about creation and
            innovation within the GTA universe...
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="mission-vision-section">
        <div className="mission fade-in-up">
          <h2>Our Mission</h2>
          <p>
           Our mission at SASquad Team is to transform the GTA experience through innovation and limitless creativity. We are dedicated to developing mods that not only extend the game, but reinvent it, taking players to new heights of fun and excitement. We believe in challenging convention, experimenting with fresh ideas and delivering unique content that reflects our passion for creation. Together, we seek to inspire the modding community and deliver experiences that have never been imagined before - adventure and creativity have no boundaries for us!
          </p>
        </div>
        <div className="vision fade-in-up">
          <h2>Our Vision</h2>
          <p>
           Our vision at SASquad Team is to be recognized as the leading innovation group within the GTA modding community. We strive to be the epicenter of new ideas, creating mods that set trends, define the future of the gaming experience and connect players from all over the world. We want to inspire other modders to explore their limits and develop content that not only enriches the game, but also transforms it into a platform for unlimited creativity. In the future, SASquad Team will be synonymous with quality, originality and passion in the world of GTA mods.
          </p>
        </div>
      </div>

      {/* Sección Parallax - Miembros del Team */}
      <section className="parallax-team-members">
        <div className="team-members-content">
          <h2>Meet Our Team</h2>
          <p>Meet the incredible members of SASquad Team</p>

          {/* Ejecutivos */}
          <div className="executives-section">
            <h3>Meet Our Executives</h3>
            <div className="executives-container">
              {executives.length > 0 ? (
                executives.map((exec, index) => (
                  <div className="executive-card" key={index}>
                    <img
                      src={exec.image}
                      alt={exec.role}
                      className="executive-image"
                      width={300}
                      height={300}
                    />
                    <h3>{exec.name}</h3>
                    <p>{exec.role}</p>
                  </div>
                ))
              ) : (
                <p>No executives found.</p>
              )}
            </div>
          </div>

          {/* Miembros */}
          <div className="members-section">
            <h3>Meet Our Members</h3>
            <div className="members-container">
              {members.length > 0 ? (
                members.map((member, index) => (
                  <div className="member-card" key={index}>
                    <img
                      src={member.image}
                      alt={member.role}
                      className="member-image"
                      width={300}
                      height={300}
                    />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                ))
              ) : (
                <p>No members found.</p>
              )}
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
      <section
        id="contact"
        style={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h2>Contact us!</h2>
        <p>
          If you have any questions, suggestions, or just want to join our
          community, feel free to contact us.
        </p>

        <div>
          <h3>E-mail:</h3>
          <p>
            <a
              href="mailto:mail@sasquad-team.com"
              className="contact-link"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/mail.png"
                alt="Mail Icon"
                className="contact-icon"
                width={30}
                height={30}
              />{" "}
              mail@sasquad-team.com
            </a>
          </p>
        </div>

        <div>
          <h3>Join Our Discord Server:</h3>
          <p>
            Connect with us and other modders in real time!
          </p>
          <p>
            <a
              href="https://discord.gg/n38vCKngvT"
              target="_blank"
              className="contact-link"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/discord.png"
                alt="Discord Icon"
                className="contact-icon"
                width={30}
                height={30}
              />{" "}
              Join our Discord
            </a>
          </p>
        </div>

        <div>
          <h3>Need help or have a complaint?</h3>
          <p>If you have any issues or complaints, please create a ticket on our support page.</p>
          <p>
            <a
              href="https://support.sasquad-team.com"
              target="_blank"
              className="contact-link"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/help.png"
                alt="Support Icon"
                className="contact-icon"
                width={30}
                height={30}
              />{" "}
              Create a Ticket
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
