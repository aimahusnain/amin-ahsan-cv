import { Fragment } from "react";
import Image from "next/image";
import {
  Award,
  BarChart3,
  CalendarDays,
  Calculator,
  Coins,
  FileText,
  GraduationCap,
  Languages,
  Link2,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Quote,
  ShieldCheck,
  Ship,
  Target,
  TrendingUp,
  TriangleAlert,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  additional,
  areasOfExpertise,
  banner,
  experience,
  expertise,
  keySkills,
  languages,
  membership,
  moreSkills,
  profile,
  qualifications,
  recommendations,
  skills,
  summary,
  whyAmin,
  careerOpportunity,
} from "@/lib/data";

const icons: Record<(typeof skills)[number]["icon"], LucideIcon> = {
  trend: TrendingUp,
  calc: Calculator,
  target: Target,
  coins: Coins,
  shield: ShieldCheck,
  chart: BarChart3,
  ship: Ship,
  alert: TriangleAlert,
  file: FileText,
  users: Users,
  chat: MessagesSquare,
};

const slant =
  "[clip-path:polygon(0_0,100%_0,calc(100%-26px)_100%,0_100%)]";

/** Renders **bold** markers from the data file. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Black slanted bar heading (left column + key skills). */
function BarHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`bg-black py-2 pl-4 pr-10 font-[family-name:var(--font-heading)] text-xl font-bold uppercase tracking-wide text-white ${slant} ${className}`}
    >
      {children}
    </h2>
  );
}

/** Plain heading with a short black marker on the left. */
function MarkHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`border-l-[5px] border-black pl-3 font-[family-name:var(--font-heading)] text-lg font-bold uppercase leading-none tracking-wider sm:text-xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-snug">
      <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-black" />
      <span>{children}</span>
    </li>
  );
}

function Contact({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm sm:text-[15px]">
      <span className="shrink-0">{icon}</span>
      <span className="break-words">{children}</span>
    </li>
  );
}

const Divider = () => <span aria-hidden className="hidden h-6 w-px bg-black lg:block" />;

export default function Cv() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-[1100px] overflow-hidden bg-neutral-50 shadow-xl md:my-6 md:min-h-0">
      {/* faint diagonal accent, top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-[420px] w-[220px] bg-gradient-to-b from-neutral-200/70 to-transparent [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] md:block"
      />

      {/* ───────── Header ───────── */}
      <header className="relative">
        <div className="flex flex-col items-start gap-5 px-5 pb-6 pt-6 sm:px-8 md:flex-row md:items-stretch md:gap-0 md:px-0 md:pb-5 md:pt-12">
          <div className="md:w-[290px] md:shrink-0 md:pl-8 md:pr-4">
            <div className="relative aspect-square w-28 overflow-hidden bg-neutral-200 sm:w-40 md:w-full">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 768px) 250px, 160px"
                className="object-cover"
              />
            </div>
          </div>

          <div aria-hidden className="hidden w-px bg-neutral-800 md:block" />

          <div className="w-full text-left md:flex-1 md:pl-9 md:pr-8">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-extrabold min-[400px]:text-5xl leading-none tracking-tight sm:text-6xl lg:text-[80px]">
              {profile.name}
            </h1>
            <p className="mt-3 font-[family-name:var(--font-heading)] text-sm font-medium uppercase tracking-[0.1em] min-[400px]:text-base sm:text-xl sm:tracking-[0.18em] lg:text-[26px]">
              {profile.title}
            </p>
            <p className="mt-2 border-b border-neutral-300 pb-3 text-sm text-neutral-600 sm:text-base lg:text-lg">
              {profile.tagline.map((t, i) => (
                <Fragment key={t}>
                  <span className="whitespace-nowrap">
                    {t}
                    {i < profile.tagline.length - 1 && (
                      <span aria-hidden className="mx-1.5">
                        •
                      </span>
                    )}
                  </span>{" "}
                </Fragment>
              ))}
            </p>

            <ul className="mt-4 flex flex-col items-start gap-2.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-4 lg:gap-y-3">
              <Contact icon={<Mail size={22} />}>
                <a href={`mailto:${profile.email}`} className="break-all text-blue-600 hover:underline">
                  {profile.email}
                </a>
              </Contact>
              <Divider />
              <Contact icon={<Phone size={20} fill="currentColor" />}>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="text-blue-600 hover:underline">
                  {profile.phone}
                </a>
              </Contact>
              <Divider />
              <Contact icon={<MapPin size={22} fill="currentColor" className="[&>circle]:fill-white" />}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-[250px] leading-snug text-blue-600 hover:underline"
                >
                  {profile.address}
                </a>
              </Contact>
            </ul>
            <ul className="mt-2.5 flex flex-col items-start gap-2.5 lg:flex-row lg:items-center lg:gap-x-4">
              <Contact icon={<Link2 size={20} />}>
                <a href={profile.link} target="_blank" rel="noopener noreferrer" className="break-all text-blue-600 hover:underline">
                  {profile.link}
                </a>
              </Contact>
              <Divider />
              <Contact icon={<CalendarDays size={20} />}>DOB: {profile.dob}</Contact>
            </ul>
          </div>
        </div>
        <hr className="mx-5 border-t-2 border-neutral-800 sm:mx-8" />
      </header>

      {/* ───────── Body ───────── */}
      <div className="relative grid grid-cols-1 gap-8 px-5 pb-10 pt-6 sm:px-8 md:grid-cols-[35%_1fr] md:gap-0 md:px-0 md:pb-8">
        {/* Left column */}
        <aside className="order-2 border-t border-neutral-300 pt-6 md:order-1 md:border-t-0 md:pt-0 md:border-r md:border-neutral-800 md:pl-8 md:pr-5">
          <BarHeading>Core Strengths</BarHeading>
          <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 md:grid-cols-1">
            {skills.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li key={label} className="flex items-center gap-4 text-[15px] leading-tight">
                  <Icon size={26} strokeWidth={2} className="shrink-0" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>

          <hr className="my-6 border-t border-neutral-700" />

          <BarHeading>Qualifications</BarHeading>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {qualifications.map((q) => (
              <li key={q.code} className="flex items-start gap-4">
                <GraduationCap size={34} fill="currentColor" className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-bold leading-tight">
                    {q.code}
                  </p>
                  {q.field && <p className="text-sm italic text-neutral-600">{q.field}</p>}
                  <p className="text-sm leading-snug">{q.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <BarHeading className="mt-6">Membership</BarHeading>
          <div className="mt-4 flex items-center gap-4">
            <Award size={46} strokeWidth={1.6} className="shrink-0" />
            <div className="border-l border-neutral-700 pl-4">
              <p className="font-[family-name:var(--font-heading)] text-base font-semibold">
                {membership.title}
              </p>
              <p className="text-sm leading-snug">{membership.org}</p>
            </div>
          </div>

          <BarHeading className="mt-6">Languages</BarHeading>
          <ul className="mt-4 space-y-2">
            {languages.map((l) => (
              <li key={l.name} className="flex items-start gap-4 text-[15px] leading-tight">
                <Languages size={24} className="mt-0.5 shrink-0" />
                <span>
                  <strong className="font-semibold">{l.name}</strong>
                  {l.level && <span className="block text-sm text-neutral-600">{l.level}</span>}
                </span>
              </li>
            ))}
          </ul>

          <BarHeading className="mt-6">Key Skills</BarHeading>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {[...keySkills, ...moreSkills].map((k) => (
              <li
                key={k}
                className="rounded-sm bg-white px-2 py-0.5 text-xs shadow-[inset_0_0_0_1px_#a3a3a3] sm:text-[13px]"
              >
                {k}
              </li>
            ))}
          </ul>

          <BarHeading className="mt-6">Recommendations</BarHeading>
          <div className="mt-4 space-y-3">
            {recommendations.map((r) => (
              <figure key={r.name} className="border border-neutral-300 bg-white p-3">
                <Quote size={18} fill="currentColor" className="mb-1.5" />
                <blockquote className="text-sm italic leading-snug">{r.quote}</blockquote>
                <figcaption className="mt-2 text-sm leading-snug">
                  <strong className="font-semibold">{r.name}</strong>
                  <span className="block text-neutral-600">{r.role}</span>
                  <span className="block text-neutral-500">{r.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </aside>

        {/* Right column */}
        <section className="order-1 md:order-2 md:pl-6 md:pr-8">
          {/* banner */}
          <div
            className={`flex flex-col items-start gap-1 bg-black px-5 py-4 text-left text-white sm:flex-row sm:items-center sm:gap-6 sm:px-6 ${slant}`}
          >
            <p className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-none sm:text-5xl lg:text-[56px]">
              {banner.big}
            </p>
            <p className="text-base leading-snug sm:max-w-[260px] sm:border-l sm:border-white/70 sm:pl-6 sm:text-lg lg:text-xl">
              {banner.small}
            </p>
          </div>

          {/* why amin */}
          <MarkHeading className="mt-7">Why Amin?</MarkHeading>
          <p className="mt-3 text-[15px] leading-snug sm:text-base">{summary}</p>
          <ul className="mt-3 space-y-2">
            {whyAmin.map((t) => (
              <Bullet key={t}>
                <Rich text={t} />
              </Bullet>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Expertise">
            {expertise.map((e) => (
              <li
                key={e}
                className="rounded-sm bg-white px-2 py-0.5 text-xs shadow-[inset_0_0_0_1px_#a3a3a3] sm:text-[13px]"
              >
                {e}
              </li>
            ))}
          </ul>

          <p className="mt-5 border-l-4 border-black bg-neutral-200 px-4 py-3 text-sm leading-snug sm:text-[15px]">
            <strong className="font-semibold">Career opportunities:</strong> {careerOpportunity}
          </p>

          <h3 className="mt-6 font-[family-name:var(--font-heading)] text-base font-bold uppercase tracking-wider">
            Core Areas of Expertise
          </h3>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            {areasOfExpertise.map((a) => (
              <div key={a.label} className="border-t-2 border-black pt-2">
                <dt className="font-[family-name:var(--font-heading)] text-sm font-bold">{a.label}</dt>
                <dd className="mt-0.5 text-sm leading-snug text-neutral-700">{a.text}</dd>
              </div>
            ))}
          </dl>

          <hr className="my-6 border-t border-neutral-500" />

          {/* experience */}
          <MarkHeading>Professional Experience</MarkHeading>
          <div className="mt-4">
            {experience.map((job, i) => (
              <article
                key={job.company}
                className={i > 0 ? "mt-4 border-t border-neutral-400 pt-4" : ""}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold leading-snug sm:text-lg">
                      {job.company}
                    </h3>
                    <p className="text-base italic">{job.role}</p>
                    {job.meta && <p className="text-sm text-neutral-600">{job.meta}</p>}
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-sm font-medium text-neutral-600 sm:border-l sm:border-neutral-700 sm:pl-4 sm:text-base sm:font-normal sm:text-black">
                    {job.period}
                  </p>
                </div>

                <ul className="mt-2 space-y-1 pl-1">
                  {job.points.map((p) => (
                    <Bullet key={p}>
                      <Rich text={p} />
                    </Bullet>
                  ))}
                </ul>

                {job.achievement && (
                  <p className="mt-3 flex items-start gap-3 bg-neutral-200 px-3 py-2 text-sm sm:text-[15px]">
                    <Trophy size={20} className="shrink-0" fill="currentColor" />
                    <span>
                      <strong className="font-semibold">Major Achievement:</strong>{" "}
                      {job.achievement}
                    </span>
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* additional */}
          <MarkHeading className="mt-6 !text-base">Additional Experience</MarkHeading>
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="flex gap-3 text-sm leading-snug">
              <span aria-hidden className="mt-[6px] h-1.5 w-1.5 shrink-0 bg-black" />
              <span>{additional.text}</span>
            </p>
            <p className="shrink-0 whitespace-nowrap pl-[18px] text-sm text-neutral-600 sm:text-black sm:border-l sm:border-neutral-700 sm:pl-4">
              {additional.period}
            </p>
          </div>

          {additional.achievement && (
            <p className="mt-3 flex items-start gap-3 bg-neutral-200 px-3 py-2 text-sm sm:text-[15px]">
              <Trophy size={20} className="shrink-0" fill="currentColor" />
              <span>
                <strong className="font-semibold">Major Achievement:</strong> {additional.achievement}
              </span>
            </p>
          )}

        </section>
      </div>
    </main>
  );
}