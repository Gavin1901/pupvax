import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { VET_DISCLAIMER } from "@/lib/vaccine";

export const metadata: Metadata = {
  title: "Senior Dog Vaccines in 2026: Why Age Changes Everything | PupVax Blog",
  description: "Complete 2026 guide to vaccines for dogs over 7. Titer testing explained, which vaccines to continue vs skip, managing chronic conditions and vaccine",
  alternates: { canonical: "https://pupvax.com/blog/senior-dog-health-vaccines" },
};

const faq = [
  { q: "At what age is a dog considered senior for vaccines?", a: "Generally 7 years old, but it varies by breed. Giant breeds (Great Danes, Mastiffs) are seniors by 5-6, while small breeds (Chihuahuas, Toy Poodles) may not be seniors until 10-11. Your vet determines senior status based on breed, size and overall health." },
  { q: "Can I stop vaccinating my senior dog?", a: "You cannot stop rabies vaccination as it is legally required at any age. For DHPP, many vets offer titer testing as an alternative to automatic boosters. Non-core vaccines can often be skipped if the dog's lifestyle no longer warrants them. Never stop prevention (heartworm, flea/tick) as seniors tolerate treatment poorly." },
  { q: "What is titer testing and is it worth it for my senior dog?", a: "A titer test measures antibody levels in the blood against distemper, parvovirus and adenovirus. If levels are protective, the DHPP booster can be deferred. For senior dogs, this reduces the vaccine burden on an aging immune system. It costs $50-$150 vs $20-$40 for the booster. For many owners, confirming immunity is worth the cost." },
  { q: "Are vaccines more dangerous for older dogs?", a: "Adverse vaccine reactions are slightly more common in dogs with existing health conditions, but the absolute risk remains very low. The bigger concern is that senior dogs with chronic kidney, heart or immune-mediated disease may not respond as well to vaccines (immunosenescence), making titer testing more valuable." },
  { q: "Does my senior dog still need heartworm prevention?", a: "Absolutely. Senior dogs tolerate heartworm treatment extremely poorly. The strict crate rest required during treatment is harder on arthritic joints, and the treatment drugs are riskier for dogs with compromised organ function. Prevention is more important for seniors than for young dogs." },
  { q: "How often should a senior dog see the vet?", a: "Twice a year is recommended. A senior wellness exam every 6 months with bloodwork (CBC, chemistry panel, urinalysis) catches age-related diseases early when they are more manageable. This is separate from vaccine visits and allows your vet to adjust the vaccine plan as your dog's health changes." },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Senior Dog Vaccines in 2026: Why Age Changes Everything",
  description: "Complete 2026 guide to vaccines for dogs over 7. Titer testing, which vaccines to continue, managing chronic conditions and vaccine safety in seniors.",
  url: "https://pupvax.com/blog/senior-dog-health-vaccines",
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
          <span className="text-stone-600">Senior Dog Vaccines</span>
        </nav>

        <article className="mt-4 prose prose-stone max-w-none">
          <p className="text-xs text-stone-400">Published June 26, 2026</p>
          <h1>Senior Dog Vaccines in 2026: Why Age Changes Everything</h1>

          <p className="text-lg text-stone-600">
            Your dog just turned seven. The same vaccine schedule you have followed for years suddenly
            needs a second look. Here is why senior dogs need a different approach to vaccines in 2026,
            and exactly how to make the right decisions for your older companion.
          </p>

          <h2>What changes at age 7</h2>
          <p>
            Seven is the generally accepted threshold where dogs enter their senior years, though
            this varies dramatically by breed and size. A Great Dane is geriatric at 7, while a
            Chihuahua at 7 is barely middle-aged. Regardless of the exact number, what changes
            inside the body is real: the immune system undergoes immunosenescence, a gradual decline
            in immune function that affects how dogs respond to vaccines and infections.
          </p>
          <p>
            An aging immune system may not produce as robust an antibody response to a booster shot,
            meaning the vaccine might be less effective. At the same time, older dogs accumulate
            chronic conditions: kidney values creep up, heart murmurs develop, arthritis sets in.
            These conditions make adverse vaccine reactions slightly more consequential. A mild fever
            or reduced appetite for 24 hours is nothing for a healthy 3-year-old; for a 10-year-old
            with early kidney disease, any systemic stress warrants caution.
          </p>
          <p>
            The blanket approach of "give every vaccine on schedule" gives way to a more thoughtful
            conversation: which vaccines does this specific dog actually need, given its age, health
            status and current lifestyle? The answer looks different for every senior dog.
          </p>

          <h2>Titer testing: the game-changer for senior dogs</h2>
          <p>
            Antibody titer testing is the single most useful tool for senior dog vaccine decisions.
            A titer test is a blood draw that measures circulating antibody levels against the three
            core viruses: distemper, parvovirus and adenovirus (hepatitis). A positive (protective)
            titer means the dog still has immunity from previous vaccination. The DHPP booster can
            be deferred, sometimes for years.
          </p>
          <p>
            This is particularly valuable for senior dogs that have received regular DHPP boosters
            throughout their adult lives. These dogs often maintain protective antibody levels for
            5-7+ years after a single booster, far beyond the standard 3-year interval. A titer
            test confirms immunity is present without giving a booster the dog might not need.
          </p>
          <p>
            The AAHA 2022 Canine Vaccination Guidelines (still current in 2026) endorse titer
            testing as a valid alternative to automatic boosters. The test costs roughly $50-$150
            at most veterinary clinics, compared to $20-$40 for the DHPP booster itself. The value
            proposition is clearer for seniors: paying an extra $30-$110 to potentially avoid an
            unnecessary medical intervention in a dog with aging organs.
          </p>
          <p>
            Titer testing has limitations. It only measures circulating antibodies, not cellular
            immunity. A negative titer does not necessarily mean the dog is unprotected, but it
            does mean a booster is recommended. Titers are not legally accepted in place of rabies
            vaccination in any U.S. state. And they cannot predict protection against non-core
            diseases like leptospirosis or Lyme, which work through different immune mechanisms.
          </p>

          <h2>Rabies: the non-negotiable</h2>
          <p>
            Rabies vaccination remains legally required regardless of age in all 50 states. There
            is no titer-based exemption from rabies vaccination for domestic dogs. The 3-year
            rabies vaccine is strongly preferred for seniors over the annual version, as it reduces
            vet visits and handling stress.
          </p>
          <p>
            For senior dogs with serious, documented health conditions, some states allow a medical
            exemption from rabies boosters. This requires a licensed veterinarian to certify that
            the vaccine would endanger the dog's health more than the rabies risk warrants. Exempt
            dogs face restrictions: they cannot be licensed normally, may have limited boarding
            options, and face extended quarantine (up to 6 months) if they bite someone. Medical
            exemption is a serious decision, not a convenience.
          </p>

          <h2>Non-core vaccines: the lifestyle audit</h2>
          <p>
            This is where age makes the biggest difference in vaccine decisions. A 10-year-old
            Labrador that still swims in the pond every day may genuinely need leptospirosis.
            A 12-year-old Shih Tzu that gets carried to the groomer and otherwise stays indoors
            almost certainly does not need Bordetella. The question is not "does my dog need this
            vaccine?" but "does my dog's current lifestyle create enough risk to justify this
            vaccine?"
          </p>
          <p>
            For most senior dogs, the lifestyle audit reveals that several non-core vaccines can
            be dropped. Dogs that no longer go to daycare, boarding, dog parks or group training
            classes can usually skip Bordetella. Lyme disease vaccination may be unnecessary if
            tick exposure is well-controlled with preventives. Lepto is the hardest call: if a
            senior dog still has outdoor water exposure, lepto may still be worth continuing
            because kidney damage from leptospirosis is especially dangerous in older dogs.
          </p>

          <h2>Prevention becomes more important, not less</h2>
          <p>
            While vaccines may be reduced or deferred, prevention must continue. Heartworm
            prevention is more critical for seniors than for any other age group. Treatment
            for an active heartworm infection in a senior dog is grueling: the arsenic-based
            drug used to kill adult heartworms is hard on every organ system, and the strict
            crate rest required for 1-3 months after treatment is difficult for arthritic dogs
            and potentially dangerous for dogs with heart conditions. A single missed monthly
            dose has higher stakes for a 12-year-old than a 2-year-old.
          </p>
          <p>
            Flea and tick prevention also remains essential. Senior dogs with compromised immune
            systems are more vulnerable to tick-borne diseases like Lyme, ehrlichiosis and
            anaplasmosis. Flea infestations cause stress and skin damage that heal more slowly
            in older dogs. These preventives are not optional for seniors; they are baseline care.
          </p>

          <h2>The twice-yearly vet visit</h2>
          <p>
            For senior dogs, the annual vet visit should become a semi-annual visit. A wellness
            exam every 6 months with bloodwork (complete blood count, chemistry panel, urinalysis)
            establishes trends that catch disease early. Kidney values that are high-normal today
            versus normal six months ago tell a story that a single annual snapshot misses.
          </p>
          <p>
            These semi-annual visits are the right setting for vaccine decisions. Your vet has
            fresh bloodwork in hand and can see how your dog is aging. A conversation about which
            vaccines are due and whether titer testing makes sense should be part of every senior
            wellness visit, not a default assumption.
          </p>

          <h2>Using PupVax for your senior dog</h2>
          <p>
            The <Link href="/" className="text-amber-700 underline">free 2026 vaccine tracker</Link> automatically
            detects when a dog is over 7 years old and shows senior-specific recommendations,
            including titer testing guidance and which non-core vaccines to reconsider. Our
            dedicated <Link href="/senior-dog-vaccines" className="text-amber-700 underline">Senior Dog Vaccine Guide</Link>{" "}
            covers the topic in depth with breed-specific senior timelines. For breed-specific
            senior considerations, visit our{" "}
            <Link href="/breeds" className="text-amber-700 underline">breed pages</Link> — each one includes
            a senior section tailored to that breed's typical lifespan and age-related risks.
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
