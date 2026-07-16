export type FAQ = { q: string; a: string };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  bodyHtml: string;
  faq: FAQ[];
};

export const posts: BlogPost[] = [
  {
    slug: "puppy-vaccination-schedule",
    title: "Puppy Vaccination Schedule: A Complete 2026 Guide",
    description:
      "The complete 2026 puppy vaccination schedule by week: DHPP, rabies, bordetella and lepto, plus booster timing and a free tracker to stay on time.",
    date: "2026-06-27",
    readingTime: "7 min read",
    bodyHtml: `<p>Bringing home a new puppy is exciting, but the first few months come with a tight vaccination timeline that protects your dog from deadly, preventable diseases. This 2026 guide walks through exactly which shots a puppy needs, when each one is due, and how to keep the whole series on track using a free <a href="/">vaccine tracker</a>.</p>
<p><strong>Note:</strong> This is general educational information, not veterinary advice. Vaccine timing varies by region, lifestyle and local disease risk. Always confirm your puppy's exact schedule with your veterinarian.</p>

<h2>Why puppies need a series of shots</h2>
<p>Newborn puppies get temporary protection from antibodies in their mother's milk. That protection fades over the first several weeks, but the exact timing differs for every puppy and cannot be measured at home. While maternal antibodies are still present, they can block a vaccine from working. To cover this unpredictable window, vets give a <strong>series</strong> of vaccines spaced a few weeks apart rather than a single shot.</p>
<p>This is why skipping or stretching out doses is risky. A puppy may look fully vaccinated after one shot but still be unprotected if maternal antibodies blocked that dose.</p>

<h2>The week-by-week puppy vaccination schedule</h2>

<h3>6 to 8 weeks</h3>
<p>The first round usually starts at <strong>6 to 8 weeks</strong> of age. The core vaccine given here is <strong>DHPP</strong>, which protects against distemper, hepatitis (adenovirus), parvovirus and parainfluenza. Parvovirus alone is a leading killer of unvaccinated puppies, so this first dose matters even though boosters are still required.</p>
<p>Depending on your area and your puppy's exposure, your vet may also start <strong>bordetella</strong> (kennel cough) here, especially before puppy classes, grooming or boarding.</p>

<h3>10 to 12 weeks</h3>
<p>The second <strong>DHPP</strong> booster is typically given at <strong>10 to 12 weeks</strong>. This is also the common window to begin <strong>leptospirosis</strong> coverage if your puppy will be around standing water, wildlife, rural areas or urban rodents. Leptospirosis is bacterial, can spread to humans, and usually requires two initial doses two to four weeks apart.</p>

<h3>14 to 16 weeks</h3>
<p>The final puppy <strong>DHPP</strong> booster lands at <strong>14 to 16 weeks</strong>. This last dose is critical because it is the one most likely to take effect after maternal antibodies have fully faded. <strong>Rabies</strong> is also given around this stage, usually between 12 and 16 weeks, and is legally required in most places.</p>

<h2>Quick reference timeline</h2>
<ul>
<li><strong>6 to 8 weeks:</strong> DHPP (dose 1), optional bordetella</li>
<li><strong>10 to 12 weeks:</strong> DHPP (dose 2), leptospirosis (dose 1, lifestyle dependent)</li>
<li><strong>14 to 16 weeks:</strong> DHPP (dose 3), rabies, leptospirosis (dose 2)</li>
<li><strong>12 to 16 months:</strong> First adult boosters for DHPP and rabies</li>
</ul>

<h2>Non-core and lifestyle vaccines</h2>
<p>Beyond the core series, your vet may recommend extras based on where you live and how your puppy will spend its time. Common non-core options include bordetella, leptospirosis, canine influenza, and Lyme disease vaccine in tick-heavy regions. These are not one-size-fits-all, which is why an honest conversation about your puppy's daily life matters more than a generic checklist.</p>

<h2>What about boosters after the puppy series?</h2>
<p>Finishing the puppy series is not the end. Most puppies need a booster roughly <strong>one year</strong> after the final shots, around 12 to 16 months of age. After that, core vaccines like DHPP and rabies often move to a one to three year schedule depending on the product and local law. Lifestyle vaccines such as bordetella and lepto are usually annual.</p>

<h2>How to avoid missing a dose</h2>
<p>Because the puppy schedule is dense and the gaps between doses are short, missed appointments are the most common reason puppies fall behind. A few habits that help:</p>
<ol>
<li>Record the exact date of every shot, not just the month.</li>
<li>Schedule the next visit before leaving the clinic.</li>
<li>Set reminders a few days early so you have time to book.</li>
<li>Keep one running record instead of scattered paper receipts.</li>
</ol>
<p>This is exactly what a free <a href="/">vaccine tracker</a> is built for. You enter your puppy's birth date and shots, and it maps out the remaining schedule with reminders so nothing slips. If you ever change vets, move, or board your dog, you have one clean record ready to share.</p>

<h2>Side effects and safety</h2>
<p>Most puppies handle vaccines well. Mild soreness, low energy or a small lump at the injection site for a day or two is normal. Serious reactions are rare but possible, so watch for facial swelling, hives, vomiting or trouble breathing and contact your vet right away if they appear. Scheduling visits earlier in the day gives you time to observe your puppy afterward.</p>

<h2>The bottom line</h2>
<p>A puppy's first four months set up a lifetime of protection. Start the core DHPP series at 6 to 8 weeks, finish it by 14 to 16 weeks, add rabies and any lifestyle vaccines your vet recommends, then plan the one-year boosters. Stay organized, confirm every date with your vet, and let a tracker carry the schedule for you.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "When should my puppy get its first shots?",
        a: "The core DHPP series usually starts at 6 to 8 weeks of age. Your vet may also begin bordetella around the same time depending on exposure.",
      },
      {
        q: "How many rounds of puppy shots are needed?",
        a: "Most puppies get three DHPP rounds, spaced two to four weeks apart, finishing at 14 to 16 weeks. Rabies is typically given between 12 and 16 weeks.",
      },
      {
        q: "Why does a puppy need multiple doses instead of one?",
        a: "Antibodies from the mother can block a vaccine, and the timing they fade differs per puppy. A spaced series covers that unpredictable window.",
      },
      {
        q: "When is the rabies vaccine given?",
        a: "Rabies is usually given between 12 and 16 weeks of age and is legally required in most places, with a booster about one year later.",
      },
      {
        q: "What happens if I miss a dose?",
        a: "A missed or delayed dose can leave a puppy unprotected. Ask your vet promptly, since the series may need to be resumed or restarted depending on the gap.",
      },
      {
        q: "When do puppies need their first adult booster?",
        a: "Most puppies get a booster around 12 to 16 months of age, after which core vaccines often move to a one to three year schedule.",
      },
      {
        q: "Are puppy vaccines safe?",
        a: "Most puppies tolerate them well with mild, short-lived soreness or tiredness. Serious reactions are rare. Contact your vet if you see swelling, hives or breathing trouble.",
      },
    ],
  },
  {
    slug: "core-vs-non-core-dog-vaccines",
    title: "Core vs Non-Core Dog Vaccines Explained (2026)",
    description:
      "Understand core vs non-core dog vaccines in 2026: what DHPP and rabies cover, when bordetella, lepto and Lyme make sense, and how to decide with your vet.",
    date: "2026-06-27",
    readingTime: "6 min read",
    bodyHtml: `<p>Not every dog needs every vaccine. Veterinarians sort canine vaccines into two groups: <strong>core</strong> vaccines that nearly every dog should receive, and <strong>non-core</strong> vaccines recommended based on a dog's lifestyle, location and risk. Understanding the difference helps you make smarter choices and avoid both under-protecting and over-vaccinating your dog.</p>
<p><strong>Note:</strong> This article is general educational information, not veterinary advice. Your dog's ideal vaccine plan depends on local disease risk and individual factors. Always decide with your veterinarian.</p>

<h2>What "core" actually means</h2>
<p>Core vaccines protect against diseases that are widespread, highly contagious, dangerous to dogs, transmissible to humans, or all of the above. Because the risk is universal and the consequences are severe, these are recommended for essentially every dog regardless of where it lives or how it spends its days.</p>

<h3>The core dog vaccines</h3>
<ul>
<li><strong>DHPP:</strong> A combination shot covering distemper, hepatitis (adenovirus), parvovirus and parainfluenza. Parvo and distemper in particular are often fatal in unvaccinated dogs.</li>
<li><strong>Rabies:</strong> Almost always legally required. Rabies is fatal and can spread to humans, which is why it is regulated by law rather than left to preference.</li>
</ul>
<p>These are the non-negotiables. Skipping core vaccines exposes a dog to diseases that are common, deadly, and in the case of rabies, a public health threat.</p>

<h2>What "non-core" means</h2>
<p>Non-core vaccines are not optional in a careless sense. They are <strong>situational</strong>. Whether your dog needs them depends on real exposure risk: where you live, where your dog goes, and who it interacts with. A city apartment dog that never boards has a very different risk profile than a rural hunting dog or a daily daycare attendee.</p>

<h3>Common non-core vaccines</h3>
<ul>
<li><strong>Bordetella (kennel cough):</strong> Recommended for dogs that board, attend daycare, visit groomers, go to training classes, or socialize with many other dogs. Often required by boarding facilities.</li>
<li><strong>Leptospirosis:</strong> A bacterial disease spread through water and wildlife or rodent urine. Recommended for dogs exposed to standing water, rural areas, wildlife or urban rodents. It can also infect humans. Many vets now consider it close to core in high-risk regions.</li>
<li><strong>Canine influenza:</strong> Recommended for highly social dogs in areas with active outbreaks or for dogs that travel and board frequently.</li>
<li><strong>Lyme disease:</strong> Recommended for dogs in tick-heavy regions or those that hike, hunt or spend time in wooded and grassy areas.</li>
</ul>

<h2>How vets decide what your dog needs</h2>
<p>A good vaccine conversation is really a lifestyle interview. Expect questions like: Does your dog board or go to daycare? Do you hike or camp together? Is there standing water or wildlife nearby? Do you travel with your dog? Are ticks common where you live? The answers shape which non-core vaccines make sense.</p>
<p>This is why two perfectly healthy dogs on the same street can have different, equally correct vaccine plans. Core is shared; non-core is personalized.</p>

<h2>Core vs non-core at a glance</h2>
<ol>
<li><strong>Core (almost every dog):</strong> DHPP and rabies.</li>
<li><strong>Non-core (lifestyle dependent):</strong> Bordetella, leptospirosis, canine influenza, Lyme.</li>
</ol>

<h2>Does non-core mean less important?</h2>
<p>No. For the right dog, a non-core vaccine can be just as important as a core one. A dog that boards weekly genuinely needs bordetella, and a dog living near ponds and wildlife is at real risk for leptospirosis. "Non-core" describes <strong>who</strong> needs it, not how serious the disease is.</p>

<h2>Booster timing differs too</h2>
<p>Core vaccines like DHPP and rabies often move to a one to three year schedule after the initial series and first-year booster, depending on the product and local law. Many non-core vaccines, including bordetella, lepto and Lyme, are typically given <strong>annually</strong> because immunity is shorter lived. That mix of intervals is one more reason to keep an organized record.</p>

<h2>Keep your dog's plan straight</h2>
<p>With core vaccines on multi-year cycles and non-core vaccines on yearly cycles, it is easy to lose track of what is due when. A free <a href="/">vaccine tracker</a> lets you log each vaccine, see the next due date for both core and non-core shots, and get reminders so nothing lapses. It also gives you one clean record to hand to a boarding facility, groomer or new vet.</p>

<h2>Cost and over-vaccination concerns</h2>
<p>One reason the core versus non-core split matters is balance. Adding every available vaccine regardless of risk drives up cost and exposes a dog to vaccines it may not need, while skipping a relevant non-core vaccine leaves a real gap. The goal is precision: full core coverage for every dog, plus exactly the non-core vaccines that match your dog's life. That targeted approach is both safer and more economical than guessing.</p>

<h3>Watch for reactions either way</h3>
<p>Core and non-core vaccines alike can cause mild, short-lived effects such as soreness, low energy or a small lump at the injection site. Serious reactions like facial swelling, hives or breathing trouble are rare but need immediate veterinary attention. Logging which vaccine was given on which date helps your vet spot patterns if a sensitive dog ever reacts.</p>

<h2>Special cases: shelters, breeders and travel</h2>
<p>Some situations change the calculation. Shelter and rescue dogs are often vaccinated on an accelerated core schedule because group housing raises disease pressure. Dogs that travel across regions or borders may face additional legal vaccine requirements, with rabies being the most common. Breeding dogs may have specific recommendations too. When circumstances change, revisit the plan with your vet rather than assuming last year's schedule still fits.</p>

<h2>The bottom line</h2>
<p>Core vaccines (DHPP and rabies) are for every dog and are about diseases that are deadly and widespread. Non-core vaccines (bordetella, lepto, influenza, Lyme) are matched to your dog's specific risks. The right plan is a short, honest conversation with your vet plus a system to stay on schedule.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "What are the core dog vaccines?",
        a: "The core canine vaccines are DHPP, which covers distemper, hepatitis, parvovirus and parainfluenza, and rabies, which is legally required in most places.",
      },
      {
        q: "What are non-core dog vaccines?",
        a: "Non-core vaccines are recommended based on lifestyle and risk. Common ones include bordetella, leptospirosis, canine influenza and Lyme disease.",
      },
      {
        q: "Does non-core mean the vaccine is unimportant?",
        a: "No. For an at-risk dog a non-core vaccine can be just as important as a core one. Non-core describes who needs it, not how serious the disease is.",
      },
      {
        q: "Does my dog need the bordetella vaccine?",
        a: "Bordetella is recommended for dogs that board, attend daycare, visit groomers or train in groups. Many facilities require it before admission.",
      },
      {
        q: "Is the leptospirosis vaccine necessary?",
        a: "It is recommended for dogs exposed to standing water, wildlife, rural areas or urban rodents. Lepto can also infect humans, so many vets prioritize it.",
      },
      {
        q: "How often are non-core vaccines given?",
        a: "Many non-core vaccines such as bordetella, lepto and Lyme are given annually because immunity is shorter lived, while core vaccines often run one to three years.",
      },
      {
        q: "How do I decide which vaccines my dog needs?",
        a: "Discuss your dog's lifestyle with your vet: boarding, hiking, travel, water exposure and tick risk. That determines which non-core vaccines make sense.",
      },
    ],
  },
  {
    slug: "how-often-do-adult-dogs-need-vaccines",
    title: "How Often Do Adult Dogs Need Vaccines? (2026)",
    description:
      "How often do adult dogs need vaccines in 2026? Booster intervals for DHPP, rabies, bordetella and lepto, plus titer testing and how to track due dates.",
    date: "2026-06-27",
    readingTime: "6 min read",
    bodyHtml: `<p>Once your dog finishes its puppy series and first-year boosters, vaccination does not stop. It shifts to a maintenance schedule built around boosters. The exact intervals depend on the specific vaccine, the product used, your local laws, and your dog's lifestyle. Here is how adult dog vaccination works in 2026.</p>
<p><strong>Note:</strong> This is general educational information, not veterinary advice. Booster intervals and legal requirements vary by region and product. Always confirm your dog's schedule with your veterinarian.</p>

<h2>From puppy series to adult boosters</h2>
<p>Puppies receive the core <strong>DHPP</strong> series ending at 14 to 16 weeks, plus <strong>rabies</strong>. The first round of adult-style boosters typically comes about one year later, around 12 to 16 months of age. After that one-year booster, most dogs move onto longer intervals for the core vaccines.</p>

<h2>How often each vaccine is boosted</h2>

<h3>DHPP (core)</h3>
<p>After the puppy series and the one-year booster, <strong>DHPP is often given every three years</strong>. Modern combination vaccines provide durable immunity against distemper, hepatitis, parvovirus and parainfluenza, so annual DHPP is usually unnecessary. Some vets use a one-year interval in specific cases, so confirm what applies to your dog.</p>

<h3>Rabies (core)</h3>
<p>Rabies timing is set by <strong>law</strong>, not just medical preference. After the first rabies shot, a booster is usually given one year later, then every <strong>one to three years</strong> depending on the vaccine product and your local regulations. Because it is a legal requirement, lapsing on rabies can create licensing and liability problems, not just health risk.</p>

<h3>Bordetella (non-core)</h3>
<p>Bordetella protects against kennel cough and is usually boosted <strong>every 6 to 12 months</strong> for social dogs that board, attend daycare, visit groomers or train in groups. Many facilities require boosters within the past six months.</p>

<h3>Leptospirosis (non-core)</h3>
<p>Leptospirosis immunity is relatively short, so it is typically boosted <strong>annually</strong> for at-risk dogs exposed to water, wildlife or rodents. Skipping a year can leave a previously protected dog vulnerable again.</p>

<h2>Adult booster intervals at a glance</h2>
<ul>
<li><strong>DHPP:</strong> Usually every 3 years after the one-year booster</li>
<li><strong>Rabies:</strong> Every 1 to 3 years, set by local law and product</li>
<li><strong>Bordetella:</strong> Every 6 to 12 months for social dogs</li>
<li><strong>Leptospirosis:</strong> Annually for at-risk dogs</li>
<li><strong>Canine influenza / Lyme:</strong> Annually where recommended</li>
</ul>

<h2>What about titer testing?</h2>
<p>A titer test measures the antibody level in your dog's blood and can show whether existing immunity to certain core diseases like distemper and parvovirus is still present. Some owners use titers to avoid unnecessary DHPP boosters. Titers do not replace the rabies vaccine, which is legally mandated on a set schedule regardless of antibody levels. Discuss with your vet whether titer testing fits your dog.</p>

<h2>Senior dogs and health changes</h2>
<p>Older dogs still need protection, but vaccine plans may be adjusted for dogs with chronic illness, immune conditions, or a history of vaccine reactions. The answer is rarely to stop vaccinating entirely; it is to tailor the plan. Never skip rabies based on age alone, since it is a legal requirement.</p>

<h2>Why intervals make tracking hard</h2>
<p>This is the real challenge of adult vaccination. One vaccine is due every three years, another yearly, another twice a year, and rabies on its own legal cycle. Trying to remember all of that from memory or scattered paperwork is how dogs end up overdue, which can mean a refused boarding reservation or a re-started series.</p>
<p>A free <a href="/">vaccine tracker</a> solves this by storing every vaccine date and automatically calculating the next due date for each one, whether that is six months or three years out. Reminders arrive before each due date, and you keep a single clean record to share with boarding facilities, groomers or a new vet.</p>

<h2>Signs your dog may be overdue</h2>
<p>Unlike a sick dog, an overdue dog shows no symptoms, which is exactly why lapses are easy to miss. The practical warning signs are administrative rather than medical: a boarding facility asks for proof you cannot produce, a groomer turns you away, or a new vet flags a gap in the record. By the time those happen, your dog has already been unprotected for a while. The fix is to track due dates proactively instead of reacting when someone asks for paperwork.</p>

<h2>What to bring to a booster visit</h2>
<p>Make the appointment efficient by arriving with a clear history. Useful items include the dates and types of previous vaccines, any past reactions, your dog's current lifestyle (boarding, travel, hiking, water exposure), and any health changes since the last visit. With that information, your vet can confirm which boosters are actually due and avoid repeating shots that are still in effect.</p>
<ol>
<li>Bring the full vaccine history with exact dates.</li>
<li>Note any prior reactions or sensitivities.</li>
<li>Describe current lifestyle and travel plans.</li>
<li>Mention new health conditions or medications.</li>
</ol>

<h2>The bottom line</h2>
<p>Adult dogs do not need every vaccine every year. Core DHPP is often every three years, rabies runs one to three years on a legal schedule, and lifestyle vaccines like bordetella and lepto are boosted every six to twelve months. The right plan is set with your vet, and the easiest way to keep it on track is a tracker that watches every due date for you.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "How often do adult dogs need vaccines?",
        a: "It varies by vaccine. Core DHPP is often every three years, rabies every one to three years by law, and lifestyle vaccines like bordetella and lepto every 6 to 12 months.",
      },
      {
        q: "Do adult dogs need DHPP every year?",
        a: "Usually not. After the puppy series and one-year booster, DHPP is commonly given every three years, though some vets use a one-year interval in specific cases.",
      },
      {
        q: "How often is the rabies booster needed?",
        a: "Rabies is typically boosted one year after the first dose, then every one to three years depending on the product and local law, which sets the schedule.",
      },
      {
        q: "How often does my dog need bordetella?",
        a: "Bordetella is usually boosted every 6 to 12 months for dogs that board, attend daycare, visit groomers or train in groups. Many facilities require it within six months.",
      },
      {
        q: "What is a titer test and does it replace vaccines?",
        a: "A titer test measures antibody levels and can show existing immunity to diseases like parvo and distemper. It does not replace the legally required rabies vaccine.",
      },
      {
        q: "Should senior dogs still be vaccinated?",
        a: "Yes, though plans may be tailored for chronic illness or reaction history. Rabies should not be skipped based on age alone since it is a legal requirement.",
      },
      {
        q: "How can I keep track of so many different intervals?",
        a: "Use a vaccine tracker that stores each date and calculates the next due date per vaccine, with reminders, so you never miss a six-month, one-year or three-year booster.",
      },
    ],
  },
];
