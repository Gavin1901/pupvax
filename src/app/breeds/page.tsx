import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { BREEDS, VET_DISCLAIMER } from "@/lib/vaccine";

export const metadata: Metadata = {
  title: "2026 Dog Vaccine Schedules by Breed: 20 Popular Breeds",
  description: "Breed-specific 2026 vaccine schedules, health risks, age-stage maps and dosage guidance for 20 popular dog breeds. From Labradors to Chihuahuas.",
  alternates: { canonical: "https://pupvax.com/breeds" },
};

export default function BreedsIndex() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">2026 Dog Vaccine Schedules by Breed</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Pick a breed to see its complete 2026 vaccine schedule: puppy shot timeline, adult boosters,
          deworming and heartworm prevention, breed-specific health risks, recommended vaccines,
          dosage guidance, and age-stage vaccine maps for all life stages from puppy through senior years.
        </p>

        <p className="mt-4 text-sm text-stone-500">
          Each breed page has unique content you won&apos;t find on any other page: breed-specific health
          risks, a complete lifespan vaccine map, tailored vaccine recommendations based on the breed&apos;s
          lifestyle, and senior dog vaccine guidance adjusted for that breed&apos;s typical lifespan. We built
          these pages to be genuinely useful, not just search-engine filler.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {BREEDS.map((b) => (
            <Link key={b.slug} href={`/vaccine-schedule/${b.slug}`} className="rounded-xl border border-amber-200 bg-white p-4 hover:border-amber-400 transition-colors">
              <p className="font-bold text-stone-800"><span className="mr-1">🐾</span>{b.name}</p>
              <p className="text-sm text-stone-600">{b.size} · {b.weightLbs} · {b.lifespanYears} yrs</p>
              <p className="mt-2 text-xs text-stone-500 line-clamp-2">{b.vaccineNote}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          ⚠️ <strong>Medical Disclaimer:</strong> {VET_DISCLAIMER}
        </p>
      </div>
    </SiteShell>
  );
}
