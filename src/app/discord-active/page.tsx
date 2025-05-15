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
