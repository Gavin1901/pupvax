"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BREEDS, buildSchedule, nextDue, nextBoosterDue, fmtDate,
  getBreedAlerts, isSeniorDog,
  SENIOR_VACCINE_GUIDE, type ScheduleEntry, type BreedAlert,
} from "@/lib/vaccine";

const STORAGE_KEY = "pupvax_dogs";

interface DogProfile {
  id: string;
  name: string;
  birthDate: string; // YYYY-MM-DD
  breedSlug: string;
}

function loadDogs(): DogProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as DogProfile[];
  } catch {}
  return [];
}

function statusBadge(status: ScheduleEntry["status"]) {
  if (status === "done") return { label: "Done / past due", cls: "bg-stone-100 text-stone-500" };
  if (status === "due-soon") return { label: "Due soon", cls: "bg-red-100 text-red-700" };
  return { label: "Upcoming", cls: "bg-amber-100 text-amber-700" };
}

function breedAlertIcon(type: BreedAlert["type"]) {
  if (type === "warning") return { emoji: "⚠️", cls: "border-red-200 bg-red-50 text-red-800" };
  if (type === "info") return { emoji: "ℹ️", cls: "border-blue-200 bg-blue-50 text-blue-800" };
  return { emoji: "💡", cls: "border-green-200 bg-green-50 text-green-800" };
}

export default function VaccineTool() {
  const [dogs, setDogs] = useState<DogProfile[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [breedSlug, setBreedSlug] = useState("");

  useEffect(() => {
    const saved = loadDogs();
    setDogs(saved);
    if (saved.length) setActiveId(saved[0].id);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(dogs)); } catch {}
    }
  }, [dogs, loaded]);

  const activeDog = useMemo(() => dogs.find((d) => d.id === activeId) ?? null, [dogs, activeId]);

  const schedule = useMemo(() => {
    if (!activeDog) return [];
    const bd = new Date(activeDog.birthDate + "T00:00:00");
    if (isNaN(bd.getTime())) return [];
    return buildSchedule(bd, activeDog.breedSlug || undefined);
  }, [activeDog]);

  const upcoming = useMemo(() => (schedule.length ? nextDue(schedule) : null), [schedule]);
  const nextBooster = useMemo(() => (schedule.length ? nextBoosterDue(schedule) : null), [schedule]);

  const breedAlerts = useMemo(() => {
    if (!activeDog?.breedSlug) return [];
    return getBreedAlerts(activeDog.breedSlug);
  }, [activeDog]);

  const senior = useMemo(() => {
    if (!activeDog) return false;
    const bd = new Date(activeDog.birthDate + "T00:00:00");
    if (isNaN(bd.getTime())) return false;
    return isSeniorDog(bd);
  }, [activeDog]);

  const activeBreed = useMemo(() => {
    if (!activeDog?.breedSlug) return null;
    return BREEDS.find((b) => b.slug === activeDog.breedSlug) ?? null;
  }, [activeDog]);

  function addDog(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !birthDate) return;
    const dog: DogProfile = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      birthDate,
      breedSlug,
    };
    setDogs((prev) => [...prev, dog]);
    setActiveId(dog.id);
    setName("");
    setBirthDate("");
    setBreedSlug("");
  }

  function removeDog(id: string) {
    setDogs((prev) => {
      const next = prev.filter((d) => d.id !== id);
      if (activeId === id) setActiveId(next.length ? next[0].id : null);
      return next;
    });
  }

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
      {/* 已存档狗狗列表 */}
      {dogs.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-stone-500">Your dogs ({dogs.length}):</span>
          {dogs.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveId(d.id)}
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                d.id === activeId
                  ? "bg-amber-600 text-white"
                  : "bg-amber-50 text-amber-700 hover:bg-amber-100"
              }`}
            >
              🐕 {d.name}
            </button>
          ))}
        </div>
      )}

      {/* 添加狗狗表单 */}
      <form onSubmit={addDog} className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
          Dog&apos;s name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Max"
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base focus:border-amber-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
          Birth date (or adoption date)
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base focus:border-amber-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
          Breed
          <select
            value={breedSlug}
            onChange={(e) => setBreedSlug(e.target.value)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base focus:border-amber-500 focus:outline-none"
          >
            <option value="">Mixed / not sure</option>
            {BREEDS.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-lg bg-amber-600 px-4 py-2 text-base font-semibold text-white hover:bg-amber-700"
        >
          Generate schedule
        </button>
      </form>

      <p className="mt-2 text-xs text-stone-400">
        Saved to this browser only. Your dog&apos;s profile is remembered next time. Nothing is uploaded. Add multiple dogs to track your whole pack.
      </p>

      {/* 品种提醒（核心bug修复：选犬种后显示品种相关提示） */}
      {breedAlerts.length > 0 && (
        <div className="mt-5 space-y-2">
          {breedAlerts.map((alert, i) => {
            const icon = breedAlertIcon(alert.type);
            return (
              <div key={i} className={`rounded-lg border px-4 py-3 text-sm ${icon.cls}`}>
                <span className="font-semibold">{icon.emoji}</span> {alert.message}
              </div>
            );
          })}
        </div>
      )}

      {/* 老年犬提醒 */}
      {senior && (
        <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <strong>🐾 Senior dog alert:</strong> {activeDog?.name} is over 7 years old. Vaccine needs change with age.
          Scroll down for senior-specific recommendations or visit our{" "}
          <a href="/senior-dog-vaccines" className="underline font-semibold">Senior Dog Vaccine Guide</a>.
        </div>
      )}

      {/* 时间线 */}
      {activeDog && schedule.length > 0 && (
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-stone-900">
              {activeDog.name}&apos;s vaccine timeline
              {activeBreed ? <span className="text-stone-400 font-normal"> · {activeBreed.name}</span> : null}
            </h3>
            <button onClick={() => removeDog(activeDog.id)} className="text-xs text-stone-400 hover:text-red-600">
              Remove
            </button>
          </div>

          {upcoming && (
            <div className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Next up</p>
              <p className="mt-1 text-stone-800">
                <strong>{upcoming.name}</strong> — due {fmtDate(upcoming.dueDate)}
              </p>
            </div>
          )}

          {nextBooster && nextBooster !== upcoming && (
            <div className="mt-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Next booster</p>
              <p className="mt-1 text-stone-800">
                <strong>{nextBooster.name}</strong> — due {fmtDate(nextBooster.dueDate)}
              </p>
              <p className="mt-1 text-xs text-blue-600">
                🔔 Set a reminder in your phone for {fmtDate(nextBooster.dueDate)}.
              </p>
            </div>
          )}

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="py-2 pr-3">Vaccine / Treatment</th>
                  <th className="py-2 pr-3">Type</th>
                  <th className="py-2 pr-3">Due date</th>
                  <th className="py-2 pr-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((e, i) => {
                  const badge = statusBadge(e.status);
                  return (
                    <tr
                      key={`${e.name}-${i}`}
                      className={`border-b border-stone-100 ${e.status === "due-soon" ? "bg-red-50" : "hover:bg-stone-50"}`}
                    >
                      <td className="py-2 pr-3 font-medium text-stone-800">
                        {e.name}
                        {e.recurring ? <span className="ml-1 text-xs text-stone-400">(recurring)</span> : null}
                      </td>
                      <td className="py-2 pr-3 text-stone-600">{e.category}</td>
                      <td className="py-2 pr-3 text-stone-700">{fmtDate(e.dueDate)}</td>
                      <td className="py-2 pr-3">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge.cls}`}>{badge.label}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-stone-400">
            Dates are calculated estimates from standard schedules. Your veterinarian may adjust them for your dog.
          </p>

          {/* 老年犬疫苗建议 */}
          {senior && (
            <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
              <h4 className="font-bold text-amber-800">🐾 Senior Dog Vaccine Recommendations</h4>
              <p className="mt-2 text-sm text-amber-700">
                {activeDog?.name} is a senior dog. Here are vaccine guidelines for older dogs per AAHA 2026 recommendations:
              </p>
              <ul className="mt-3 space-y-2">
                {SENIOR_VACCINE_GUIDE.map((s) => (
                  <li key={s.id} className="rounded-lg border border-amber-200 bg-white p-3 text-sm">
                    <strong className="text-stone-800">{s.name}:</strong>{" "}
                    <span className="text-amber-700 font-medium">{s.recommendation}</span>
                    <p className="mt-1 text-stone-600">{s.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
