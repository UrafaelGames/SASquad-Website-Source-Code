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

import React from "react";

const DiscordActive = () => {
  return (
    <section className="discord-actives">
      <h2>Active discord members</h2>
      <iframe
        src="https://discord.com/widget?id=1051626712376545300&theme=dark"
        width="350"
        height="500"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </section>
  );
};

export default DiscordActive;
