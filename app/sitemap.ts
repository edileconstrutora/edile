import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { empreendimentos } from "@/lib/empreendimentos";

const SITE_URL = "https://edile.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/empreendimentos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const empreendimentoPages: MetadataRoute.Sitemap = empreendimentos.map((e) => ({
    url: `${SITE_URL}/empreendimentos/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...empreendimentoPages, ...postPages];
}
