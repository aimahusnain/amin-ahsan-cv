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
  Link2,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
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
  banner,
  experience,
  expertise,
  keySkills,
  membership,
  profile,
  qualifications,
  skills,
  summary,
  whyAmin,
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
              <Contact icon={<Mail size={22} />}>{profile.email}</Contact>
              <Divider />
              <Contact icon={<Phone size={20} fill="currentColor" />}>{profile.phone}</Contact>
              <Divider />
              <Contact icon={<MapPin size={22} fill="currentColor" className="[&>circle]:fill-white" />}>
                <span className="block max-w-[250px] leading-snug">{profile.address}</span>
              </Contact>
            </ul>
            <ul className="mt-2.5 flex flex-col items-start gap-2.5 lg:flex-row lg:items-center lg:gap-x-4">
              <Contact icon={<Link2 size={20} />}>
                <a href={profile.link} className="break-all hover:underline">
                  {profile.link}
                </a>
              </Contact>
              <Divider />
              <Contact icon={<CalendarDays size={20} />}>{profile.dob}</Contact>
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

          {/* key skills */}
          <BarHeading className="mt-7">Key Skills</BarHeading>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm sm:text-base md:items-center md:gap-0">
            {keySkills.map((k, i) => (
              <li
                key={k}
                className={`rounded-sm bg-white px-3 py-1 shadow-[inset_0_0_0_1px_#a3a3a3] md:rounded-none md:bg-transparent md:py-0 md:shadow-none ${i > 0 ? "md:border-l md:border-neutral-700" : "md:pl-0"}`}
              >
                {k}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}