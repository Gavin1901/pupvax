import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { TOPIC_SLUGS, topicBySlug, TOPICS, BREEDS, VET_DISCLAIMER } from "@/lib/vaccine";

export function generateStaticParams() {
  return TOPIC_SLUGS.map((topic) => ({ topic }));
}

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return {};
  const url = `https://pupvax.com/${topic.slug}`;
  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: topic.metaTitle, url, type: "article" },
  };
}

export default async function TopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  const otherTopics = TOPICS.filter((t) => t.slug !== topic.slug);
  const someBreeds = BREEDS.slice(0, 8);

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.metaTitle,
    description: topic.metaDescription,
    url: `https://pupvax.com/${topic.slug}`,
    datePublished: "2026-01-01",
    dateModified: "2026-06-26",
    author: { "@type": "Organization", name: "PupVax" },
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <nav className="text-xs text-stone-400">
          <Link href="/" className="hover:text-amber-700">Home</Link>{" / "}
          <Link href="/dog-vaccines" className="hover:text-amber-700">Dog Vaccines</Link>{" / "}
          <span className="text-stone-600">{topic.title}</span>
        </nav>

        <h1 className="mt-3 text-2xl font-extrabold text-stone-900 sm:text-3xl">{topic.title}</h1>
        <p className="mt-2 text-stone-600">{topic.intro}</p>

        <section className="mt-6 prose prose-stone max-w-none text-stone-600">
          {topic.body.map((p, i) => (
            <p key={i} className="mt-3">{p}</p>
          ))}
        </section>

        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Want exact dates for your own dog? Use the{" "}
          <Link href="/" className="font-semibold underline">free 2026 vaccine schedule tool</Link>{" "}
          on the homepage. Enter a birth date and breed to get a personalized timeline with reminders.
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Frequently asked questions</h2>
          <div className="mt-3 space-y-3">
            {topic.faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-amber-200 bg-white p-4">
                <h3 className="font-semibold text-stone-800">{f.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          ⚠️ <strong>Medical Disclaimer:</strong> {VET_DISCLAIMER}
        </div>

        <section className="mt-10 border-t border-stone-200 pt-6">
          <h2 className="text-sm font-semibold text-stone-500">More 2026 vaccine guides</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {otherTopics.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-amber-700">
                {t.title}
              </Link>
            ))}
          </div>
          <h2 className="mt-5 text-sm font-semibold text-stone-500">Vaccine schedules by breed</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {someBreeds.map((b) => (
              <Link key={b.slug} href={`/vaccine-schedule/${b.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-amber-700">
                {b.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
