import Link from "next/link";
import { SITE } from "@/lib/vaccine";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-amber-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-amber-700">
            <span className="text-xl">🐕</span>
            <span>{SITE.name}</span>
          </Link>
          <nav className="flex gap-4 text-sm text-stone-600">
            <Link href="/dog-vaccines" className="hover:text-amber-700">Vaccines</Link>
            <Link href="/breeds" className="hover:text-amber-700">Breeds</Link>
            <Link href="/senior-dog-vaccines" className="hover:text-amber-700">Senior Dogs</Link>
            <Link href="/blog" className="hover:text-amber-700">Blog</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-amber-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-stone-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-amber-700">Home</Link>
            <Link href="/dog-vaccines" className="hover:text-amber-700">Dog Vaccines</Link>
            <Link href="/breeds" className="hover:text-amber-700">All Breeds</Link>
            <Link href="/puppy-vaccine-schedule" className="hover:text-amber-700">Puppy Schedule</Link>
            <Link href="/senior-dog-vaccines" className="hover:text-amber-700">Senior Dogs</Link>
            <Link href="/titer-test-dogs" className="hover:text-amber-700">Titer Testing</Link>
            <Link href="/blog" className="hover:text-amber-700">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-amber-700">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-700">Terms</Link>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100">
            <p className="font-medium text-stone-700 mb-2">More Free Tools</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <a href="https://plantingcalendar.net" className="hover:text-emerald-700" target="_blank" rel="noopener">Planting Calendar</a>
              <a href="https://freetdee.com" className="hover:text-emerald-700" target="_blank" rel="noopener">TDEE Calculator</a>
              <a href="https://babypercent.com" className="hover:text-emerald-700" target="_blank" rel="noopener">Baby Growth Tracker</a>
              <a href="https://invoicepad.net" className="hover:text-emerald-700" target="_blank" rel="noopener">Invoice Generator</a>
              <a href="https://zoneplan.net" className="hover:text-emerald-700" target="_blank" rel="noopener">Time Zone Planner</a>
              <a href="https://livephotokit.com" className="hover:text-emerald-700" target="_blank" rel="noopener">HEIC Converter</a>
              <a href="https://iworkviewer.com" className="hover:text-emerald-700" target="_blank" rel="noopener">iWork Viewer</a>
            </div>
          </div>
          <p className="mt-4">
            &copy; 2026 {SITE.name}. Free 2026 dog vaccine and deworming schedule tracker.
            Educational only — always consult your veterinarian about your dog&apos;s health.
          </p>
        </div>
      </footer>
    </div>
  );
}
