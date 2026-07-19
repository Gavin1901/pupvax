import type { MetadataRoute } from "next";
import { BREED_SLUGS, TOPIC_SLUGS } from "@/lib/vaccine";
import { posts } from "@/app/blog/posts";
import { competitors } from "@/app/vs/_data";

const BASE = "https://pupvax.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/dog-vaccines", priority: 0.85 },
    { path: "/puppy-vaccine-schedule-by-age", priority: 0.85 },
    { path: "/puppy-deworming-schedule", priority: 0.8 },
    { path: "/breeds", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/vs", priority: 0.6 },
    { path: "/about", priority: 0.4 },
    { path: "/contact", priority: 0.4 },
    { path: "/privacy-policy", priority: 0.5 },
    { path: "/terms", priority: 0.5 },
  ];

  for (const p of staticPages) {
    urls.push({ url: `${BASE}${p.path}/`, lastModified: now, changeFrequency: "monthly", priority: p.priority });
  }

  for (const t of TOPIC_SLUGS) {
    urls.push({ url: `${BASE}/${t}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }

  for (const b of BREED_SLUGS) {
    urls.push({ url: `${BASE}/vaccine-schedule/${b}/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  for (const post of posts) {
    urls.push({ url: `${BASE}/blog/${post.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  const staticBlogs = ["/blog/dog-vaccine-schedule-guide", "/blog/puppy-shot-timeline", "/blog/senior-dog-health-vaccines"];
  for (const path of staticBlogs) {
    urls.push({ url: `${BASE}${path}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  for (const competitor of competitors) {
    urls.push({ url: `${BASE}/vs/${competitor.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 });
  }

  return urls;
}
