// src/app/newswire/[slug]/generateStaticParams.ts
export async function generateStaticParams() {
    const res = await fetch("http://sasquad-team.com/database/adminstrator/security/newswire/getAllSlugs.php");
    const slugs: string[] = await res.json();
    return slugs.map((slug) => ({ slug }));
  }
  