import Link from "next/link";

interface FooterProps {
  siteName: string;
  domain: string;
}

const linkMap: Record<string, { href: string; label: string }[]> = {
  "livephotokit.com": [
    { href: "/heic-to-jpg/", label: "HEIC to JPG" },
    { href: "/heic-to-png/", label: "HEIC to PNG" },
    { href: "/heic-viewer/", label: "HEIC Viewer" },
    { href: "/open-livp-file/", label: "Open LIVP" },
    { href: "/livp-to-mp4/", label: "LIVP to MP4" },
    { href: "/live-photo-to-gif/", label: "Live Photo to GIF" },
    { href: "/image-compressor/", label: "Image Compressor" },
    { href: "/blog/", label: "Guides" },
  ],
  "freetdee.com": [
    { href: "/", label: "TDEE Calculator" },
    { href: "/bmr-calculator/", label: "BMR Calculator" },
    { href: "/macro-calculator/", label: "Macro Calculator" },
    { href: "/bmi-calculator/", label: "BMI Calculator" },
    { href: "/protein-calculator/", label: "Protein Calculator" },
    { href: "/calorie-deficit/", label: "Calorie Deficit" },
    { href: "/goals/", label: "Goal Calculators" },
    { href: "/blog/", label: "Nutrition Guides" },
  ],
  "zoneplan.net": [
    { href: "/meeting-planner/", label: "Meeting Planner" },
    { href: "/world-clock/", label: "World Clock" },
    { href: "/time-zones/", label: "Time Zone Converter" },
    { href: "/new-york-to-london/", label: "New York to London" },
    { href: "/est-to-ist/", label: "EST to IST" },
    { href: "/abbreviation/pst-to-gmt/", label: "PST to GMT" },
    { href: "/scenarios/remote-team-standup/", label: "Remote Standup" },
    { href: "/blog/", label: "Scheduling Guides" },
  ],
  "pupvax.com": [
    { href: "/dog-vaccines/", label: "Dog Vaccines" },
    { href: "/puppy-vaccine-schedule/", label: "Puppy Schedule" },
    { href: "/senior-dog-vaccines/", label: "Senior Dogs" },
    { href: "/titer-test-dogs/", label: "Titer Testing" },
    { href: "/breeds/", label: "Breed Schedules" },
    { href: "/vaccine-schedule/labrador/", label: "Labrador Schedule" },
    { href: "/vaccine-schedule/golden-retriever/", label: "Golden Retriever Schedule" },
    { href: "/blog/", label: "Dog Health Guides" },
  ],
};

const externalTools: Record<string, { href: string; label: string }[]> = {
  "livephotokit.com": [
    { href: "https://iworkviewer.com", label: "iWork Viewer" },
    { href: "https://invoicepad.net", label: "Invoice Generator" },
    { href: "https://zoneplan.net", label: "Time Zone Planner" },
    { href: "https://freetdee.com", label: "TDEE Calculator" },
  ],
  "freetdee.com": [
    { href: "https://babypercent.com", label: "Baby Growth Tracker" },
    { href: "https://pupvax.com", label: "Dog Vaccine Tracker" },
    { href: "https://zoneplan.net", label: "Time Zone Planner" },
    { href: "https://invoicepad.net", label: "Invoice Generator" },
  ],
  "zoneplan.net": [
    { href: "https://invoicepad.net", label: "Invoice Generator" },
    { href: "https://iworkviewer.com", label: "iWork Viewer" },
    { href: "https://livephotokit.com", label: "HEIC Converter" },
    { href: "https://freetdee.com", label: "TDEE Calculator" },
  ],
  "pupvax.com": [
    { href: "https://babypercent.com", label: "Baby Growth Tracker" },
    { href: "https://freetdee.com", label: "TDEE Calculator" },
    { href: "https://plantingcalendar.net", label: "Planting Calendar" },
    { href: "https://zoneplan.net", label: "Time Zone Planner" },
  ],
};

export default function Footer({ siteName, domain }: FooterProps) {
  const internalLinks = linkMap[domain] ?? [];
  const toolLinks = externalTools[domain] ?? [];

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white px-5 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        {internalLinks.length > 0 ? (
          <section aria-label="Popular tools">
            <p className="mb-2 text-sm font-semibold text-zinc-800">Popular tools and guides</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {internalLinks.map((item) => (
                <Link key={item.href} prefetch={false} href={item.href} className="text-zinc-600 hover:text-indigo-600 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-5">
          <div className="text-sm text-zinc-500">
            &copy; 2026 {siteName}. All rights reserved.
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link prefetch={false} href="/blog/" className="text-zinc-600 hover:text-indigo-600 transition-colors">Blog</Link>
            <Link prefetch={false} href="/about/" className="text-zinc-600 hover:text-indigo-600 transition-colors">About</Link>
            <Link prefetch={false} href="/contact/" className="text-zinc-600 hover:text-indigo-600 transition-colors">Contact</Link>
            <Link prefetch={false} href="/privacy-policy/" className="text-zinc-600 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link prefetch={false} href="/terms/" className="text-zinc-600 hover:text-indigo-600 transition-colors">Terms</Link>
          </nav>
        </div>

        {toolLinks.length > 0 ? (
          <section className="border-t border-zinc-100 pt-5" aria-label="More free tools">
            <p className="mb-2 text-sm font-semibold text-zinc-800">More free tools</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {toolLinks.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noopener" className="text-zinc-600 hover:text-indigo-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <p className="text-xs text-zinc-400">
          {domain} is a free online tool. Use it for quick planning, conversion, or reference. Always verify important results before relying on them.
        </p>
      </div>
    </footer>
  );
}

