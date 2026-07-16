export interface Competitor {
  slug: string;
  name: string;
  title: string;
  description: string;
  comparison: { feature: string; us: string; them: string }[];
  faq: { q: string; a: string }[];
  bodyHtml: string;
}

export const competitors: Competitor[] = [
  {
    slug: '11pets-premium',
    name: '11pets Premium',
    title: 'PupVax vs 11pets: Free Vaccine Schedule vs £5.99/Month for Cloud Sync',
    description: '11pets Premium costs £5.99/month (~$7.50) for cloud backup and multi-device sync. PupVax: free, browser-based vaccine schedule generator.',
    comparison: [
      { feature: 'Price', us: 'Free', them: 'Free + £5.99/mo Premium' },
      { feature: 'Cloud backup', us: 'No', them: 'Yes (Premium)' },
      { feature: 'Multi-device', us: 'Browser — any device', them: 'Sync across devices (Premium)' },
      { feature: 'Installation', us: 'None — browser', them: 'App download' },
      { feature: 'Vaccine focus', us: 'Dedicated schedule tool', them: 'Part of pet health suite' },
    ],
    faq: [
      { q: 'Is PupVax a full pet health tracker?', a: 'No — PupVax focuses on puppy vaccination schedules. For comprehensive pet health tracking with medical records, 11pets is more complete.' },
      { q: 'Does PupVax cover adult dog vaccines?', a: 'PupVax focuses on the critical first-year puppy schedule. For booster and adult dog schedules, consult your veterinarian.' },
    ],
    bodyHtml: '<h2>Pay monthly for cloud sync</h2><p>11pets is a comprehensive pet health management app. The free version covers vaccine tracking basics — Premium at £5.99/month adds cloud backup and device sync. For puppy owners who just need a vaccination schedule, this is overkill.</p><p>PupVax generates a complete puppy vaccination timeline for free. Enter your puppy\'s birth date and breed size, get a schedule with recommended vaccine dates. No app, no subscription, no account.</p><h2>When 11pets is worth it</h2><p>If you manage multiple pets and want consolidated medical records, medication reminders, and vet visit logging synced across devices, 11pets Premium justifies its price. For new puppy owners who need a vaccination roadmap — PupVax is the focused, free tool.</p>',
  },
  {
    slug: 'pawchamp-premium',
    name: 'PawChamp Premium',
    title: 'PupVax vs PawChamp: Free Vaccine Tool vs $99.99/Year Dog Training App',
    description: 'PawChamp costs $99.99/year or $40/month and focuses on dog training — vaccines are a side feature. PupVax: free, dedicated vaccine scheduler.',
    comparison: [
      { feature: 'Price', us: 'Free', them: '$99.99/year or $40/month' },
      { feature: 'Primary focus', us: 'Vaccine scheduling', them: 'Dog training courses' },
      { feature: 'Vaccine detail', us: 'Full schedule with dates', them: 'Basic reminder only' },
      { feature: 'Account needed', us: 'No', them: 'Yes' },
    ],
    faq: [
      { q: 'Is PawChamp a scam?', a: 'PawChamp is a legitimate dog training platform, but the pricing ($99.99/year) is steep for what is essentially video courses. Their vaccine feature is minimal.' },
    ],
    bodyHtml: '<h2>$99.99/year for training — vaccines are an afterthought</h2><p>PawChamp is primarily a dog training course platform at $99.99/year (or $40/month). Their vaccine reminder is a basic sidebar feature, not a dedicated tool.</p><p>PupVax does one thing: generates a detailed puppy vaccination schedule with recommended dates for DHPP, rabies, bordetella, leptospirosis, and Lyme — based on your puppy\'s age and breed size. Free, focused, no upsells.</p>',
  },
  {
    slug: 'breedera-app',
    name: 'Breedera',
    title: 'PupVax vs Breedera: Free Pet Owner Tool vs $10/Month Breeder Platform',
    description: 'Breedera is a breeder management platform at ~$10/month. PupVax: free, designed for regular pet owners, not breeders.',
    comparison: [
      { feature: 'Price', us: 'Free', them: '~$10/month' },
      { feature: 'Target user', us: 'Pet owners', them: 'Professional breeders' },
      { feature: 'Litter management', us: 'No', them: 'Yes' },
      { feature: 'Vaccine schedule', us: 'Simple, clear', them: 'Part of health module' },
      { feature: 'Account needed', us: 'No', them: 'Yes' },
    ],
    faq: [
      { q: 'Should breeders use PupVax?', a: 'PupVax is designed for individual pet owners. Professional breeders managing multiple litters need Breedera\'s litter tracking, pedigree, and client management features.' },
    ],
    bodyHtml: '<h2>Built for breeders, priced for breeders</h2><p>Breedera is a professional breeder management platform at around $10/month. It handles litter tracking, pedigrees, health records, and client management — overkill for someone with one new puppy.</p><p>PupVax is built for regular pet owners. Enter your puppy\'s details, get a vaccination schedule, done. No monthly fee, no breeder features you will never use.</p>',
  },
];