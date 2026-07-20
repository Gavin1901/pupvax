import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { TOPICS, PUPPY_SCHEDULE, ADULT_BOOSTERS, PREVENTIVES, VET_DISCLAIMER } from "@/lib/vaccine";

export const metadata: Metadata = {
  title: "2026 Dog Vaccines Explained: Core, Non-Core and the Full Schedule",
  description: "Complete 2026 overview of dog vaccines: core (DHPP, rabies) vs non-core (Bordetella, lepto, Lyme), puppy series, adult boosters, deworming and heartworm",
  alternates: { canonical: "https://pupvax.com/dog-vaccines" },
};

export default function DogVaccines() {
  const core = PUPPY_SCHEDULE.filter((d) => d.category === "Core");
  const nonCore = PUPPY_SCHEDULE.filter((d) => d.category === "Non-core");

  const faq = [
    {
      q: "What are core dog vaccines?",
      a: "Core vaccines are recommended for every dog regardless of lifestyle. They include DHPP (distemper, hepatitis, parvovirus, parainfluenza) and rabies. DHPP is given as a puppy series then every 3 years. Rabies is legally required in all 50 U.S. states, given at 12-16 weeks then every 1-3 years.",
    },
    {
      q: "What are non-core dog vaccines?",
      a: "Non-core vaccines are given based on a dog's lifestyle, location and exposure risk. They include Bordetella (kennel cough, for dogs that board or visit groomers), leptospirosis (for dogs with wildlife/water exposure), and Lyme disease (for dogs in tick-heavy regions). Your vet helps decide which are right for your dog.",
    },
    {
      q: "When does a puppy need its first vaccines?",
      a: "Puppies start DHPP at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks. Rabies is given at 12-16 weeks. Non-core vaccines like Bordetella may start as early as 8 weeks depending on exposure risk.",
    },
    {
      q: "How often do adult dogs need booster shots?",
      a: "DHPP every 3 years, rabies every 1-3 years (per state law), Bordetella annually (or every 6 months for high-risk dogs), leptospirosis annually. Heartworm prevention is monthly year-round, and intestinal deworming is every 3 months for most adult dogs.",
    },
    {
      q: "Do senior dogs still need vaccines?",
      a: "Yes, but the approach may change. Core vaccines continue, but many vets offer titer testing for dogs over 7-10 years old to check existing immunity before giving automatic boosters. Non-core vaccines are evaluated case by case. Rabies remains legally required at any age.",
    },
    {
      q: "How much do dog vaccines cost in 2026?",
      a: "Costs vary by region and clinic. DHPP typically costs $20-$40 per shot. Rabies $15-$35. Non-core vaccines like Bordetella, lepto and Lyme range $20-$40 each. Annual wellness visit with vaccines often runs $100-$250 total. Low-cost vaccine clinics in many cities offer core shots for $10-$25 each.",
    },
    {
      q: "Are there side effects to dog vaccines?",
      a: "Most dogs have no side effects. Mild soreness at the injection site, slight fever or reduced appetite for 24 hours can occur. Serious allergic reactions (facial swelling, vomiting, difficulty breathing) are rare but require immediate veterinary attention. Small and toy breeds may be more sensitive; discuss spacing vaccines with your vet.",
    },
    {
      q: "Can I vaccinate my dog myself?",
      a: "Feed-store vaccines are available but not recommended by veterinarians. Improper storage, handling or administration can render a vaccine ineffective. Most importantly, a rabies vaccine given by anyone other than a licensed veterinarian is not legally recognized in any U.S. state. A home-given rabies shot does not satisfy legal requirements.",
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
        <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">2026 Dog Vaccines Explained</h1>
        <p className="mt-2 text-stone-600">
          Every dog needs core vaccines; non-core vaccines are added based on lifestyle and location.
          Here is the full 2026 picture from the first puppy shot to lifelong prevention, based on
          AAHA and AVMA guidelines.
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Core vaccines (recommended for every dog in 2026)</h2>
          <p className="mt-2 text-sm text-stone-600">
            Core vaccines protect against diseases that are widespread, highly contagious and often fatal.
            AAHA 2026 guidelines recommend these for every dog regardless of lifestyle.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {core.map((d) => (
              <li key={d.id} className="rounded-lg border border-amber-200 bg-white p-3">
                <strong>{d.name}</strong> — {d.note}
              </li>
            ))}
            {ADULT_BOOSTERS.filter((b) => b.category === "Core").map((b) => (
              <li key={b.id} className="rounded-lg border border-amber-200 bg-white p-3">
                <strong>{b.name}</strong> — {b.note}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Non-core vaccines (lifestyle and risk-based)</h2>
          <p className="mt-2 text-sm text-stone-600">
            Non-core vaccines are given based on your dog&apos;s exposure risk. A city apartment dog has
            different needs than a farm dog that hikes, swims and encounters wildlife.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {nonCore.map((d) => (
              <li key={d.id} className="rounded-lg border border-stone-200 bg-white p-3">
                <strong>{d.name}</strong> — {d.note}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Ongoing prevention (year-round)</h2>
          <p className="mt-2 text-sm text-stone-600">
            These are not vaccines but are equally important for keeping your dog healthy.
            Most are given monthly and many can be combined.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {PREVENTIVES.map((p) => (
              <li key={p.id} className="rounded-lg border border-stone-200 bg-white p-3">
                <strong>{p.name}</strong> — {p.note}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">How to use this guide with your vet</h2>
          <p>
            The schedules on PupVax are generalized estimates based on AAHA and AVMA 2026 standard
            guidelines. They give you a solid baseline to discuss with your veterinarian, who knows
            your dog&apos;s individual health history, breed-specific risks and local disease prevalence.
          </p>
          <p>
            Before your next vet visit, use the free vaccine schedule tracker on our homepage to
            generate a personalized timeline for your dog. Bring it to the appointment and go through
            it with your vet: which non-core vaccines make sense for your dog&apos;s lifestyle? Is
            titer testing appropriate? What does your local rabies law require? A prepared owner
            gets better care.
          </p>
        </section>

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

        <section className="mt-10">
          <h2 className="text-lg font-bold text-stone-900">In-depth 2026 vaccine guides</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link href="/puppy-vaccine-schedule-by-age/" className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 hover:border-amber-400 hover:text-amber-700">
              Puppy vaccine schedule by age
            </Link>
            <Link href="/puppy-deworming-schedule/" className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 hover:border-amber-400 hover:text-amber-700">
              Puppy deworming schedule
            </Link>
            {TOPICS.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`} className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 hover:border-amber-400 hover:text-amber-700">
                {t.title}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          ⚠️ <strong>Medical Disclaimer:</strong> {VET_DISCLAIMER}
        </p>
      </div>
    </SiteShell>
  );
}
