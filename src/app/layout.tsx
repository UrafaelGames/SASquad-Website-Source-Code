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
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChangelogLayer from "./changelogLayer/page";
import AnnouncementsLayer from "./announcementsLayer/page";
import CookieBanner from "./cookiesBanner/page";

export const metadata: Metadata = {
  title: "SASquad Team",
  description: "SASquad Team is a passionate group of modders who like to create new adventures.",
  openGraph: {
    title: "SASquad Team",
    description: "Welcome to our website, where we, SASquad publish our projects. We are a passionate group that likes to create new adventures.",
    url: "https://sasquad-team.com",
    siteName: "SASquad Team",
    images: [
      {
        url: "https://sasquad-team.com/images/SASquad_Logo_bg.png?v=2",
        width: 1200,
        height: 630,
        alt: "SASquad Team Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SASquad Team",
    description: "Welcome to our website, where we, SASquad publish our projects. We are a passionate group that likes to create new adventures.",
    images: [
      {
        url: "https://sasquad-team.com/images/SASquad_Logo_x.png?v=2",
        width: 1200,
        height: 630,
        alt: "SASquad Team Logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <AnnouncementsLayer />
        <ChangelogLayer />
        <CookieBanner />

        {/* Chatbase Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) { window.chatbase.q = [] }
      window.chatbase.q.push(arguments)
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") { return target.q }
        return (...args) => target(prop, ...args)
      }
    })
  }
  const onLoad = function() {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "WSvtbdCL5NV5SLNWlZzsF"; 
    script.domain = "www.chatbase.co";
    document.body.appendChild(script)
  };
  if (document.readyState === "complete") {
    onLoad()
  } else {
    window.addEventListener("load", onLoad)
  }
})();
          `,
          }}
        />
      </body>
    </html>
  );
}
