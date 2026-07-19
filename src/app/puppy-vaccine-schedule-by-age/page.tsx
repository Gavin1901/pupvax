import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Puppy Vaccine Schedule by Age: 6 to 16 Weeks",
  description: "See a practical puppy vaccination timeline by age, from the first DHPP dose through rabies and the one-year booster.",
  alternates: { canonical: "https://pupvax.com/puppy-vaccine-schedule-by-age" },
};

const rows = [
  ["6–8 weeks", "DHPP dose 1", "Begins protection against distemper, adenovirus, parvovirus and parainfluenza."],
  ["10–12 weeks", "DHPP dose 2", "Usually given 3–4 weeks after the first dose."],
  ["12–16 weeks", "Rabies", "Timing depends on local law and your veterinarian."],
  ["14–16 weeks", "DHPP dose 3", "Final puppy-series dose for many puppies; your vet may adjust the series."],
  ["12 months", "DHPP and rabies boosters", "Booster timing depends on vaccine label, local law and risk."],
];

export default function Page() {
  const faq = [
    { q: "When should puppy shots start?", a: "Most puppies begin their core vaccine series at 6–8 weeks of age." },
    { q: "Can a puppy go outside before all shots?", a: "Ask your veterinarian about local parvovirus risk and safer socialization options." },
    { q: "Are non-core vaccines required?", a: "Bordetella, leptospirosis, Lyme and canine influenza depend on lifestyle and regional exposure." },
  ];
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return <SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><main className="mx-auto max-w-4xl px-4 py-10">
    <nav className="text-sm text-slate-500"><Link href="/">PupVax</Link> / Puppy vaccine schedule</nav>
    <h1 className="mt-4 text-4xl font-extrabold text-slate-900">Puppy Vaccine Schedule by Age</h1>
    <p className="mt-4 text-lg leading-8 text-slate-600">Use this age-by-age timeline to prepare for vet visits. It is an educational planning guide, not a substitute for veterinary advice.</p>
    <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full text-left"><thead className="bg-slate-50"><tr>{["Age", "Typical vaccine", "What to know"].map(x => <th key={x} className="p-4">{x}</th>)}</tr></thead><tbody>{rows.map(r => <tr key={r[0]} className="border-t border-slate-200">{r.map(c => <td key={c} className="p-4 align-top text-sm text-slate-700">{c}</td>)}</tr>)}</tbody></table></div>
    <section className="mt-10"><h2 className="text-2xl font-bold">Build dates from your puppy’s birthday</h2><p className="mt-3 text-slate-600">Enter the birth date and generate a personalized timeline you can discuss with your veterinarian.</p><Link href="/" className="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Create a puppy schedule</Link></section>
    <section className="mt-10"><h2 className="text-2xl font-bold">Frequently asked questions</h2>{faq.map(f => <div key={f.q} className="mt-4 rounded-xl border p-4"><h3 className="font-bold">{f.q}</h3><p className="mt-2 text-slate-600">{f.a}</p></div>)}</section>
    <p className="mt-8 text-sm text-slate-500">Related: <Link className="text-emerald-700" href="/puppy-deworming-schedule/">puppy deworming schedule</Link> and <Link className="text-emerald-700" href="/dog-vaccines/">dog vaccine guide</Link>.</p>
  </main></SiteShell>;
}
