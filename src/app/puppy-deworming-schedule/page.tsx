import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Puppy Deworming Schedule: 2 Weeks to 6 Months",
  description:
    "Follow a vet-guided puppy deworming schedule from 2 weeks to 6 months, with a simple timeline, fecal-testing checklist and year-round parasite-control guidance.",
  alternates: { canonical: "https://pupvax.com/puppy-deworming-schedule/" },
};

const rows = [
  ["2 weeks", "Begin veterinarian-selected deworming treatment."],
  ["4, 6 and 8 weeks", "Repeat treatment about every 2 weeks while your puppy is growing quickly."],
  ["2 to 6 months", "Move to monthly broad-spectrum parasite control when the product label and your veterinarian allow."],
  ["After 6 months", "Continue year-round prevention and fecal testing based on lifestyle, location and exposure risk."],
];

const faqs = [
  {
    q: "When should puppies start deworming?",
    a: "CAPC and AAHA guidance supports starting at about 2 weeks of age and repeating every 2 weeks until regular broad-spectrum parasite control begins. Your veterinarian must choose the product and dose.",
  },
  {
    q: "How often should a puppy be dewormed?",
    a: "A common veterinary schedule is every 2 weeks early in life, then monthly through 6 months when year-round broad-spectrum control is not already in place. The exact plan depends on the puppy, product label and local parasite risk.",
  },
  {
    q: "Does a negative stool test mean my puppy has no worms?",
    a: "Not always. Some infections may be too early or light to detect on one test. CAPC recommends multiple fecal examinations during a puppy's first year, with the frequency set by a veterinarian.",
  },
  {
    q: "Is deworming the same as heartworm prevention?",
    a: "No. Heartworm prevention and intestinal-worm control are different jobs, although some monthly products cover both. Confirm the parasites listed on your puppy's product with your veterinarian.",
  },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <nav className="text-sm text-slate-500"><Link href="/">PupVax</Link> / Deworming schedule</nav>
        <h1 className="mt-4 text-4xl font-extrabold">Puppy Deworming Schedule: 2 Weeks to 6 Months</h1>
        <p className="mt-4 text-lg text-slate-600">
          Puppies can acquire intestinal parasites before birth, while nursing or from contaminated soil and stool. Use this age-by-age timeline to prepare for a conversation with your veterinarian, not to select or dose medication yourself.
        </p>

        <div className="mt-8 space-y-3">
          {rows.map(([age, action]) => (
            <div key={age} className="rounded-xl border p-5">
              <h2 className="font-bold">{age}</h2>
              <p className="mt-1 text-slate-600">{action}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-2xl bg-amber-50 p-6">
          <h2 className="text-2xl font-bold">Why the schedule starts so early</h2>
          <p className="mt-3 text-slate-700">
            Roundworms and hookworms are common in young puppies. Early, repeated treatment helps protect the puppy and reduces parasite eggs and larvae entering the home or yard. Some dog parasites can also infect people, so prompt stool cleanup and handwashing matter.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What to track for your veterinarian</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Medication name, active ingredient and exact date given</li>
            <li>Body weight before every dose</li>
            <li>Fecal test dates and results</li>
            <li>Vomiting, diarrhea, a pot belly, pale gums or poor weight gain</li>
            <li>Monthly heartworm, flea and tick prevention</li>
            <li>Exposure to dog parks, wildlife, raw meat or shared yards</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Puppy deworming questions</h2>
          <div className="mt-4 space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-bold text-slate-900">{q}</h3>
                <p className="mt-1 text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t pt-6 text-sm text-slate-600">
          <h2 className="font-bold text-slate-900">Veterinary sources</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><a className="text-emerald-700 underline" href="https://capcvet.org/guidelines/general-guidelines/" target="_blank" rel="noreferrer">Companion Animal Parasite Council general guidelines</a></li>
            <li><a className="text-emerald-700 underline" href="https://capcvet.org/guidelines/ascarid/" target="_blank" rel="noreferrer">CAPC ascarid guidance</a></li>
            <li><a className="text-emerald-700 underline" href="https://www.aaha.org/resources/life-stage-canine-2019/parasite-control/" target="_blank" rel="noreferrer">AAHA canine parasite-control guidance</a></li>
          </ul>
        </section>

        <p className="mt-8 text-sm font-medium text-rose-700">
          Educational only. Seek veterinary care promptly for vomiting, bloody diarrhea, lethargy, pale gums, a swollen belly or poor weight gain. Never give a dewormer or calculate a dose without veterinary guidance.
        </p>
        <Link href="/" className="mt-5 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Build a complete puppy schedule</Link>
      </main>
    </SiteShell>
  );
}
