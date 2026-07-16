import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { PUPPY_SCHEDULE, VET_DISCLAIMER } from "@/lib/vaccine";

export const metadata: Metadata = {
  title: "2026 Puppy Shot Timeline: Week-by-Week From Birth to 16 Weeks | PupVax Blog",
  description: "Complete 2026 week-by-week puppy shot timeline: what vaccines your puppy needs at 6, 8, 10, 12, 14 and 16 weeks.",
  alternates: { canonical: "https://pupvax.com/blog/puppy-shot-timeline" },
};

const faq = [
  { q: "What shots does a puppy need at 6 weeks?", a: "The first DHPP shot is usually given at 6-8 weeks. This covers distemper, hepatitis, parvovirus and parainfluenza. Some breeders or shelters may give this before you pick up your puppy. Always ask for vaccine records." },
  { q: "When can a puppy go outside after vaccines?", a: "Wait until about one week after the final DHPP shot at 16 weeks before taking your puppy to dog parks, pet stores or other high-traffic dog areas. Controlled socialization with healthy, vaccinated adult dogs in private settings is safe and important during the 8-16 week window." },
  { q: "Why does my puppy need so many shots?", a: "Maternal antibodies from the mother's milk protect newborn puppies but also block vaccines from working. By giving DHPP at 6-8, 10-12 and 14-16 weeks, each booster has a better chance of taking hold as maternal antibodies fade. A single shot cannot guarantee protection." },
  { q: "Is the rabies shot painful for puppies?", a: "It is a standard injection, no more painful than any other vaccine. Most puppies barely notice. Mild soreness at the injection site for 24 hours is normal. The rabies vaccine is legally required and protects against a 100% fatal disease." },
  { q: "How much do puppy shots cost in 2026?", a: "Each DHPP shot typically costs $20-$40, rabies $15-$35, Bordetella $20-$30, leptospirosis and Lyme $25-$40 each. A full puppy series with exam fees usually totals $200-$400. Low-cost clinics and humane societies offer packages for $50-$100 for the complete core series." },
  { q: "What if I miss a puppy booster by a week?", a: "Reschedule as soon as possible. A short delay is not critical. If you miss by more than 2-3 weeks, your vet may recommend restarting the series to ensure protection. Never skip a booster entirely, especially for parvo-susceptible breeds like Rottweilers and Pit Bulls." },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2026 Puppy Shot Timeline: Week-by-Week From Birth to 16 Weeks",
  description: "Complete 2026 week-by-week puppy shot timeline: what vaccines your puppy needs at 6, 8, 10, 12, 14 and 16 weeks.",
  url: "https://pupvax.com/blog/puppy-shot-timeline",
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
          <span className="text-stone-600">Puppy Shot Timeline</span>
        </nav>

        <article className="mt-4 prose prose-stone max-w-none">
          <p className="text-xs text-stone-400">Published June 26, 2026</p>
          <h1>2026 Puppy Shot Timeline: Week-by-Week From Birth to 16 Weeks</h1>

          <p className="text-lg text-stone-600">
            A puppy's first 16 weeks are a whirlwind of vaccines, vet visits and critical socialization.
            Here is the exact week-by-week timeline of every shot your puppy needs in 2026, what each
            one protects against, and what to expect at each visit.
          </p>

          <h2>Why the puppy vaccine series exists</h2>
          <p>
            Newborn puppies get antibodies from their mother's first milk (colostrum) in the first
            24 hours of life. These maternal antibodies are a temporary immune system that protects
            the puppy for the first few weeks. But they are also the reason puppies need multiple
            shots: maternal antibodies block vaccines from working. As these antibodies fade,
            a window opens where the puppy is vulnerable. The vaccine series is timed to catch each
            puppy in that window, whenever it happens.
          </p>
          <p>
            Every puppy loses maternal antibodies at a slightly different rate. Some puppies are
            ready to respond to a vaccine at 6 weeks, others not until 14-16 weeks. By giving
            boosters every 3-4 weeks through 16 weeks, the series ensures that every puppy is
            protected by the end, regardless of when their maternal antibodies faded.
          </p>

          <h2>Week 6-8: The first DHPP shot</h2>
          <p>
            The first vet visit and the first vaccine. DHPP is a combination shot covering four
            diseases: distemper (a neurological virus that is often fatal), hepatitis (canine
            adenovirus that attacks the liver), parvovirus (causes severe bloody diarrhea and is
            a major puppy killer), and parainfluenza (a respiratory virus, part of the kennel
            cough complex). This first shot begins building immunity, though it may not fully
            take hold if maternal antibodies are still high.
          </p>
          <p>
            At this visit, the vet also does a general health check: weight, heart and lungs,
            eyes and ears, checking for hernias or congenital issues. If the puppy came from a
            breeder or shelter, bring any vaccine records you received. The vet will start a
            deworming schedule, as most puppies are born with intestinal worms. A fecal sample
            is often collected to check for parasites.
          </p>

          <h2>Week 8: Bordetella and starting preventives</h2>
          <p>
            Some vets give the second DHPP at 8 weeks. Others wait until 10 weeks. The timing
            depends on the vet's protocol and the puppy's risk factors. If Bordetella (kennel
            cough) is recommended, it is usually given around 8 weeks, especially for puppies
            that will attend daycare, puppy classes or boarding. Bordetella can be an injection,
            nasal spray or oral vaccine.
          </p>
          <p>
            This is also when heartworm prevention and flea/tick prevention typically start.
            Most heartworm preventives are approved for puppies from 8 weeks of age. These are
            usually monthly chewable tablets. Flea and tick prevention also starts at 8 weeks
            in most cases. Your vet will recommend products based on your region and the puppy's
            weight.
          </p>

          <h2>Week 10-12: Second DHPP booster</h2>
          <p>
            The second DHPP booster is given 3-4 weeks after the first. For puppies that received
            their first shot at 6-7 weeks, this falls around 10 weeks. For puppies that started
            at 8 weeks, it falls around 11-12 weeks. By this age, maternal antibodies have faded
            enough in most puppies that the vaccine begins to take hold. The puppy is not yet
            fully protected but is building immunity.
          </p>

          <h2>Week 12: Non-core vaccines begin</h2>
          <p>
            Leptospirosis and Lyme disease vaccines, if recommended, usually begin at 12 weeks.
            Both require a booster 2-4 weeks later. Lepto protects against a bacterial disease
            spread through wildlife urine in standing water. It is recommended for dogs that hike,
            swim, or live in areas with raccoons, rats and other wildlife. Lyme disease is
            recommended in tick-heavy regions, particularly the Northeast, Upper Midwest and
            Pacific Northwest.
          </p>
          <p>
            These are risk-based vaccines. A puppy destined for apartment life in a tick-free
            city may not need either. A puppy going to a rural home with woods and a pond probably
            needs both. Your vet will help you decide based on where you live and your puppy's
            planned lifestyle.
          </p>

          <h2>Week 12-16: Rabies vaccine</h2>
          <p>
            The rabies vaccine is legally required in all 50 states. It is usually given between
            12 and 16 weeks, with 14-16 weeks being most common. This is the one shot you cannot
            skip or delay indefinitely. After the first rabies shot, a booster is due one year
            later, then every 1-3 years depending on state law.
          </p>
          <p>
            Your vet will issue a rabies certificate and a metal tag. Store the certificate safely.
            You will need it to license your dog (required in most cities and counties), for
            boarding, for grooming, and for travel. A lapsed rabies vaccine can result in fines
            and extended quarantine if your dog bites someone.
          </p>

          <h2>Week 14-16: Final DHPP booster</h2>
          <p>
            The third and usually final DHPP booster is given at 14-16 weeks. By this age,
            virtually all puppies have lost their maternal antibodies and the vaccine can take
            full effect. This shot completes the core puppy series and provides durable immunity
            that will carry the puppy until the one-year booster.
          </p>
          <p>
            Some high-risk breeds (Rottweilers, Dobermans, Pit Bulls) may benefit from a fourth
            DHPP booster at 18-20 weeks. This is because these breeds have a documented higher
            susceptibility to parvovirus and may shed maternal antibodies later than other breeds.
            Discuss this with your vet if you have one of these breeds.
          </p>

          <h2>Week 16+: What happens next</h2>
          <p>
            About one week after the final 16-week DHPP shot, the puppy is considered fully
            protected and can safely visit dog parks, pet stores and other public dog spaces.
            The next vet visit is the one-year booster at roughly 12-16 months, where all core
            vaccines are boostered and the schedule transitions to the adult maintenance plan.
          </p>
          <p>
            Between the final puppy shot and the one-year visit, the focus shifts to prevention:
            monthly heartworm medication, monthly flea and tick control, and deworming every 3
            months (more frequently in the first 6 months). Annual wellness visits with basic
            bloodwork become the rhythm for the rest of the dog's adult life.
          </p>
          <p>
            Use the <Link href="/" className="text-amber-700 underline">free 2026 puppy vaccine tracker</Link> on our
            homepage to generate exact dates for your puppy's schedule. Enter the birth date and
            the tool maps out every due date on a calendar. It updates as your puppy grows and
            automatically transitions to the adult schedule after the first year.
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
