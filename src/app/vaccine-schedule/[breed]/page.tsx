import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import {
  BREEDS, BREED_SLUGS, breedBySlug,
  PUPPY_SCHEDULE, ADULT_BOOSTERS, PREVENTIVES, TOPICS, VET_DISCLAIMER,
  SENIOR_VACCINE_GUIDE,
} from "@/lib/vaccine";

export function generateStaticParams() {
  return BREED_SLUGS.map((breed) => ({ breed }));
}

type Props = { params: Promise<{ breed: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { breed: slug } = await params;
  const breed = breedBySlug(slug);
  if (!breed) return {};
  const title = `${breed.name} Vaccine Schedule (2026) — Puppy Shots, Boosters & Health`;
  const url = `https://pupvax.com/vaccine-schedule/${breed.slug}`;
  return {
    title,
    description: `Complete 2026 ${breed.name} vaccine schedule: puppy DHPP series timing, adult boosters, deworming, heartworm prevention, breed-specific health risks (${breed.breedRisks.substring(0, 80)}...), and age-stage vaccine map. Educational only.`,
    alternates: { canonical: url },
    openGraph: { title, url, type: "article" },
  };
}

export default async function BreedPage({ params }: Props) {
  const { breed: slug } = await params;
  const breed = breedBySlug(slug);
  if (!breed) notFound();

  const otherBreeds = BREEDS.filter((b) => b.slug !== breed.slug).slice(0, 8);

  const faq = [
    {
      q: `When does a ${breed.name} puppy need its first shots in 2026?`,
      a: `Like all puppies, a ${breed.name} starts its DHPP series at 6 to 8 weeks of age, with boosters every 3 to 4 weeks until 16 weeks, plus a rabies shot at 12 to 16 weeks. ${breed.vaccineNote} Per AAHA 2026 guidelines, the core schedule for ${breed.name}s is the same as for all breeds, but breed-specific risks affect which non-core vaccines your vet recommends.`,
    },
    {
      q: `How much should an adult ${breed.name} weigh?`,
      a: `An adult ${breed.name} is a ${breed.size.toLowerCase()}-sized breed typically weighing ${breed.weightLbs} with a lifespan of about ${breed.lifespanYears} years. Tracking weight at each vet visit helps your veterinarian calculate correct vaccine and medication doses. ${breed.size === "Small" ? "Small breeds require weight-adjusted vaccine volumes; a full-dose vaccine intended for a 60-lb dog should never be given to a small dog." : breed.size === "Giant" ? "Giant breeds like the " + breed.name + " reach adult weight by 18-24 months. Vaccine doses are typically capped at a standard large-breed volume." : "Medium/large breeds receive standard vaccine doses. Your vet adjusts for your individual dog's weight."}`,
    },
    {
      q: `What health problems are common in ${breed.name}s?`,
      a: `${breed.healthNotes} ${breed.breedRisks} Staying current on core vaccines and prevention is one part of keeping a ${breed.name} healthy. Knowing your breed's risks helps you and your vet decide which non-core vaccines (leptospirosis, Lyme, Bordetella) are worth adding to the core schedule.`,
    },
    {
      q: `How often does an adult ${breed.name} need booster shots?`,
      a: `After the puppy series and a one-year booster at roughly 12-16 months, most adult ${breed.name}s get core DHPP every 3 years and rabies every 1 to 3 years per state law. ${breed.recommendedVaccines} Heartworm prevention is given monthly year-round. Your vet sets the final plan based on your dog's exposure risk and health status.`,
    },
    {
      q: `What vaccines are specifically recommended for ${breed.name}s?`,
      a: `${breed.recommendedVaccines} This recommendation is based on the breed's typical lifestyle and health profile. ${breed.vaccineNote} Always discuss which non-core vaccines make sense for your individual dog with your veterinarian.`,
    },
    {
      q: `How does the ${breed.name}'s size affect vaccine dosing?`,
      a: `${breed.dosageNote} ${breed.size === "Small" ? "Small breeds like the " + breed.name + " need particular attention to weight-based dosing to avoid overdosing. Your veterinarian calculates the exact volume based on your dog's current weight at each visit." : breed.size === "Giant" ? "Giant breeds like the " + breed.name + " receive standard large-breed doses. Rapid puppy growth means weight should be rechecked frequently to keep dosing accurate." : "The " + breed.name + " receives standard doses appropriate for its size category. Your vet adjusts based on your dog's exact weight at each visit."}`,
    },
    {
      q: `What is the complete vaccine timeline for a ${breed.name} across its lifespan?`,
      a: `${breed.lifespanVaccineMap} This is a generalized timeline based on AAHA 2026 guidelines. Your veterinarian will personalize it for your ${breed.name} based on individual health, lifestyle and local disease risk.`,
    },
    {
      q: `When is a ${breed.name} considered a senior dog for vaccine purposes?`,
      a: `${breed.size === "Giant" ? "Giant breeds like the " + breed.name + " are considered seniors by 5-6 years old due to their shorter lifespan of " + breed.lifespanYears + " years." : breed.size === "Large" ? "Large breeds like the " + breed.name + " are considered seniors around 7 years old. With a lifespan of " + breed.lifespanYears + " years, senior wellness becomes a priority in the second half of life." : breed.size === "Medium" ? "Medium breeds like the " + breed.name + " are considered seniors around 7-8 years old. With a lifespan of " + breed.lifespanYears + " years, they have a long senior period where vaccine decisions should be carefully evaluated." : "Small breeds like the " + breed.name + " are generally not considered seniors until 10-11 years old due to their longer lifespan of " + breed.lifespanYears + " years. Their vaccine needs change later than larger breeds."} ${breed.ageStageGuide}`,
    },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <nav className="text-xs text-stone-400">
          <Link href="/" className="hover:text-amber-700">Home</Link>{" / "}
          <Link href="/breeds" className="hover:text-amber-700">Breeds</Link>{" / "}
          <span className="text-stone-600">{breed.name}</span>
        </nav>

        <h1 className="mt-3 text-2xl font-extrabold text-stone-900 sm:text-3xl">
          <span className="mr-2">🐾</span>
          {breed.name} Vaccine Schedule (2026)
        </h1>
        <p className="mt-2 text-stone-600">
          A complete 2026 vaccine, deworming and heartworm schedule for the {breed.name}, a {breed.size.toLowerCase()}-sized
          breed weighing around {breed.weightLbs} and living about {breed.lifespanYears} years. {breed.vaccineNote}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Card label="Size" value={breed.size} />
          <Card label="Adult weight" value={breed.weightLbs} accent />
          <Card label="Lifespan" value={`${breed.lifespanYears} yrs`} />
        </div>

        {/* 品种特有健康风险（反雷同独有内容块） */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">{breed.name} health risks and vaccine implications</h2>
          <div className="mt-3 rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">Breed-specific health concerns</p>
            <p className="mt-1 text-sm text-stone-700">{breed.breedRisks}</p>
          </div>
          <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">Recommended vaccines</p>
            <p className="mt-1 text-sm text-stone-700">{breed.recommendedVaccines}</p>
          </div>
          <div className="mt-3 rounded-xl border border-green-100 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-800">Dosage and administration</p>
            <p className="mt-1 text-sm text-stone-700">{breed.dosageNote}</p>
          </div>
        </section>

        {/* 幼犬疫苗表 */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">{breed.name} puppy vaccine schedule</h2>
          <p className="mt-2 text-sm text-stone-600">
            The core puppy series is the same for every breed. Here is the standard 2026 timeline a {breed.name} puppy follows,
            per AAHA guidelines.
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border border-amber-200 bg-white">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="p-3">Vaccine</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Typical age</th>
                </tr>
              </thead>
              <tbody>
                {PUPPY_SCHEDULE.map((d) => (
                  <tr key={d.id} className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">{d.name}</td>
                    <td className="p-3 text-stone-600">{d.category}</td>
                    <td className="p-3 text-stone-700">{d.ageWeeks} weeks</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 成犬加强针 */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Adult {breed.name} boosters and prevention</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {ADULT_BOOSTERS.map((b) => (
              <li key={b.id} className="rounded-lg border border-stone-200 bg-white p-3">
                <strong>{b.name}</strong> — {b.note}
              </li>
            ))}
            {PREVENTIVES.map((p) => (
              <li key={p.id} className="rounded-lg border border-stone-200 bg-white p-3">
                <strong>{p.name}</strong> — {p.note}
              </li>
            ))}
          </ul>
        </section>

        {/* 全生命期疫苗地图（反雷同独有内容） */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">{breed.name} lifespan vaccine map</h2>
          <p className="mt-2 text-sm text-stone-600">
            How the {breed.name}&apos;s vaccine needs change from puppyhood through the senior years.
            This breed typically lives {breed.lifespanYears} years.
          </p>
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-stone-700">
            {breed.lifespanVaccineMap.split(". ").filter(Boolean).map((sentence, i) => (
              <p key={i} className={i > 0 ? "mt-2" : ""}>{sentence.trim()}.</p>
            ))}
          </div>
        </section>

        {/* 各阶段疫苗指南 */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">{breed.name} age-stage vaccine guide</h2>
          <div className="mt-3 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
            {breed.ageStageGuide.split(". ").filter(Boolean).map((sentence, i) => (
              <p key={i} className={i > 0 ? "mt-2" : ""}>{sentence.trim()}.</p>
            ))}
          </div>
        </section>

        {/* 老年犬疫苗 */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Senior {breed.name} vaccine considerations</h2>
          <p className="mt-2 text-sm text-stone-600">
            As {breed.name}s enter their senior years, vaccine decisions require more individualized judgment.
          </p>
          <ul className="mt-3 space-y-2">
            {SENIOR_VACCINE_GUIDE.map((s) => (
              <li key={s.id} className="rounded-lg border border-stone-200 bg-white p-3 text-sm">
                <strong className="text-stone-800">{s.name}:</strong>{" "}
                <span className="text-amber-700 font-medium">{s.recommendation}</span>
                <p className="mt-1 text-stone-600">{s.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 正文内容 */}
        <section className="mt-8 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">{breed.name} vaccine and health overview</h2>
          <p className="mt-2">
            {breed.healthNotes} None of these conditions are caused or cured by vaccines, but a {breed.name} that
            stays on schedule for core vaccines, heartworm prevention and routine vet visits gives you
            the best chance to catch breed-specific problems early before they become serious.
          </p>
          <p className="mt-2">
            The {breed.name}&apos;s lifestyle directly affects which non-core vaccines make sense.
            {breed.vaccineNote} A dog that rarely leaves a city apartment has different vaccine
            needs than one that hikes off-leash every weekend in tick country.
          </p>
          <p className="mt-2">
            Bring this 2026 schedule to your vet and confirm the timing for your individual {breed.name},
            especially the non-core vaccines which depend on where you live and how your dog spends its
            time. Your veterinarian can also advise whether titer testing (antibody level measurement)
            is appropriate for your {breed.name} as an alternative to automatic boosters, particularly
            once the dog enters its senior years.
          </p>
          <p className="mt-2">
            Want exact dates? Use the{" "}
            <Link href="/" className="text-amber-700 underline">free 2026 vaccine schedule tool</Link>{" "}
            on the homepage: enter your {breed.name}&apos;s birth date, select the breed from the dropdown,
            and the tool lays out every due date with breed-specific reminders and risk alerts.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Frequently asked questions</h2>
          <div className="mt-3 space-y-3">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-amber-200 bg-white p-4">
                <h3 className="font-semibold text-stone-800">{f.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical disclaimer */}
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          ⚠️ <strong>Medical Disclaimer:</strong> {VET_DISCLAIMER}
        </div>

        {/* 交叉链接 */}
        <section className="mt-10 border-t border-stone-200 pt-6">
          <h2 className="text-sm font-semibold text-stone-500">Other breeds</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {otherBreeds.map((b) => (
              <Link key={b.slug} href={`/vaccine-schedule/${b.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-amber-700">
                {b.name}
              </Link>
            ))}
          </div>
          <h2 className="mt-5 text-sm font-semibold text-stone-500">2026 vaccine guides</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-amber-700">
                {t.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

function Card({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? "border-amber-200 bg-amber-50" : "border-stone-200 bg-white"}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{label}</p>
      <p className={`mt-1 text-lg font-bold ${accent ? "text-amber-700" : "text-stone-800"}`}>{value}</p>
    </div>
  );
}
