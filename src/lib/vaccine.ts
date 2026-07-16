// 狗狗疫苗核心数据引擎 v2.0 —— 纯计算，零依赖，程序化SEO的心脏
// 数据源：AAHA 2026 Canine Vaccination Guidelines / WSAVA / AVMA
// 全部纯计算，零上传、零API、零成本
// 教育用途，非兽医建议。Always consult your veterinarian.

// ── 疫苗时间表 ──────────────────────────────────────────────
export type VaccineCategory = "Core" | "Non-core" | "Preventive";

export interface VaccineDose {
  id: string;
  name: string;
  category: VaccineCategory;
  ageWeeks: number | null;
  note: string;
}

// 幼犬系列
export const PUPPY_SCHEDULE: VaccineDose[] = [
  { id: "dhpp-1", name: "DHPP (1st dose)", category: "Core", ageWeeks: 7, note: "First combination shot for distemper, hepatitis (adenovirus), parvovirus and parainfluenza. Usually given at 6-8 weeks." },
  { id: "dhpp-2", name: "DHPP (2nd dose)", category: "Core", ageWeeks: 11, note: "Second DHPP booster, 3-4 weeks after the first. Typically 10-12 weeks." },
  { id: "dhpp-3", name: "DHPP (3rd dose)", category: "Core", ageWeeks: 15, note: "Third and final puppy DHPP, usually 14-16 weeks, to override fading maternal antibodies." },
  { id: "rabies-1", name: "Rabies (1st dose)", category: "Core", ageWeeks: 14, note: "First rabies shot, legally required in all U.S. states. Given between 12 and 16 weeks." },
  { id: "bordetella", name: "Bordetella (kennel cough)", category: "Non-core", ageWeeks: 8, note: "Recommended if your dog will be boarded, groomed, in daycare or dog parks. Often given from 8 weeks." },
  { id: "lepto", name: "Leptospirosis (1st dose)", category: "Non-core", ageWeeks: 12, note: "Risk-based; recommended in many areas with wildlife or standing water. Needs a booster 2-4 weeks later." },
  { id: "lepto-2", name: "Leptospirosis (2nd dose)", category: "Non-core", ageWeeks: 15, note: "Second lepto dose to complete the initial series." },
  { id: "lyme", name: "Lyme disease (1st dose)", category: "Non-core", ageWeeks: 12, note: "Risk-based in tick-heavy regions (Northeast, Upper Midwest). Boostered 2-4 weeks later." },
  { id: "lyme-2", name: "Lyme disease (2nd dose)", category: "Non-core", ageWeeks: 15, note: "Second Lyme dose to complete the initial series." },
];

// 成犬加强针
export interface AdultBooster {
  id: string;
  name: string;
  category: VaccineCategory;
  firstBoosterAgeWeeks: number;
  everyMonths: number;
  note: string;
}

export const ADULT_BOOSTERS: AdultBooster[] = [
  { id: "dhpp-booster", name: "DHPP booster", category: "Core", firstBoosterAgeWeeks: 64, everyMonths: 36, note: "One year after the puppy series, then every 3 years for most adult dogs." },
  { id: "rabies-booster", name: "Rabies booster", category: "Core", firstBoosterAgeWeeks: 64, everyMonths: 36, note: "First adult rabies one year after the puppy shot, then every 1-3 years depending on state law and vaccine type." },
  { id: "bordetella-booster", name: "Bordetella booster", category: "Non-core", firstBoosterAgeWeeks: 60, everyMonths: 12, note: "Annually (or every 6 months) for social dogs that board, groom or visit dog parks." },
  { id: "lepto-booster", name: "Leptospirosis booster", category: "Non-core", firstBoosterAgeWeeks: 60, everyMonths: 12, note: "Annual booster where leptospirosis risk is present." },
];

// 驱虫 / 心丝虫预防
export interface Preventive {
  id: string;
  name: string;
  everyMonths: number;
  startAgeWeeks: number;
  note: string;
}

export const PREVENTIVES: Preventive[] = [
  { id: "heartworm", name: "Heartworm prevention", everyMonths: 1, startAgeWeeks: 8, note: "A monthly chewable or topical, year-round in most of the U.S. An annual heartworm test is recommended." },
  { id: "flea-tick", name: "Flea & tick prevention", everyMonths: 1, startAgeWeeks: 8, note: "Monthly (or every 3 months for some products) to protect against fleas, ticks and the diseases they carry." },
  { id: "deworming", name: "Intestinal deworming", everyMonths: 3, startAgeWeeks: 2, note: "Puppies are dewormed every 2 weeks until 12 weeks, then monthly to 6 months, then every 3 months as adults." },
];

// ── 老年犬疫苗加强表 ──────────────────────────────────────
export interface SeniorVaccineNote {
  id: string;
  name: string;
  recommendation: string;
  note: string;
}

export const SENIOR_VACCINE_GUIDE: SeniorVaccineNote[] = [
  { id: "sr-dhpp", name: "DHPP (Senior)", recommendation: "Continue every 3 years", note: "Core immunity usually holds in seniors. Some vets recommend antibody titer testing instead of automatic boosters for dogs over 10." },
  { id: "sr-rabies", name: "Rabies (Senior)", recommendation: "Every 1-3 years per state law", note: "Legally required regardless of age. Discuss 3-year vs 1-year vaccine with your vet if your senior has chronic conditions." },
  { id: "sr-bordetella", name: "Bordetella (Senior)", recommendation: "Annual if social; skip if homebound", note: "Senior dogs with weaker immune systems that still visit groomers or daycare should stay current. Homebody seniors can often skip." },
  { id: "sr-lepto", name: "Leptospirosis (Senior)", recommendation: "Annual if exposure risk remains", note: "Older kidneys are more vulnerable to lepto damage. If your senior still hikes or has wildlife exposure, keep it current." },
  { id: "sr-heartworm", name: "Heartworm prevention (Senior)", recommendation: "Monthly, year-round", note: "Senior dogs tolerate heartworm treatment poorly, so prevention is even more important than in younger dogs." },
  { id: "sr-titer", name: "Antibody titer testing", recommendation: "Discuss with vet annually", note: "A blood test that measures existing antibody levels. Can sometimes replace automatic boosters in healthy seniors, avoiding unnecessary vaccines." },
];

// ── 旅行/寄养疫苗要求 ──────────────────────────────────────
export interface TravelRequirement {
  id: string;
  scenario: string;
  requiredVaccines: string;
  notes: string;
}

export const TRAVEL_REQUIREMENTS: TravelRequirement[] = [
  { id: "travel-boarding", scenario: "Boarding kennel / dog daycare", requiredVaccines: "Rabies, DHPP, Bordetella", notes: "Nearly all facilities require proof of current rabies and DHPP. Bordetella is required by most boarding and daycare facilities, often within the last 6-12 months." },
  { id: "travel-groomer", scenario: "Professional grooming", requiredVaccines: "Rabies, DHPP, Bordetella (often)", notes: "Most groomers require proof of rabies at minimum. Many also ask for Bordetella due to close contact with other dogs." },
  { id: "travel-domestic", scenario: "Domestic air travel (within U.S.)", requiredVaccines: "Rabies (mandatory), DHPP (recommended)", notes: "Airlines require a health certificate issued within 10 days of travel, which includes proof of rabies vaccination. DHPP is usually required by the certifying vet." },
  { id: "travel-international", scenario: "International travel", requiredVaccines: "Rabies (mandatory), DHPP, lepto (varies)", notes: "Every country sets its own import rules. Many rabies-free countries (UK, Australia, Japan) require a rabies titer test months in advance plus microchip. Check USDA APHIS for destination-specific requirements." },
  { id: "travel-dogpark", scenario: "Dog parks / public dog runs", requiredVaccines: "Rabies, DHPP (strongly recommended), Bordetella (recommended)", notes: "While not legally required to enter most parks, your dog should be fully vaccinated before visiting any off-leash area with unknown dogs." },
  { id: "travel-campsites", scenario: "Camping / hiking with your dog", requiredVaccines: "Rabies, DHPP, lepto (recommended), Lyme (recommended in tick country)", notes: "Outdoor dogs face higher exposure to wildlife, standing water and ticks. Lepto and Lyme become much more important for dogs that camp and hike regularly." },
];

// ── 美国各州狂犬疫苗法规差异 ──────────────────────────────
export interface StateRabiesLaw {
  state: string;
  firstVaccine: string;
  boosterInterval: string;
  notes: string;
}

export const STATE_RABIES_LAWS: StateRabiesLaw[] = [
  { state: "Alabama", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes both 1-year and 3-year vaccines as labeled." },
  { state: "Alaska", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label. 3-year recognized." },
  { state: "Arizona", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "State law requires rabies vaccine but leaves booster interval to local ordinance and vaccine label." },
  { state: "Arkansas", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine. Some cities may require annual." },
  { state: "California", firstVaccine: "3-4 months", boosterInterval: "1 or 3 years", notes: "3-year recognized statewide. Local ordinances may vary." },
  { state: "Colorado", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label. Some counties have stricter rules." },
  { state: "Connecticut", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Delaware", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Florida", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "3-year recognized. Proof required for licensure." },
  { state: "Georgia", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine as labeled." },
  { state: "Hawaii", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Rabies-free state with strict import rules including mandatory quarantine or pre-arrival testing for visiting dogs." },
  { state: "Idaho", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Illinois", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Indiana", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Iowa", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Kansas", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label. Some cities require annual." },
  { state: "Kentucky", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Louisiana", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Maine", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Maryland", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Massachusetts", firstVaccine: "6 months", boosterInterval: "1 or 3 years", notes: "First shot at 6 months by law. Recognizes 3-year vaccine." },
  { state: "Michigan", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Minnesota", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Mississippi", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Missouri", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Montana", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Nebraska", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Nevada", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "New Hampshire", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "New Jersey", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "New Mexico", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "New York", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine. NYC has stricter local rules." },
  { state: "North Carolina", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "North Dakota", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Ohio", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Oklahoma", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Oregon", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Pennsylvania", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Rhode Island", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "South Carolina", firstVaccine: "3-4 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "South Dakota", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Tennessee", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
  { state: "Texas", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine. Local ordinances may require annual." },
  { state: "Utah", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Vermont", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Virginia", firstVaccine: "4 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Washington", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "West Virginia", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine." },
  { state: "Wisconsin", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Recognizes 3-year vaccine. Some cities require annual." },
  { state: "Wyoming", firstVaccine: "3 months", boosterInterval: "1 or 3 years", notes: "Follows vaccine label." },
];

// ── 日期计算 ────────────────────────────────────────────────
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function fmtDate(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function addWeeks(d: Date, weeks: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + Math.round(weeks * 7));
  return r;
}

function addMonths(d: Date, months: number): Date {
  const r = new Date(d);
  r.setMonth(r.getMonth() + months);
  return r;
}

export interface ScheduleEntry {
  name: string;
  category: VaccineCategory;
  dueDate: Date;
  status: "done" | "due-soon" | "upcoming";
  note: string;
  recurring: boolean;
}

// 犬种相关提醒（核心bug修复：选犬种后时间线显示品种相关注释）
export interface BreedAlert {
  type: "warning" | "info" | "tip";
  message: string;
}

export function getBreedAlerts(breedSlug: string): BreedAlert[] {
  const breed = breedBySlug(breedSlug);
  if (!breed) return [];
  const alerts: BreedAlert[] = [];

  // 品种特有健康风险提醒
  if (breed.breedRisks) {
    alerts.push({ type: "warning", message: `${breed.name} health alert: ${breed.breedRisks}` });
  }

  // 推荐疫苗
  if (breed.recommendedVaccines) {
    alerts.push({ type: "info", message: `Recommended for ${breed.name}: ${breed.recommendedVaccines}` });
  }

  // 剂量提醒
  if (breed.dosageNote) {
    alerts.push({ type: "tip", message: `Dosage note: ${breed.dosageNote}` });
  }

  return alerts;
}

/**
 * 给定狗狗出生日期和品种，算出全部疫苗+加强+预防+品种提醒
 */
export function buildSchedule(birthDate: Date, breedSlug?: string, today: Date = new Date()): ScheduleEntry[] {
  const entries: ScheduleEntry[] = [];
  const soonMs = 1000 * 60 * 60 * 24 * 30;

  const statusFor = (due: Date): ScheduleEntry["status"] => {
    const diff = due.getTime() - today.getTime();
    if (diff < 0) return "done";
    if (diff <= soonMs) return "due-soon";
    return "upcoming";
  };

  // 幼犬系列
  for (const d of PUPPY_SCHEDULE) {
    if (d.ageWeeks == null) continue;
    const due = addWeeks(birthDate, d.ageWeeks);
    entries.push({ name: d.name, category: d.category, dueDate: due, status: statusFor(due), note: d.note, recurring: false });
  }

  // 成犬加强
  for (const b of ADULT_BOOSTERS) {
    let due = addWeeks(birthDate, b.firstBoosterAgeWeeks);
    let count = 0;
    while (count < 3) {
      entries.push({ name: b.name, category: b.category, dueDate: new Date(due), status: statusFor(due), note: b.note, recurring: true });
      due = addMonths(due, b.everyMonths);
      count++;
    }
  }

  // 预防
  for (const p of PREVENTIVES) {
    const start = addWeeks(birthDate, p.startAgeWeeks);
    let next = new Date(start);
    while (next.getTime() < today.getTime()) {
      next = addMonths(next, p.everyMonths);
    }
    entries.push({ name: p.name, category: "Preventive", dueDate: next, status: statusFor(next), note: p.note, recurring: true });
  }

  // 品种特有疫苗推荐（如果该犬种有推荐疫苗，标记在对应项note里）
  if (breedSlug) {
    const breed = breedBySlug(breedSlug);
    if (breed) {
      for (const entry of entries) {
        if (breed.vaccinePriority === "high-parvo" && entry.name.toLowerCase().includes("dhpp")) {
          entry.note += ` Extra important for ${breed.name}s: this breed has higher parvovirus susceptibility per AAHA guidelines.`;
        }
        if (breed.vaccinePriority === "high-lepto" && entry.name.toLowerCase().includes("lepto")) {
          entry.note += ` Particularly recommended for ${breed.name}s due to outdoor lifestyle and water exposure.`;
        }
        if (breed.vaccinePriority === "high-bordetella" && entry.name.toLowerCase().includes("bordetella")) {
          entry.note += ` Important for ${breed.name}s that are frequently groomed or socialized.`;
        }
        if (breed.vaccinePriority === "high-lyme" && entry.name.toLowerCase().includes("lyme")) {
          entry.note += ` ${breed.name}s in tick-heavy regions should prioritize this vaccine.`;
        }
      }
    }
  }

  entries.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  return entries;
}

export function nextDue(entries: ScheduleEntry[], today: Date = new Date()): ScheduleEntry | null {
  const future = entries.filter((e) => e.dueDate.getTime() >= today.getTime());
  return future.length ? future[0] : null;
}

/** 补充：检查下一个到期的加强针（做提醒用） */
export function nextBoosterDue(entries: ScheduleEntry[], today: Date = new Date()): ScheduleEntry | null {
  const boosters = entries.filter((e) => e.recurring && e.dueDate.getTime() > today.getTime());
  boosters.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  return boosters.length ? boosters[0] : null;
}

/** 判断狗狗是否进入老年期（> 7岁约364周） */
export function isSeniorDog(birthDate: Date, today: Date = new Date()): boolean {
  const ageWeeks = (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 7);
  return ageWeeks > 364; // 7年以上
}

// ── 犬种数据（矩阵A · v2.0反雷同版）────────────────────────
export type VaccinePriority = "standard" | "high-parvo" | "high-lepto" | "high-bordetella" | "high-lyme";

export interface Breed {
  slug: string;
  name: string;
  size: "Small" | "Medium" | "Large" | "Giant";
  weightLbs: string;
  lifespanYears: string;
  healthNotes: string;
  vaccineNote: string;
  /** 品种特有健康风险（一段独立描述，反雷同） */
  breedRisks: string;
  /** 推荐额外疫苗 */
  recommendedVaccines: string;
  /** 品种剂量提醒 */
  dosageNote: string;
  /** 各阶段疫苗重点（分puppy/adult/senior） */
  ageStageGuide: string;
  /** 品种疫苗优先级（用于时间线自动标注） */
  vaccinePriority: VaccinePriority;
  /** 该品种寿命+各阶段疫苗（反雷同独有内容） */
  lifespanVaccineMap: string;
}

export const BREEDS: Breed[] = [
  {
    slug: "labrador", name: "Labrador Retriever", size: "Large", weightLbs: "55-80 lbs", lifespanYears: "10-12",
    healthNotes: "Prone to hip and elbow dysplasia, obesity and ear infections from their love of water.",
    vaccineNote: "Active, social Labs that swim and visit parks are good candidates for leptospirosis and Bordetella.",
    breedRisks: "Labradors have a higher-than-average risk of ear infections (otitis externa) due to their floppy ears and love of water. Obesity is the number one preventable health issue in the breed, shortening lifespan by up to 2 years.",
    recommendedVaccines: "Core DHPP + rabies, plus leptospirosis (water exposure) and Bordetella (social/boarding).",
    dosageNote: "Standard dose for large breed. Weight should be monitored as Labs gain easily. Ensure vaccine doses are weight-appropriate at each visit.",
    ageStageGuide: "Puppy (0-1yr): Complete DHPP series on time, start heartworm at 8 weeks. Adult (1-7yr): DHPP every 3 years, annual lepto if swimming. Senior (7+yr): Consider titer testing, continue core on vet's advice, watch weight to protect joints.",
    vaccinePriority: "high-lepto",
    lifespanVaccineMap: "0-1yr (puppy series): DHPP x3, rabies x1, bordetella x1, lepto x2. 1-7yr (adult): DHPP booster every 3yr, rabies every 1-3yr, lepto annual, bordetella annual. 7-10yr (senior): Same schedule unless health conditions require adjustment. 10-12yr (geriatric): Discuss titer testing with vet to minimize unnecessary vaccines.",
  },
  {
    slug: "german-shepherd", name: "German Shepherd", size: "Large", weightLbs: "50-90 lbs", lifespanYears: "9-13",
    healthNotes: "Watch for hip dysplasia and degenerative myelopathy; a sensitive stomach is common.",
    vaccineNote: "Working and protection-trained Shepherds with outdoor exposure benefit from full core plus risk-based shots.",
    breedRisks: "German Shepherds are genetically predisposed to degenerative myelopathy (DM), a progressive spinal cord disease with no cure. Hip dysplasia affects roughly 20% of the breed. They also have higher rates of exocrine pancreatic insufficiency (EPI) and bloat (GDV).",
    recommendedVaccines: "Core DHPP + rabies, plus leptospirosis (outdoor exposure) and Lyme if in tick regions.",
    dosageNote: "Standard large breed dose. Monitor for vaccine reactions given breed's known sensitive immune system. Space vaccines if dog has history of GI sensitivity.",
    ageStageGuide: "Puppy (0-1yr): Begin DHPP at 6-8 weeks, be strict on 3-4 week intervals. Adult (1-7yr): Maintain DHPP and rabies. Senior (7+yr): Watch for mobility changes, continue prevention but discuss reduced vaccine frequency.",
    vaccinePriority: "high-lepto",
    lifespanVaccineMap: "0-1yr: DHPP x3-4, rabies, lepto x2, bordetella. 1-7yr: DHPP every 3yr, rabies every 1-3yr, lepto annual. 7-9yr: Continue as adult, add mobility monitoring. 9-13yr: Consider titer panel, minimize stress at vet visits.",
  },
  {
    slug: "golden-retriever", name: "Golden Retriever", size: "Large", weightLbs: "55-75 lbs", lifespanYears: "10-12",
    healthNotes: "Higher cancer risk than average, plus hip dysplasia and skin allergies.",
    vaccineNote: "Outdoorsy Goldens that hike and swim should stay current on lepto and Lyme in tick country.",
    breedRisks: "Golden Retrievers have the highest cancer rate of any breed, with roughly 60% dying from cancer (hemangiosarcoma, lymphoma, osteosarcoma). Skin allergies (atopic dermatitis) are also extremely common and often require lifelong management.",
    recommendedVaccines: "Core DHPP + rabies. Add lepto (water-loving breed) and Lyme (outdoorsy). Discuss vaccine schedule timing with your vet given elevated cancer risk.",
    dosageNote: "Standard large breed dose. No special dosage adjustment needed. Schedule vet visits during cooler parts of the day as Goldens can overheat.",
    ageStageGuide: "Puppy: Complete DHPP series, start prevention early. Adult: Maintain schedule, annual wellness bloodwork to catch cancer markers early. Senior: Discuss whether to continue automatic boosters vs titer testing given cancer predisposition.",
    vaccinePriority: "high-lyme",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, lepto x2, Lyme if tick area, bordetella. 1-7yr: DHPP every 3yr, rabies every 1-3yr, lepto annual, Lyme annual, bordetella annual. 7-10yr: Consider titer, maintain prevention. 10-12yr: Minimize vaccines, prioritize comfort and mobility.",
  },
  {
    slug: "french-bulldog", name: "French Bulldog", size: "Small", weightLbs: "16-28 lbs", lifespanYears: "10-12",
    healthNotes: "Brachycephalic airway issues, spinal problems and heat sensitivity.",
    vaccineNote: "Keep vet visits low-stress and cool; core vaccines are essential, exercise-related shots less so.",
    breedRisks: "French Bulldogs suffer from Brachycephalic Obstructive Airway Syndrome (BOAS), making breathing difficult and heat tolerance extremely poor. Intervertebral disc disease (IVDD) is common in the breed's compact spine. They are also prone to skin fold dermatitis and allergies.",
    recommendedVaccines: "Core DHPP + rabies are essential. Non-core only as needed given the breed's generally indoor, low-exposure lifestyle.",
    dosageNote: "Small breed dose. Keep vaccines spaced to minimize stress. Never combine multiple vaccines with a stressful vet visit on a hot day. Use weight-appropriate doses.",
    ageStageGuide: "Puppy: Follow standard puppy schedule but keep vet visits calm and cool. Adult: Core vaccines on schedule. Bordetella only if boarding or frequent grooming. Senior: Same as adult, prioritize comfort over optional vaccines.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies at 14-16wk. Optional: bordetella. 1-7yr: DHPP every 3yr, rabies every 1-3yr, bordetella if needed. 7-10yr: Continue core, skip optional vaccines, manage airway during vet visits. 10-12yr: Minimize handling stress, core only.",
  },
  {
    slug: "poodle", name: "Poodle", size: "Medium", weightLbs: "10-70 lbs", lifespanYears: "12-15",
    healthNotes: "Standard Poodles can have bloat and hip dysplasia; toys can have dental and knee issues.",
    vaccineNote: "Frequently groomed Poodles should stay current on Bordetella for kennel cough.",
    breedRisks: "Standard Poodles carry risk for bloat (GDV), Addison's disease, and sebaceous adenitis (a skin condition). Toy and Miniature Poodles are prone to patellar luxation, dental crowding, and progressive retinal atrophy (PRA). All sizes have higher rates of epilepsy than average.",
    recommendedVaccines: "Core DHPP + rabies. Bordetella is important for all sizes due to frequent grooming visits. Lepto for Standards that swim or hike.",
    dosageNote: "Dose varies by size: Toy (2-5 lbs) gets small-breed dosing, Miniature (10-15 lbs) small/medium, Standard (40-70 lbs) standard large breed. Confirm your vet uses weight-appropriate doses.",
    ageStageGuide: "Puppy: Start DHPP at 6-8 weeks. Tiny Toys need careful timing and spacing. Adult: Maintain core schedule. Bordetella annually. Senior (10+yr): Poodles age well but monitor for Addison's. Discuss titer testing.",
    vaccinePriority: "high-bordetella",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, bordetella, lepto (Standard). 1-10yr: DHPP every 3yr, rabies every 1-3yr, bordetella annual. 10-12yr: Core on schedule, optional as needed. 12-15yr: Discuss titers, prioritize comfort.",
  },
  {
    slug: "beagle", name: "Beagle", size: "Small", weightLbs: "18-30 lbs", lifespanYears: "12-15",
    healthNotes: "Prone to obesity, ear infections and epilepsy; a nose that leads them into trouble.",
    vaccineNote: "Scent-driven Beagles that roam outdoors are exposed to wildlife, so lepto can be worth discussing.",
    breedRisks: "Beagles are extremely food-motivated and prone to obesity, which exacerbates their risk of intervertebral disc disease. Ear infections are common due to floppy ears trapping moisture. Epilepsy is more prevalent in Beagles than most other breeds, with onset usually between 6 months and 3 years.",
    recommendedVaccines: "Core DHPP + rabies. Discuss lepto (outdoor roaming exposure) and Lyme (tick areas).",
    dosageNote: "Small/medium breed dose. Keep weight in check at every vet visit as this directly affects vaccine efficacy and anesthesia safety.",
    ageStageGuide: "Puppy: Standard puppy schedule. Start prevention early. Adult: Core vaccines, lepto if roaming. Fight obesity to protect spine. Senior (10+yr): Continue core, discuss titer. Watch for age-related epilepsy changes.",
    vaccinePriority: "high-lepto",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, lepto x2, bordetella (if social). 1-10yr: DHPP every 3yr, rabies every 1-3yr, lepto annual. 10-12yr: Continue core, optional as needed. 12-15yr: Titer consideration, maintain prevention.",
  },
  {
    slug: "rottweiler", name: "Rottweiler", size: "Large", weightLbs: "80-135 lbs", lifespanYears: "8-10",
    healthNotes: "Hip and elbow dysplasia, heart conditions and a known parvovirus susceptibility as puppies.",
    vaccineNote: "The parvo risk makes finishing the full DHPP puppy series especially important for Rottweilers.",
    breedRisks: "Rottweilers have a well-documented genetic susceptibility to parvovirus. Studies show they are significantly more likely to contract parvo than other breeds and may shed virus longer. They also have elevated rates of osteosarcoma (bone cancer), aortic stenosis, and ACL tears. Lifespan is shorter than average at 8-10 years.",
    recommendedVaccines: "Core DHPP + rabies is absolutely critical. Complete the full puppy DHPP series on strict timing. Consider an extra DHPP booster at 20 weeks per some AAHA guidance for high-risk breeds.",
    dosageNote: "Standard large/giant breed dose. Must use weight-appropriate dosing. Given parvo susceptibility, never delay or skip a puppy DHPP booster.",
    ageStageGuide: "Puppy: DHPP every 3-4 weeks without fail, starting at 6 weeks. Consider 4th DHPP at 18-20 weeks. Adult: DHPP every 3 years minimum. Senior (7+yr): Continue all core vaccines, early detection bloodwork for cancer.",
    vaccinePriority: "high-parvo",
    lifespanVaccineMap: "0-1yr: DHPP x3-4 (critical), rabies at 14-16wk, lepto x2, bordetella. 1-7yr: DHPP every 3yr, rabies every 1-3yr, lepto annual. 7-8yr: Continue all core. 8-10yr: Cancer screening priority, core vaccines maintained per vet.",
  },
  {
    slug: "dachshund", name: "Dachshund", size: "Small", weightLbs: "11-32 lbs", lifespanYears: "12-16",
    healthNotes: "Intervertebral disc disease (back problems) is the signature risk; keep them lean.",
    vaccineNote: "Core vaccines protect this long-lived breed through many years of life.",
    breedRisks: "Intervertebral Disc Disease (IVDD) affects roughly 25% of Dachshunds and is the breed's most serious health threat. One bad jump can rupture a disc and cause paralysis requiring emergency surgery ($5,000-$10,000). Obesity dramatically increases IVDD risk. Dental disease is also extremely common in the breed.",
    recommendedVaccines: "Core DHPP + rabies. Non-core vaccines only as needed. Avoid unnecessary vet visits that stress the spine during transport.",
    dosageNote: "Small breed dose (standard Dachshund) or tiny dose (miniature). Ensure weight-based dosing. Avoid intramuscular injections near the spine when possible; discuss injection site with your vet.",
    ageStageGuide: "Puppy: Standard DHPP series, careful handling to protect developing spine. Adult: Core vaccines. Surgical dental cleanings as needed. Senior (10+yr): Core vaccines, monitor back health, weight management critical.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, optional non-core. 1-10yr: DHPP every 3yr, rabies every 1-3yr. 10-12yr: Continue core, back-safe handling. 12-16yr: Titer consideration for this exceptionally long-lived breed.",
  },
  {
    slug: "yorkshire-terrier", name: "Yorkshire Terrier", size: "Small", weightLbs: "4-7 lbs", lifespanYears: "13-16",
    healthNotes: "Dental disease, collapsing trachea and low blood sugar in puppies.",
    vaccineNote: "Tiny Yorkies need careful, well-spaced puppy shots; talk to your vet about timing.",
    breedRisks: "Yorkshire Terriers are prone to hypoglycemia (low blood sugar) as puppies, which can be triggered by the stress of vet visits and vaccinations. Collapsing trachea is common, worsened by pulling on a collar. Dental disease affects nearly all Yorkies by age 3 without preventive care. Portosystemic shunt (liver shunt) is a breed-specific congenital defect.",
    recommendedVaccines: "Core DHPP + rabies. Non-core vaccines rarely needed given small size and typically indoor lifestyle.",
    dosageNote: "Tiny breed dose (1-2 lbs puppies need careful dosing). Do not give full-size doses to tiny Yorkies. Space vaccines at least 3 weeks apart to reduce stress. Ensure puppy has eaten before vet visits to prevent hypoglycemia.",
    ageStageGuide: "Puppy: DHPP series with careful spacing and monitoring for low blood sugar. Adult: Core vaccines, focus on dental care. Senior (10+yr): Continue core, monitor trachea health.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3 carefully spaced, rabies at 14-16wk. 1-10yr: DHPP every 3yr, rabies every 1-3yr. 10-13yr: Continue core. 13-16yr: Discuss titers, gentle handling essential.",
  },
  {
    slug: "boxer", name: "Boxer", size: "Large", weightLbs: "50-80 lbs", lifespanYears: "10-12",
    healthNotes: "Higher cancer risk, heart conditions (boxer cardiomyopathy) and brachycephalic traits.",
    vaccineNote: "Athletic, social Boxers usually need Bordetella and benefit from a complete core schedule.",
    breedRisks: "Boxer cardiomyopathy (ARVC) is a breed-specific heart condition that causes sudden death in apparently healthy adult dogs. Cancer rates are high, particularly mast cell tumors and lymphoma. Boxers are brachycephalic, making them heat-sensitive and higher-risk for anesthesia. Hip dysplasia is also common.",
    recommendedVaccines: "Core DHPP + rabies. Bordetella for social Boxers. Discuss lepto if outdoorsy.",
    dosageNote: "Standard large breed dose. Keep vet visits calm and cool due to brachycephalic airway. Monitor for 30 minutes post-vaccine given breed's sensitivity to adverse reactions.",
    ageStageGuide: "Puppy: Follow standard puppy schedule, keep visits cool. Adult: Core vaccines, annual cardiac check. Senior (7+yr): Continue core, discuss titer, focus on heart and cancer screening.",
    vaccinePriority: "high-bordetella",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, bordetella, lepto if active. 1-7yr: DHPP every 3yr, rabies every 1-3yr, bordetella annual. 7-10yr: Core vaccines, cardiac monitoring priority. 10-12yr: Minimize stress, core only.",
  },
  {
    slug: "chihuahua", name: "Chihuahua", size: "Small", weightLbs: "2-6 lbs", lifespanYears: "14-16",
    healthNotes: "Dental crowding, collapsing trachea, low blood sugar and a soft spot in the skull.",
    vaccineNote: "Very small dogs benefit from gentle, carefully timed core vaccines.",
    breedRisks: "Chihuahuas are the smallest dog breed and face unique risks: hypoglycemia in puppies can be life-threatening, moleras (persistent fontanel/skull soft spot) are common and make head trauma a serious concern, and collapsing trachea is widespread. Dental disease is nearly universal without aggressive preventive care. Luxating patella affects many.",
    recommendedVaccines: "Core DHPP + rabies. Non-core vaccines generally unnecessary for indoor, small dogs.",
    dosageNote: "Tiny breed dose essential. 2-lb puppy should not receive the same vaccine volume as a 20-lb dog. Ensure your vet adjusts for weight. Space vaccines to minimize systemic stress on a tiny body.",
    ageStageGuide: "Puppy: Very careful DHPP series with weight-adjusted doses, ensure fed before visits. Adult: Core vaccines, dental care paramount. Senior (10+yr): Core only, gentle handling.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3 with tiny doses, rabies at 14-16wk. 1-10yr: DHPP every 3yr, rabies every 1-3yr. 10-14yr: Continue core. 14-16yr: Titers strongly recommended for oldest Chihuahuas.",
  },
  {
    slug: "husky", name: "Siberian Husky", size: "Medium", weightLbs: "35-60 lbs", lifespanYears: "12-14",
    healthNotes: "Eye conditions (cataracts), hip dysplasia and a strong urge to run and escape.",
    vaccineNote: "Outdoor, high-mileage Huskies are good candidates for lepto and Lyme depending on region.",
    breedRisks: "Siberian Huskies are prone to juvenile cataracts, corneal dystrophy, and progressive retinal atrophy (PRA), making annual eye exams important. They have a very high prey drive and escape tendency, increasing exposure to wildlife and road accidents. Zinc-responsive dermatosis is a breed-specific skin condition. They are relatively healthy otherwise.",
    recommendedVaccines: "Core DHPP + rabies. Add leptospirosis (outdoor exposure), Lyme (tick regions), and Bordetella (if social/boarding).",
    dosageNote: "Standard medium breed dose. No special dosing needed. Huskies are generally hardy with few vaccine reactions reported.",
    ageStageGuide: "Puppy: Standard DHPP series, start heartworm at 8 weeks. Adult: Core + lepto and Lyme if outdoorsy. Senior (10+yr): Continue core, monitor eyes and hips.",
    vaccinePriority: "high-lyme",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, lepto x2, Lyme if tick country. 1-10yr: DHPP every 3yr, rabies every 1-3yr, lepto annual, Lyme annual. 10-12yr: Continue core, optional as needed. 12-14yr: Discuss titers, maintain prevention.",
  },
  {
    slug: "corgi", name: "Pembroke Welsh Corgi", size: "Small", weightLbs: "22-31 lbs", lifespanYears: "12-13",
    healthNotes: "Back problems from the long spine, plus obesity and hip dysplasia.",
    vaccineNote: "Keep Corgis lean and current on core shots throughout their long lives.",
    breedRisks: "Corgis have the same IVDD risk as Dachshunds due to their long back and short legs (chondrodystrophic). Obesity is extremely common and directly worsens both back problems and hip dysplasia. Degenerative myelopathy (DM) is also found in the breed. Von Willebrand's disease (a bleeding disorder) occurs in some lines.",
    recommendedVaccines: "Core DHPP + rabies. Non-core as needed based on lifestyle. Weight management is more important than optional vaccines for this breed.",
    dosageNote: "Small/medium breed dose at the lower end of adult weight. Keep weight strictly controlled. Injection site should avoid spine area when possible.",
    ageStageGuide: "Puppy: DHPP series, careful handling of long back. Adult: Core vaccines, strict weight control to protect spine and hips. Senior (9+yr): Core vaccines, mobility support.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, optional non-core. 1-9yr: DHPP every 3yr, rabies every 1-3yr. 9-12yr: Continue core, spine-safe handling. 12-13yr: Discuss titers.",
  },
  {
    slug: "pitbull", name: "American Pit Bull Terrier", size: "Medium", weightLbs: "30-65 lbs", lifespanYears: "12-14",
    healthNotes: "Skin allergies, hip dysplasia and a parvovirus susceptibility as puppies.",
    vaccineNote: "As with other susceptible breeds, completing the full parvo/DHPP series is critical.",
    breedRisks: "American Pit Bull Terriers share the parvovirus susceptibility documented in Rottweilers and other bully breeds. Skin allergies (atopic dermatitis) are severe and widespread in the breed, often requiring lifelong management with diet, medication, and medicated baths. They also have higher rates of ACL tears and hip dysplasia. Demodectic mange is more common in young Pits.",
    recommendedVaccines: "Core DHPP + rabies is essential. Complete the full DHPP puppy series. Discuss lepto if outdoorsy.",
    dosageNote: "Standard medium/large breed dose. Given parvo susceptibility, do not delay or skip any puppy DHPP booster. Ensure proper weight-based dosing at each visit.",
    ageStageGuide: "Puppy: Strict DHPP series every 3-4 weeks without fail through 16+ weeks. Adult: Core vaccines, manage allergies. Senior (9+yr): Continue core, monitor hip and joint health.",
    vaccinePriority: "high-parvo",
    lifespanVaccineMap: "0-1yr: DHPP x3-4 (strict), rabies at 14-16wk, lepto x2, bordetella. 1-9yr: DHPP every 3yr, rabies every 1-3yr, lepto annual. 9-12yr: Core vaccines per vet. 12-14yr: Titer consideration.",
  },
  {
    slug: "shih-tzu", name: "Shih Tzu", size: "Small", weightLbs: "9-16 lbs", lifespanYears: "10-16",
    healthNotes: "Brachycephalic airway issues, dental crowding and eye problems.",
    vaccineNote: "Frequently groomed Shih Tzus should keep Bordetella current.",
    breedRisks: "Shih Tzus are brachycephalic with all the attendant breathing, heat sensitivity and anesthesia risks. Their prominent eyes are prone to proptosis (eye popping out of socket from minor trauma), corneal ulcers, and dry eye. Dental crowding in their small mouth leads to early and severe periodontal disease. Patellar luxation is common.",
    recommendedVaccines: "Core DHPP + rabies. Bordetella is important for dogs that visit groomers monthly.",
    dosageNote: "Small breed dose. Keep vet visits cool and stress-free. Eye protection is important during handling. Space vaccines to minimize stress on brachycephalic system.",
    ageStageGuide: "Puppy: Standard DHPP series with cooling breaks. Adult: Core vaccines, Bordetella annually for groomed dogs. Senior (10+yr): Core only, discuss titers.",
    vaccinePriority: "high-bordetella",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, bordetella. 1-10yr: DHPP every 3yr, rabies every 1-3yr, bordetella annual. 10-14yr: Continue core. 14-16yr: Titers recommended, core on vet advice.",
  },
  {
    slug: "australian-shepherd", name: "Australian Shepherd", size: "Medium", weightLbs: "40-65 lbs", lifespanYears: "12-15",
    healthNotes: "MDR1 drug sensitivity, eye conditions and hip dysplasia.",
    vaccineNote: "Hardworking Aussies on farms and trails are exposed to wildlife and ticks; discuss lepto and Lyme.",
    breedRisks: "Australian Shepherds carry the MDR1 gene mutation at high frequency, making them sensitive to many common drugs including some parasite preventives and sedatives. Collie Eye Anomaly (CEA), cataracts, and progressive retinal atrophy affect the breed. Epilepsy rates are elevated. Hip dysplasia is common in working lines.",
    recommendedVaccines: "Core DHPP + rabies. Lepto and Lyme are important for outdoor working Aussies.",
    dosageNote: "Standard medium breed dose. Inform your vet of the breed's MDR1 status before any medication is prescribed. Most vaccines are not affected by MDR1 but sedation may be needed for anxious dogs.",
    ageStageGuide: "Puppy: Standard DHPP series. Adult: Core + lepto/Lyme for working dogs. Senior (10+yr): Continue core, watch eyes and hips.",
    vaccinePriority: "high-lyme",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, lepto x2, Lyme if tick area. 1-10yr: DHPP every 3yr, rabies every 1-3yr, lepto/Lyme annual. 10-12yr: Core on schedule. 12-15yr: Discuss titers.",
  },
  {
    slug: "border-collie", name: "Border Collie", size: "Medium", weightLbs: "30-55 lbs", lifespanYears: "12-15",
    healthNotes: "Eye conditions (CEA), epilepsy, hip dysplasia and a need for serious exercise.",
    vaccineNote: "Active, outdoorsy Border Collies benefit from full core plus risk-based vaccines.",
    breedRisks: "Border Collies share the MDR1 drug sensitivity and Collie Eye Anomaly of other herding breeds. Epilepsy is notably more common than in most breeds, with onset typically between 1-5 years. Hip dysplasia, OCD (osteochondritis dissecans), and deafness also appear. Their extreme exercise needs mean they are almost always outdoor, high-exposure dogs.",
    recommendedVaccines: "Core DHPP + rabies. Lepto and Lyme are important for this outdoorsy, high-exposure breed.",
    dosageNote: "Standard medium breed dose. Check MDR1 status. No special vaccine considerations beyond standard.",
    ageStageGuide: "Puppy: DHPP series, start prevention early given outdoor lifestyle. Adult: Core + lepto/Lyme annually. Senior (10+yr): Continue core, adjust for any mobility or seizure issues.",
    vaccinePriority: "high-lepto",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, lepto x2, Lyme if tick area, bordetella. 1-10yr: DHPP every 3yr, rabies every 1-3yr, lepto/Lyme annual. 10-12yr: Core on schedule. 12-15yr: Discuss titers.",
  },
  {
    slug: "great-dane", name: "Great Dane", size: "Giant", weightLbs: "110-175 lbs", lifespanYears: "7-10",
    healthNotes: "Bloat (GDV) is the major risk, along with heart disease and joint problems.",
    vaccineNote: "Giant breeds grow fast; keep the core schedule on track during rapid puppy growth.",
    breedRisks: "Great Danes have the shortest lifespan of common breeds at 7-10 years. Bloat/GDV is the number one killer, and owners should know the signs and have an emergency plan. Dilated cardiomyopathy (DCM) is common. Bone cancer (osteosarcoma) rates are elevated. Their rapid growth as puppies makes them prone to panosteitis (growing pains) and HOD (hypertrophic osteodystrophy).",
    recommendedVaccines: "Core DHPP + rabies. Discuss lepto if outdoor exposure warrants it. Given short lifespan, focus on core vaccines.",
    dosageNote: "Giant breed dose by weight. Some vets use the same vaccine volume as for smaller large breeds due to vaccine formulation limits. Confirm with your vet. Puppy vaccine timing is critical during the rapid growth phase.",
    ageStageGuide: "Puppy: DHPP on strict schedule through rapid growth. Adult (1-5yr): Core vaccines. Senior (5+yr): Core only, cancer and heart screening priority.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3-4, rabies, lepto if needed. 1-5yr: DHPP every 3yr, rabies every 1-3yr. 5-7yr: Senior-consider titer, core on vet advice. 7-10yr: Geriatric, minimize interventions.",
  },
  {
    slug: "pomeranian", name: "Pomeranian", size: "Small", weightLbs: "3-7 lbs", lifespanYears: "12-16",
    healthNotes: "Collapsing trachea, dental disease and patellar luxation.",
    vaccineNote: "Tiny Poms need gentle, well-timed core vaccines from a trusted vet.",
    breedRisks: "Pomeranians are prone to collapsing trachea, especially if walked on a collar instead of a harness. Alopecia X (black skin disease) causes symmetrical hair loss without itching. Dental disease is severe due to their tiny crowded mouths. Hypoglycemia affects Pom puppies. Patellar luxation is nearly universal.",
    recommendedVaccines: "Core DHPP + rabies only in most cases. Non-core rarely needed.",
    dosageNote: "Tiny breed dose absolutely essential. 3-lb dog must receive weight-adjusted vaccine volume. Never combine multiple vaccines in one visit for smallest Poms. Use harness, not collar.",
    ageStageGuide: "Puppy: DHPP with smallest possible doses and careful monitoring. Adult: Core vaccines, dental cleanings. Senior (10+yr): Core only, gentle handling.",
    vaccinePriority: "standard",
    lifespanVaccineMap: "0-1yr: DHPP x3 with tiny doses, rabies at 14-16wk. 1-10yr: DHPP every 3yr, rabies every 1-3yr. 10-14yr: Continue core. 14-16yr: Discuss titer testing.",
  },
  {
    slug: "cavalier-king-charles", name: "Cavalier King Charles Spaniel", size: "Small", weightLbs: "13-18 lbs", lifespanYears: "9-14",
    healthNotes: "Mitral valve heart disease and syringomyelia are the signature concerns.",
    vaccineNote: "Gentle, social Cavaliers visiting groomers and parks usually need Bordetella.",
    breedRisks: "Mitral Valve Disease (MVD) affects nearly all Cavaliers by age 10 and is the leading cause of death. Syringomyelia (SM) is a severe neurological condition caused by skull malformation, affecting up to 70% of the breed to some degree and causing extreme pain. Episodic Falling Syndrome and dry eye are also breed-specific issues.",
    recommendedVaccines: "Core DHPP + rabies. Bordetella for social dogs. Discuss whether the stress of non-core vaccines outweighs benefit given breed's health burden.",
    dosageNote: "Small breed dose. Keep vet visits calm and short. Avoid handling that pressures the neck or head given syringomyelia risk. Discuss with vet whether the annual exam can be a low-stress consultation.",
    ageStageGuide: "Puppy: Gentle DHPP series, careful handling of head and neck. Adult: Core vaccines, annual cardiac auscultation. Senior (7+yr): Core on vet advice only, minimize stress.",
    vaccinePriority: "high-bordetella",
    lifespanVaccineMap: "0-1yr: DHPP x3, rabies, bordetella. 1-7yr: DHPP every 3yr, rabies every 1-3yr, bordetella annual. 7-9yr: Senior cardiac priority, core per vet. 9-14yr: Geriatric, minimize all interventions.",
  },
];

export const BREED_SLUGS = BREEDS.map((b) => b.slug);
export const breedBySlug = (slug: string) => BREEDS.find((b) => b.slug === slug);

// ── 主题数据（矩阵B · v2.0 扩展版）────────────────────────
export interface Topic {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  faq: { q: string; a: string }[];
}

export const TOPICS: Topic[] = [
  {
    slug: "puppy-vaccine-schedule",
    title: "2026 Puppy Vaccine Schedule: Week-by-Week Shots (6 to 16 Weeks)",
    metaTitle: "2026 Puppy Vaccine Schedule — Week-by-Week Shots (6 to 16 Weeks)",
    metaDescription: "Complete 2026 puppy vaccine schedule: DHPP, rabies, Bordetella and more at 6, 8, 10, 12, 14 and 16 weeks. When each shot is due and why. Educational only.",
    intro: "Puppies get their first shots between 6 and 8 weeks of age and finish the core series at 16 weeks. Here is the standard 2026 week-by-week schedule most U.S. vets follow, based on AAHA guidelines.",
    body: [
      "A new puppy's immune system starts out protected by antibodies from its mother's milk. Those maternal antibodies fade over the first few months, but they also block vaccines from working fully, which is exactly why puppy shots are given as a series of boosters every 3 to 4 weeks rather than as a single shot. By repeating the DHPP combination at roughly 6-8, 10-12 and 14-16 weeks, your vet makes sure the puppy is protected the moment its own immune system can respond.",
      "DHPP is the backbone of the puppy series. It covers distemper, hepatitis (canine adenovirus), parvovirus and parainfluenza, four diseases that are common, contagious and often fatal to unvaccinated puppies. Parvovirus in particular is a major killer of young dogs, so finishing all three or four DHPP doses on time is one of the most important things you can do for your puppy. Breeds such as Rottweilers, Pit Bulls and Dobermans have a documented higher parvovirus susceptibility and should never miss a booster.",
      "Rabies is a core vaccine legally required in every U.S. state. It is usually given once between 12 and 16 weeks, then boostered a year later and every 1 to 3 years after that depending on state law. Non-core vaccines such as Bordetella (kennel cough), leptospirosis and Lyme disease are added based on your puppy's lifestyle and where you live. For example, a puppy that will go to dog daycare needs Bordetella, and a puppy in the Northeast near woods and ticks should get Lyme.",
      "Until the series is complete around 16 weeks, keep your puppy away from dog parks, pet stores and other high-traffic places where unvaccinated dogs gather. Socialization is still critically important, so focus on safe, controlled settings with healthy, fully vaccinated adult dogs you know. Puppy classes that require proof of vaccination are a great option. The 8-16 week window is the prime socialization period and missing it can lead to lifelong behavioral issues.",
      "After the final puppy shot at 16 weeks, most vets recommend waiting about one week before taking your puppy to public dog spaces to ensure full immunity has developed. At that point your puppy is ready for the wider world with solid protection against the most dangerous canine diseases.",
    ],
    faq: [
      { q: "When do puppies get their first shots in 2026?", a: "The first DHPP shot is usually given at 6 to 8 weeks of age, with boosters every 3 to 4 weeks until 16 weeks, per current AAHA 2026 guidelines." },
      { q: "How many rounds of shots do puppies need?", a: "Most puppies get three to four rounds of DHPP between 6 and 16 weeks, plus a rabies shot at 12 to 16 weeks. High-risk breeds like Rottweilers may benefit from a fourth DHPP at 18-20 weeks." },
      { q: "Can my puppy go outside before vaccines are done?", a: "Avoid dog parks and high-traffic dog areas until about a week after the final 16-week shots. Controlled socialization with healthy, vaccinated dogs in private settings is fine and important during the critical 8-16 week window." },
      { q: "What if I miss a puppy booster by a week or two?", a: "Don't panic. Contact your vet and resume the schedule. A short delay is better than skipping entirely. Your vet may adjust the remaining timing slightly." },
      { q: "Why does my puppy need so many DHPP shots?", a: "Maternal antibodies from the mother's milk block vaccines from working. The repeated doses ensure protection kicks in exactly when those antibodies fade, which varies from puppy to puppy." },
      { q: "Is the 2026 puppy vaccine schedule different from previous years?", a: "The core schedule remains stable. In 2026 the AAHA continues to recommend the same 6-16 week DHPP series. Newer non-core vaccines like canine influenza vaccines may be discussed based on regional outbreaks." },
    ],
  },
  {
    slug: "dog-deworming-schedule",
    title: "2026 Dog Deworming Schedule: Puppy to Adult Timeline",
    metaTitle: "2026 Dog Deworming Schedule — Puppy to Adult Worming Timeline",
    metaDescription: "How often to deworm a dog in 2026: puppies every 2 weeks until 12 weeks, monthly to 6 months, then every 3 months. Complete deworming guide. Educational only.",
    intro: "Puppies are almost always born with intestinal worms, so deworming starts early and often. Here is the standard 2026 timeline from a 2-week-old puppy to an adult dog, based on AAHA and CAPC guidelines.",
    body: [
      "Most puppies pick up roundworms and hookworms from their mother before they are even born or through her milk, which is why deworming begins at about 2 weeks of age. From there, puppies are typically dewormed every 2 weeks until 12 weeks old, then monthly until they are 6 months old. This aggressive early schedule clears the heavy worm burdens young puppies carry and prevents environmental contamination.",
      "Once a dog reaches adulthood, the schedule relaxes. Most adult dogs are dewormed every 3 months (four times a year), although dogs that hunt, scavenge or live with young children may need more frequent treatment. Many monthly heartworm preventives also control common intestinal worms, so ask your vet whether your dog's heartworm product covers deworming too. Products like Heartgard Plus and Interceptor Plus combine heartworm prevention with intestinal worm control.",
      "Signs that a dog may have worms include a pot-bellied appearance (especially in puppies), visible worms or rice-like segments in the stool, scooting, weight loss despite a good appetite, and a dull coat. Some worms are zoonotic, meaning they can spread to people, so regular deworming protects your family as well as your dog. Roundworms in particular can cause visceral larva migrans in children.",
      "Tapeworms require a different medication than roundworms and hookworms, and are usually contracted from fleas. If you see small rice-like segments near your dog's tail or in their stool, that's likely tapeworm. Your vet will prescribe praziquantel for tapeworms specifically. Keeping your dog on flea prevention is the best way to prevent tapeworms.",
      "In 2026, the Companion Animal Parasite Council (CAPC) continues to recommend year-round broad-spectrum parasite control for all dogs in the United States. This includes heartworm prevention that covers intestinal parasites where possible, plus regular fecal testing at annual vet visits.",
    ],
    faq: [
      { q: "How often should I deworm my dog in 2026?", a: "Puppies every 2 weeks until 12 weeks, then monthly to 6 months. Adult dogs every 3 months (four times per year). Dogs with higher exposure may need more frequent deworming." },
      { q: "Do heartworm pills also kill intestinal worms?", a: "Many monthly heartworm preventives also control roundworms and hookworms. Check the label or ask your vet whether yours covers intestinal worms. Products vary in their spectrum of coverage." },
      { q: "Can dog worms spread to humans?", a: "Yes. Roundworms, hookworms and some tapeworms are zoonotic. Children are at highest risk. Regular deworming, immediate stool cleanup, and good hand hygiene protect your whole family." },
      { q: "What's the difference between deworming and heartworm prevention?", a: "Heartworm prevention targets heartworm larvae in the bloodstream. Deworming targets adult intestinal worms (roundworms, hookworms, whipworms, tapeworms) in the gut. They are separate medications though some products cover both." },
      { q: "How do I know if my dog has worms?", a: "Look for visible worms in stool, rice-like segments near the tail, scooting, pot-bellied appearance in puppies, weight loss, dull coat, vomiting, or diarrhea. A fecal test at the vet is the most reliable diagnosis." },
      { q: "Can I use natural dewormers instead of medication?", a: "There is limited scientific evidence for natural dewormers. Prescription dewormers are proven safe and effective. Some worms are zoonotic, so effective treatment protects your family. Discuss any concerns with your vet." },
    ],
  },
  {
    slug: "rabies-vaccine",
    title: "2026 Rabies Vaccine for Dogs: Schedule, Laws and Requirements",
    metaTitle: "2026 Rabies Vaccine for Dogs — Schedule, Cost and State Laws",
    metaDescription: "When dogs need the rabies vaccine in 2026, how often boosters are required, state-by-state laws, and what happens if you miss a booster. Educational only.",
    intro: "Rabies is the only dog vaccine required by law in all 50 U.S. states. Here is the complete 2026 guide to when your dog needs it, how often boosters are due, and what each state requires.",
    body: [
      "Rabies is a fatal viral disease that attacks the brain and can spread to any mammal, including humans. It is nearly 100% fatal once symptoms appear, which is why it is the one canine vaccine mandated by law nationwide. Puppies usually get their first rabies shot between 12 and 16 weeks of age. A second dose is given one year later, and after that boosters are due every 1 to 3 years depending on your state's law and the specific vaccine your vet uses.",
      "Because rabies is a legal requirement, your vet will give you a rabies certificate and a tag. Keep these in a safe place; you will need proof of vaccination to license your dog, board it, travel, or in some areas simply to walk it in public. Letting a rabies vaccine lapse can mean fines, and if your dog bites someone, an unvaccinated dog faces a much longer mandatory quarantine (typically 10 days for vaccinated dogs versus up to 6 months for unvaccinated dogs).",
      "Three-year rabies vaccines are common for adult dogs and are just as effective as annual versions. The difference is in how the product is labeled and what your state recognizes. As of 2026, all 50 states recognize the 3-year rabies vaccine for adult dogs, though some cities and counties still mandate annual boosters. Check with your local animal control for municipal-level requirements.",
      "If your dog has had a serious adverse vaccine reaction in the past, talk to your vet about options. Pre-treatment with antihistamines, spacing vaccines apart, or in rare cases a medical exemption letter may be appropriate. Never skip a legally required rabies vaccine without documented veterinary guidance.",
      "For international travel, rabies requirements become much more complex. Rabies-free countries like the UK, Australia, Japan and Hawaii require a rabies antibody titer test (FAVN) performed at an approved lab months before travel, plus a microchip implanted before the rabies vaccine. Plan at least 4-6 months ahead for international pet travel.",
    ],
    faq: [
      { q: "When does a puppy get its first rabies shot in 2026?", a: "Usually between 12 and 16 weeks of age, followed by a booster one year later. This has not changed for 2026." },
      { q: "How often do dogs need a rabies booster?", a: "After the one-year booster, every 1 to 3 years depending on your state law and the vaccine used. All 50 states recognize 3-year vaccines for adults as of 2026." },
      { q: "Is the rabies vaccine required by law?", a: "Yes. Rabies vaccination is required for dogs in all 50 U.S. states. Penalties for lapsed vaccination include fines and extended quarantine if your dog bites someone." },
      { q: "What happens if my dog misses a rabies booster?", a: "Contact your vet immediately. Most states allow a short grace period. If too much time passes, your vet may need to give a 1-year vaccine instead and restart the schedule. A lapsed vaccine also voids your dog's license in most jurisdictions." },
      { q: "Can my dog be exempt from the rabies vaccine?", a: "Medical exemptions exist in some states for dogs with documented severe vaccine reactions or serious illness. A licensed veterinarian must issue the exemption. Exempt dogs still face restrictions and extended bite quarantines." },
      { q: "Does my indoor-only dog need a rabies vaccine?", a: "Yes. The law does not distinguish between indoor and outdoor dogs. Bats can enter homes, and indoor dogs can escape. All states require rabies vaccination regardless of lifestyle." },
    ],
  },
  {
    slug: "dhpp-vaccine",
    title: "2026 DHPP Vaccine for Dogs: Complete Protection Guide",
    metaTitle: "2026 DHPP Vaccine for Dogs — What It Covers and Schedule",
    metaDescription: "What the DHPP vaccine protects against in 2026: distemper, hepatitis, parvovirus, parainfluenza. Puppy schedule, adult boosters and breed-specific risks. Educational only.",
    intro: "DHPP is the core combination vaccine every dog needs. It protects against four serious diseases in a single shot. Here is the complete 2026 guide to what it covers and when it's due.",
    body: [
      "DHPP stands for Distemper, Hepatitis (canine adenovirus), Parvovirus and Parainfluenza. You may also see it written as DA2PP, DAPP or DHPPV; they all cover the same core diseases. Combining them into one shot means fewer injections for your dog and reliable protection against illnesses that are common, highly contagious and frequently fatal in unvaccinated dogs.",
      "Puppies get DHPP as a series of boosters every 3 to 4 weeks, starting at 6-8 weeks and finishing at 14-16 weeks. The series is needed because maternal antibodies interfere with the vaccine early on, so repeated doses ensure protection takes hold as those antibodies fade. After the puppy series, a booster is given at about one year, and then most adult dogs are revaccinated every 3 years.",
      "Of the four diseases, parvovirus is the most dangerous to puppies. It attacks rapidly dividing cells in the gut and bone marrow, causing severe vomiting, bloody diarrhea, and immune system collapse. Without intensive care, mortality is over 90%. Certain breeds (Rottweilers, Pit Bulls, Dobermans, Labrador Retrievers) have a genetic susceptibility that makes parvo even more dangerous. Distemper attacks the respiratory, gastrointestinal and nervous systems and is frequently fatal.",
      "Hepatitis (canine adenovirus type 1) causes liver damage and can be rapidly fatal. Parainfluenza is one of the agents responsible for kennel cough and while rarely fatal alone, contributes to contagious respiratory disease complexes. The DHPP vaccine has been used for decades and has an excellent safety record.",
      "In 2026, AAHA guidelines continue to recommend DHPP as a core vaccine for every dog, with the 3-year adult booster interval backed by challenge studies showing durable immunity. Some vets offer antibody titer testing as an alternative to automatic 3-year boosters for healthy adult dogs, especially seniors.",
    ],
    faq: [
      { q: "What does DHPP protect against?", a: "Distemper, hepatitis (canine adenovirus), parvovirus and parainfluenza, four serious and often fatal canine diseases." },
      { q: "How often does a dog need DHPP in 2026?", a: "Puppies get a series every 3-4 weeks until 16 weeks, a booster at one year, then most adults every 3 years per current AAHA guidelines." },
      { q: "Is DHPP the same as DA2PP?", a: "Yes. DHPP, DA2PP, DAPP and DHPPV are different labels for the same core combination vaccine protecting against the same four diseases." },
      { q: "Which breeds need extra DHPP protection?", a: "Rottweilers, Pit Bulls, Doberman Pinschers and Labrador Retrievers have documented higher parvovirus susceptibility. Some vets recommend a fourth DHPP booster at 18-20 weeks for these breeds." },
      { q: "Can adult dogs skip the DHPP booster?", a: "Not recommended. While immunity can last longer than 3 years in some dogs, the 3-year interval is based on challenge studies showing protection wanes after that point. Titer testing can help determine if your individual dog still has immunity." },
      { q: "Are there side effects to the DHPP vaccine?", a: "Most dogs have no side effects. Mild soreness at the injection site, low-grade fever or reduced appetite for 24 hours is possible. Severe allergic reactions are very rare. Contact your vet if your dog vomits, has facial swelling or difficulty breathing post-vaccine." },
    ],
  },
  {
    slug: "heartworm-prevention",
    title: "2026 Heartworm Prevention for Dogs: Complete Monthly Guide",
    metaTitle: "2026 Heartworm Prevention for Dogs — Monthly Schedule and Testing",
    metaDescription: "2026 heartworm prevention guide: why monthly year-round prevention matters, when to start, which products, annual testing. Heartworm disease is easier to prevent than treat. Educational only.",
    intro: "Heartworm disease is spread by mosquitoes and is far easier to prevent than to treat. Prevention is a simple monthly routine. Here is the complete 2026 guide to keeping your dog protected.",
    body: [
      "Heartworms are spread by a single mosquito bite. The larvae travel through the bloodstream and grow into worms up to a foot long that live in the heart and pulmonary arteries, causing lasting damage to the heart, lungs and blood vessels. Treatment for an active infection costs $1,000-$3,000, is painful for the dog, requires strict crate rest for months, and carries its own risks, while prevention is a small monthly chewable or topical that costs $5-$15 per month.",
      "Most vets recommend heartworm prevention year-round, even in colder states, because mosquitoes can appear during warm spells and a single missed window can be enough for infection. Puppies can usually start prevention at about 8 weeks of age. Because the medication works by clearing recent larvae rather than killing adult worms, consistency matters: a missed or late dose can leave a gap in protection.",
      "An annual heartworm test is recommended even for dogs on year-round prevention. The test detects adult female heartworms in the bloodstream. It catches rare breakthrough infections early, when treatment is far safer, and most preventive manufacturers require recent negative testing to honor their product guarantee. Never start prevention in a dog that may already be infected without testing first, as a sudden die-off of microfilariae can cause a dangerous shock-like reaction.",
      "In 2026, the most commonly prescribed heartworm preventives include Heartgard Plus (ivermectin/pyrantel), Interceptor Plus (milbemycin oxime/praziquantel), Simparica Trio (sarolaner/moxidectin/pyrantel), and ProHeart injections (moxidectin) that last 6 or 12 months. All require a veterinary prescription. Your vet will recommend the best option based on your dog's age, weight, lifestyle and whether you also need flea/tick and intestinal worm coverage in the same product.",
      "Resistance to heartworm preventives has been documented in some areas of the Mississippi Delta, though it appears to be due to missed doses rather than true drug resistance in most cases. The American Heartworm Society continues to recommend year-round prevention for all dogs in all 50 states as of 2026.",
    ],
    faq: [
      { q: "How often is heartworm prevention given in 2026?", a: "Most preventives are given once a month, year-round, starting around 8 weeks of age. ProHeart injections offer 6 or 12 months of protection from a single vet visit." },
      { q: "Does my dog need a heartworm test if it's on prevention?", a: "Yes. An annual heartworm test is recommended by the American Heartworm Society to catch rare breakthrough infections early and to keep product guarantees valid. It is a simple blood test." },
      { q: "Can I skip heartworm prevention in winter?", a: "Most vets and the American Heartworm Society advise year-round prevention. Mosquitoes can appear in warm spells, and a single missed dose creates a protection gap. Prevention is far cheaper and safer than treatment." },
      { q: "What's the best heartworm preventive for my dog?", a: "There is no single best product. Your vet will recommend based on your dog's weight, age, whether you also want flea/tick coverage, and cost. All FDA-approved products are effective when given on schedule." },
      { q: "What happens if I miss a monthly dose?", a: "Give the missed dose immediately and resume the monthly schedule. Contact your vet if more than 2 months have been missed, as a heartworm test may be needed before restarting to ensure no infection developed during the gap." },
      { q: "How much does heartworm treatment cost vs prevention?", a: "Treatment costs $1,000-$3,000 and requires months of strict crate rest. Prevention costs $5-$15 per month. The math is overwhelmingly in favor of prevention." },
    ],
  },
  {
    slug: "senior-dog-vaccines",
    title: "2026 Senior Dog Vaccine Guide: What Changes After Age 7",
    metaTitle: "2026 Senior Dog Vaccine Guide — Vaccines, Titers and Health for Older Dogs",
    metaDescription: "Complete 2026 guide to vaccines for senior dogs: which to continue, which to adjust, titer testing explained, and special considerations for dogs over 7. Educational only.",
    intro: "Dogs are considered seniors around age 7, and their vaccine needs change. Some vaccines remain essential, others can be reconsidered. Here is the 2026 complete guide to keeping your older dog protected safely.",
    body: [
      "Senior dogs are not just older versions of adult dogs; their immune systems change with age. A condition called immunosenescence means the immune response can become less robust, potentially making vaccines less effective. At the same time, older dogs are more likely to have chronic conditions (kidney disease, heart disease, arthritis, cancer) that make vaccine decisions more nuanced. The blanket schedule that works for a healthy 3-year-old may not be right for a 10-year-old with early kidney disease.",
      "Core vaccines (DHPP and rabies) generally continue for senior dogs, though the frequency may be adjusted. Many vets offer antibody titer testing as an alternative to automatic boosters for dogs over 7-10 years old. A titer test measures the level of circulating antibodies against a specific disease. If titers are protective, a booster can be deferred. This approach reduces the vaccine burden on an aging immune system while still ensuring protection.",
      "Rabies remains legally required regardless of age, so it cannot be skipped. However, the 3-year vaccine is preferred over annual for seniors when possible to reduce vet-visit stress. For dogs with documented health conditions, some states allow medical exemption from rabies boosters, though this comes with restrictions on the dog's activities.",
      "Non-core vaccines like Bordetella, leptospirosis and Lyme should be carefully evaluated for seniors. A 12-year-old dog that no longer goes to daycare or dog parks probably doesn't need Bordetella. A 10-year-old Lab that still swims daily may still need leptospirosis. Each non-core vaccine should be a conversation, not an automatic renewal.",
      "Heartworm prevention and flea/tick control remain critical for seniors. Older dogs tolerate heartworm treatment very poorly (the strict crate rest is harder on arthritic joints, and the treatment drugs are riskier for dogs with compromised organ function). Prevention is even more important for seniors than for young adult dogs.",
      "The best approach for a senior dog's vaccine plan is an annual senior wellness exam with bloodwork. Complete blood count, chemistry panel, urinalysis and thyroid testing give your vet the data they need to decide which vaccines are safe and which can be deferred. This is also the time to discuss your dog's lifestyle changes: is your senior still hiking? Still boarding? Still at the dog park? Let the real-life exposure risk guide the decision, not the default schedule.",
    ],
    faq: [
      { q: "At what age is a dog considered a senior for vaccine purposes?", a: "Generally around 7 years old, though this varies by breed. Giant breeds (Great Danes, Mastiffs) are seniors by 5-6, while small breeds (Chihuahuas, Toy Poodles) may not be considered senior until 10-11." },
      { q: "Do senior dogs still need DHPP boosters?", a: "Most vets continue DHPP but may switch to titer testing for dogs over 7-10 years old. A protective titer result means the booster can be deferred." },
      { q: "What is antibody titer testing and should I do it for my senior dog?", a: "A titer test is a blood test measuring existing antibody levels against vaccine-preventable diseases. For senior dogs, it can help avoid unnecessary boosters while confirming continued protection. It costs roughly $50-$150 depending on your vet." },
      { q: "Is the rabies vaccine still required for senior dogs?", a: "Yes, rabies is legally required at any age. However, the 3-year vaccine is preferred over annual for seniors. Some states offer medical exemptions for dogs with serious health conditions." },
      { q: "Should my senior dog still get Bordetella?", a: "Only if lifestyle warrants it. A senior who still goes to daycare, boarding or frequent grooming should stay current. A homebody senior who only walks in the neighborhood can usually skip it." },
      { q: "Is heartworm prevention still important for older dogs?", a: "More important than ever. Senior dogs tolerate heartworm treatment very poorly, so prevention is critical. A missed dose has much higher stakes for a 10-year-old dog than a 2-year-old dog." },
      { q: "What are the signs my senior dog had a vaccine reaction?", a: "Mild reactions (soreness, mild fever, reduced appetite for 24 hours) are normal. Serious reactions (vomiting, facial swelling, difficulty breathing, collapse) require immediate veterinary attention. Senior dogs with existing health conditions are at slightly higher risk of adverse reactions." },
      { q: "How do I make vet visits easier for my senior dog?", a: "Schedule morning appointments when it's cooler, use a ramp for getting in and out of the car, bring a familiar blanket, ask for a low-stress exam room, and discuss whether vaccines and bloodwork can be done in the same visit to minimize trips." },
    ],
  },
  {
    slug: "titer-test-dogs",
    title: "2026 Dog Titer Testing Guide: When Vaccines Can Be Deferred",
    metaTitle: "2026 Dog Titer Testing Explained — DHPP, Rabies and When to Defer Boosters",
    metaDescription: "Complete 2026 guide to antibody titer testing for dogs. What titers measure, how much they cost, when they can replace automatic boosters, and what AAHA recommends. Educational only.",
    intro: "Titer testing measures your dog's antibody levels to determine if they still have immunity from previous vaccines. In 2026, many vets offer titers as an alternative to automatic boosters, especially for senior dogs. Here is how it works.",
    body: [
      "A vaccine titer (pronounced TIE-ter) is a blood test that measures the level of circulating antibodies against a specific disease. The most common titer test for dogs checks immunity against the three viruses in the DHPP vaccine: distemper, parvovirus and adenovirus (hepatitis). A positive titer indicates your dog still has protective immunity from a previous vaccination or natural exposure, meaning a booster shot can potentially be deferred.",
      "Titer testing has gained mainstream acceptance in veterinary medicine. The 2022 AAHA Canine Vaccination Guidelines acknowledge that a positive titer for distemper, parvovirus and adenovirus indicates protective immunity and that automatic 3-year boosters are not always necessary when titers are monitored. Many vets now offer titer testing as a standard option during annual wellness visits for adult dogs, particularly for clients who prefer to minimize their dog's vaccine load.",
      "There are important caveats. A titer test does not tell you when immunity will wane or expire; it only tells you immunity is present on that day. Rabies titers are not legally accepted in place of vaccination in any U.S. state, though they are accepted for international travel to some rabies-free countries. The rabies vaccine must still be given on schedule by law. Titer testing also cannot predict protection against Bordetella, leptospirosis or Lyme disease, as these non-core vaccines work through different immune mechanisms.",
      "Cost is a practical consideration. A DHPP titer test typically costs $50-$150 through your veterinarian, compared to $20-$40 for the DHPP booster itself. For some owners, the peace of mind of knowing immunity is present is worth the cost difference. For others, the booster is more economical. Neither choice is wrong. In 2026, in-clinic titer test kits (similar to in-clinic heartworm tests) are becoming more available, which can reduce cost and provide results before you leave the appointment.",
      "The strongest case for titer testing is in senior dogs (over 7-10 years old) who have received regular boosters throughout their lives. These dogs likely have robust, long-lasting immunity and face higher risks from vaccine reactions due to age-related health conditions. A senior dog with stable titers who no longer has high-risk exposure (no boarding, no daycare, limited outdoor time) is an excellent candidate for reduced vaccine frequency guided by titer results.",
    ],
    faq: [
      { q: "What is a dog vaccine titer test?", a: "A blood test that measures antibody levels against distemper, parvovirus and adenovirus (hepatitis). A positive result means your dog has protective immunity and a DHPP booster can potentially be deferred." },
      { q: "How much does titer testing cost in 2026?", a: "Typically $50-$150 for a DHPP panel through your veterinarian. In-clinic rapid titer tests are becoming available at lower cost. The DHPP booster itself costs $20-$40, so it is a cost vs peace-of-mind decision." },
      { q: "Can a titer test replace the rabies vaccine?", a: "No. Rabies titers are not legally accepted in place of vaccination in any U.S. state. The rabies vaccine must be given on schedule by law regardless of titer results." },
      { q: "How long do vaccine titers last in dogs?", a: "It varies dramatically by individual. Some dogs maintain protective titers for 5-7+ years after a single DHPP booster. Others see titers drop after 3 years. This is exactly why testing is useful: it tells you about your specific dog." },
      { q: "Does AAHA recommend titer testing in 2026?", a: "The AAHA guidelines acknowledge positive titers as evidence of protective immunity for distemper, parvovirus and adenovirus, and support using titers as an alternative to automatic 3-year boosters when discussed with the owner." },
      { q: "Can puppies use titer testing instead of the full DHPP series?", a: "No. Puppies must complete the full DHPP series on schedule (through 16 weeks). Titer testing is used afterward to confirm the series worked and later to determine whether adult boosters are needed." },
    ],
  },
];

export const TOPIC_SLUGS = TOPICS.map((t) => t.slug);
export const topicBySlug = (slug: string) => TOPICS.find((t) => t.slug === slug);

// ── 站点常量 ────────────────────────────────────────────────
export const SITE = {
  name: "PupVax",
  domain: "pupvax.com",
  url: "https://pupvax.com",
  tagline: "2026 Dog Vaccine & Deworming Schedule Tracker",
};

export const VET_DISCLAIMER =
  "Medical Disclaimer: This information is for educational purposes only and is not a substitute for professional veterinary advice, diagnosis or treatment. Vaccine schedules are generalized estimates based on AAHA and AVMA guidelines. Your dog's individual needs depend on breed, age, health status, lifestyle and local disease risk. Always consult your veterinarian about your dog's specific vaccination and health needs. Never delay or avoid veterinary care because of information you read on this website. If you think your dog has a medical emergency, contact your veterinarian or an emergency animal hospital immediately.";
