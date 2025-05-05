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

export const metadata: Metadata = {
  title: "SASquad Team",
  description: "SASquad Team is a passionate group of modders who like to create new adventures.",
  // Open Graph Metadatos
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
  // Metadatos de Twitter
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
