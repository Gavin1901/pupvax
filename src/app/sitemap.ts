import type { MetadataRoute } from "next";
import { BREED_SLUGS, TOPIC_SLUGS } from "@/lib/vaccine";

const BASE = "https://pupvax.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  // 静态页 + 枢纽页
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/dog-vaccines", priority: 0.8 },
    { path: "/breeds", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.5 },
    { path: "/terms", priority: 0.5 },
  ];

  for (const p of staticPages) {
    urls.push({ url: `${BASE}${p.path}/`, lastModified: now, changeFrequency: "monthly", priority: p.priority });
  }

  // 主题页（含新增的 senior-dog-vaccines, titer-test-dogs）
  for (const t of TOPIC_SLUGS) {
    urls.push({ url: `${BASE}/${t}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }

  // 犬种页
  for (const b of BREED_SLUGS) {
    urls.push({ url: `${BASE}/vaccine-schedule/${b}/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  // Blog页
  const blogSlugs = [
    "puppy-vaccination-schedule",
    "core-vs-non-core-dog-vaccines",
    "how-often-do-adult-dogs-need-vaccines",
  ];
  for (const slug of blogSlugs) {
    urls.push({ url: `${BASE}/blog/${slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  return urls;
}
