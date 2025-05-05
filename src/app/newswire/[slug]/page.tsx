import { notFound } from "next/navigation";
import AnnouncementClient from "@/app/components/announcementClient";

interface Announcement {
  slug: string;
  title: string;
  description: string;
  images: string[];
  video_url: string;
  author: string;
  created_at: string;
}

async function getAnnouncement(slug: string): Promise<Announcement | null> {
  try {
    const res = await fetch(
      `http://sasquad-team.com/database/adminstrator/security/newswire/getAnnouncementBySlug.php?slug=${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch announcement");
    return await res.json();
  } catch (error) {
    console.error("Error fetching announcement:", error);
    return null;
  }
}

// Tipar explícitamente el tipo de las props
interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const announcement = await getAnnouncement(params.slug);

  if (!announcement) {
    // Redirige a la página 404 oficial
    notFound();
  }

  return <AnnouncementClient announcement={announcement} />;
}
