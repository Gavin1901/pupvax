import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { VET_DISCLAIMER } from "@/lib/vaccine";

export const metadata: Metadata = {
  title: "The Complete 2026 Dog Vaccine Schedule Guide: Puppy to Senior | PupVax Blog",
  description: "Everything about dog vaccines in 2026: puppy series, adult boosters, senior adjustments, titer testing, and breed-specific considerations.",
  alternates: { canonical: "https://pupvax.com/blog/dog-vaccine-schedule-guide" },
};

const faq = [
  { q: "What is the standard dog vaccine schedule in 2026?", a: "Puppies start DHPP at 6-8 weeks with boosters every 3-4 weeks until 16 weeks, plus rabies at 12-16 weeks. Adults get DHPP every 3 years, rabies every 1-3 years, and optional non-core vaccines annually. The schedule is based on AAHA 2026 Canine Vaccination Guidelines." },
  { q: "How many vaccines does a dog need in its first year?", a: "A puppy needs 3-4 DHPP shots, 1 rabies shot, and potentially 2 leptospirosis shots, 2 Lyme shots, and 1 Bordetella depending on risk factors. That's 5-10 total vet visits for vaccines in the first year alone." },
  { q: "Can my dog skip vaccines after age 10?", a: "Not entirely. Rabies remains legally required. For DHPP, many vets offer titer testing to check existing immunity before giving automatic boosters. Non-core vaccines can often be skipped in homebody seniors. Each vaccine decision should be individualized." },
  { q: "Are 3-year vaccines as effective as annual vaccines?", a: "For DHPP, yes. Challenge studies show protective immunity lasting at least 3 years and often longer. The 3-year DHPP vaccine is the standard for adult dogs. For rabies, both 1-year and 3-year formulations exist and both are effective when given on schedule." },
  { q: "What happens if I adopt an adult dog with no vaccine history?", a: "Your vet will likely treat the dog as unvaccinated: give a DHPP shot now, a booster in 3-4 weeks, and a rabies shot. After that, the standard adult schedule applies. A blood titer test can also check if the dog already has immunity from prior vaccination." },
  { q: "How much does a full year of dog vaccines cost in 2026?", a: "A typical annual vet visit with DHPP or 3-year DHPP, rabies (3-year), Bordetella, leptospirosis, heartworm test and annual exam runs $150-$300 depending on your location. Heartworm prevention adds $60-$180 per year. Low-cost clinics in many cities offer core vaccines for $10-$25 each." },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete 2026 Dog Vaccine Schedule Guide: Puppy to Senior",
  description: "Everything about dog vaccines in 2026: puppy series, adult boosters, senior adjustments, titer testing, and breed-specific considerations.",
  url: "https://pupvax.com/blog/dog-vaccine-schedule-guide",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  author: { "@type": "Organization", name: "PupVax" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function BlogPost() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <nav className="text-xs text-stone-400">
          <Link href="/" className="hover:text-amber-700">Home</Link>{" / "}
          <Link href="/blog" className="hover:text-amber-700">Blog</Link>{" / "}
          <span className="text-stone-600">Dog Vaccine Schedule Guide</span>
        </nav>

        <article className="mt-4 prose prose-stone max-w-none">
          <p className="text-xs text-stone-400">Published June 26, 2026</p>
          <h1>The Complete 2026 Dog Vaccine Schedule Guide: Puppy to Senior</h1>

          <p className="text-lg text-stone-600">
            Every dog needs vaccines. But which ones, when, and how often? This guide covers the
            complete 2026 dog vaccine schedule from the first puppy shot at 6 weeks through the
            senior years at age 10+, based on AAHA and AVMA guidelines.
          </p>

          <h2>The puppy vaccine series (6 to 16 weeks)</h2>
          <p>
            A puppy's vaccine journey starts at 6 to 8 weeks of age. The first shot is DHPP, a
            combination vaccine covering distemper, hepatitis, parvovirus and parainfluenza. This is
            followed by boosters at roughly 10-12 weeks and 14-16 weeks. The reason for the series
            rather than a single shot is maternal antibodies: puppies are born with antibodies from
            their mother's milk that protect them early on but also block vaccines from working.
          </p>
          <p>
            As those maternal antibodies fade over the first few months, each DHPP booster has a
            better chance of taking hold. By 16 weeks, virtually all puppies have lost their maternal
            antibodies and the final DHPP shot provides lasting immunity. Some high-risk breeds like
            Rottweilers, Dobermans and Pit Bulls may benefit from a fourth DHPP booster at 18-20
            weeks due to their documented parvovirus susceptibility.
          </p>
          <p>
            Rabies is given once between 12 and 16 weeks. This is the only vaccine legally required
            in all 50 U.S. states. The vet will issue a rabies certificate and tag; you will need
            these to license your dog and for boarding and travel.
          </p>
          <p>
            Non-core vaccines during puppyhood depend on the dog's planned lifestyle. Bordetella
            can start as early as 8 weeks for puppies that will go to daycare or boarding.
            Leptospirosis and Lyme disease are usually started around 12 weeks, each requiring a
            booster 2-4 weeks later to complete the initial series.
          </p>

          <h2>The one-year booster: transitioning to adulthood</h2>
          <p>
            Around a dog's first birthday, the core vaccines are boostered. This one-year DHPP
            booster locks in the immunity built during the puppy series. The one-year rabies booster
            is also critical: after this, most dogs can switch to a 3-year rabies vaccine depending
            on state law. Non-core vaccines like leptospirosis, Lyme and Bordetella are also
            boostered at this visit if the dog received them as a puppy.
          </p>
          <p>
            This first adult visit is also the time to establish the baseline for ongoing
            prevention. Heartworm prevention should already be in place (started at 8 weeks), but
            the one-year visit includes the first adult heartworm test. Flea and tick prevention
            and deworming schedules are reviewed and adjusted for the dog's adult weight and
            lifestyle.
          </p>

          <h2>Adult maintenance (1 to 7 years)</h2>
          <p>
            For healthy adult dogs, the vaccine schedule settles into a predictable rhythm. DHPP
            every 3 years. Rabies every 1-3 years depending on state law and the vaccine used.
            Bordetella annually (or every 6 months for high-risk dogs that board frequently).
            Leptospirosis annually where risk exists. Lyme disease annually in tick-heavy regions.
          </p>
          <p>
            Monthly preventives continue year-round: heartworm prevention, flea and tick control,
            and deworming every 3 months (unless covered by the heartworm product). An annual
            heartworm test is recommended even for dogs on year-round prevention, as it catches
            rare breakthrough infections and keeps product guarantees valid.
          </p>
          <p>
            Adult dogs should also have an annual wellness exam with basic bloodwork to catch
            early signs of organ dysfunction, tick-borne diseases or other issues that might affect
            future vaccine decisions. A healthy 3-year-old can handle the standard schedule without
            special considerations. The conversation changes as dogs age.
          </p>

          <h2>Senior dogs (7+ years): the case for personalized schedules</h2>
          <p>
            Dogs are considered seniors around age 7, though this varies by breed. Giant breeds
            like Great Danes are seniors by 5-6, while small breeds like Chihuahuas may not be
            seniors until 10-11. For all senior dogs, the blanket vaccine schedule gives way to
            individualized decision-making.
          </p>
          <p>
            The immune system changes with age in a process called immunosenescence. It may respond
            less robustly to vaccines, making boosters less effective. At the same time, senior dogs
            are more likely to have chronic conditions (kidney disease, heart disease, arthritis)
            that make adverse vaccine reactions more dangerous. The calculation changes.
          </p>
          <p>
            This is where antibody titer testing enters the conversation. A titer test is a blood
            test measuring existing antibody levels against distemper, parvovirus and adenovirus.
            If titers are protective, the DHPP booster can be deferred. This reduces the vaccine
            burden on an aging immune system while confirming protection is still present. Titer
            testing costs roughly $50-$150, compared to $20-$40 for the booster itself. For many
            senior dog owners, the peace of mind is worth the cost difference.
          </p>
          <p>
            Rabies remains legally required regardless of age. The 3-year rabies vaccine is
            preferred for seniors to minimize vet visits. For dogs with serious health conditions,
            some states offer medical exemptions from rabies boosters, though this requires
            veterinary documentation and comes with restrictions.
          </p>
          <p>
            Non-core vaccines should be carefully evaluated for each senior dog. A 12-year-old
            Chihuahua that never leaves the apartment does not need Bordetella. A 10-year-old
            Labrador that still swims daily may still need leptospirosis. The decision should be
            based on real exposure risk, not an automatic renewal.
          </p>

          <h2>Breed-specific considerations</h2>
          <p>
            Not all dogs respond to vaccines the same way. Rottweilers, Doberman Pinschers and
            American Pit Bull Terriers have a documented genetic susceptibility to parvovirus,
            making the full DHPP puppy series absolutely critical. Some vets recommend an extra
            DHPP booster at 18-20 weeks for these breeds. Labrador Retrievers and Golden Retrievers
            that swim frequently need leptospirosis, as the bacteria thrives in standing water.
            Australian Shepherds and other herding breeds carry the MDR1 gene mutation that affects
            sensitivity to certain drugs though not to vaccines directly.
          </p>
          <p>
            Our <Link href="/breeds" className="text-amber-700 underline">breed-specific vaccine schedules</Link> cover
            20 popular breeds with detailed health risk profiles, recommended vaccines, dosage
            guidance and age-stage vaccine maps. Use these to prepare for vet conversations, not
            to replace them.
          </p>

          <h2>Using the PupVax tracker for your dog</h2>
          <p>
            The <Link href="/" className="text-amber-700 underline">free 2026 vaccine schedule tool</Link> on our
            homepage builds a personalized timeline from your dog's birth date. Enter the birth date
            and optional breed, and the tool generates every due date: puppy shots, adult boosters,
            heartworm prevention, deworming and flea/tick control. Breed-specific alerts highlight
            vaccines your dog particularly needs. Senior dogs automatically get age-appropriate
            recommendations including titer testing guidance. Everything saves to your browser so
            it's there next time. No account needed.
          </p>
        </article>

        <section className="mt-10">
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

        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          ⚠️ <strong>Medical Disclaimer:</strong> {VET_DISCLAIMER}
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6">
          <Link href="/blog" className="text-sm text-amber-700 hover:underline">← Back to blog</Link>
        </div>
      </div>
    </SiteShell>
  );
}
