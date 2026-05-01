import Image from "next/image";
import { IOReveal } from "@/components/IOReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

const services = [
  {
    icon: <FaucetIcon />,
    title: "Badeværelse",
    description:
      "Komplet installation og renovering. Fra blandingsbatterier og toiletter til gulvvarme og bruseafløb.",
  },
  {
    icon: <RadiatorIcon />,
    title: "Varmeanlæg",
    description:
      "Etablering og service af centralvarmesystemer, radiatorer og gulvvarme. Vi arbejder med alle typer anlæg.",
  },
  {
    icon: <WaterIcon />,
    title: "Varmtvandsbeholder",
    description:
      "Montering og udskiftning af varmtvandsbeholdere og varmtvandsvekslere. Altid den rigtige løsning.",
  },
  {
    icon: <FlameIcon />,
    title: "Gasinstallation",
    description:
      "Certificeret gasfitterarbejde. Installation, eftersyn og fejlfinding på gasanlæg i hjem og erhverv.",
  },
  {
    icon: <PipeIcon />,
    title: "Kloak og afløb",
    description:
      "Stikledninger, brønde og afløbssystemer. Vi finder og løser problemer med tilstoppede afløb.",
  },
  {
    icon: <ShieldIcon />,
    title: "Serviceaftaler",
    description:
      "Fast tilknyttet VVS-mester til jævnligt eftersyn og hurtig udrykning. Rolig samvittighed hele året.",
  },
];

/* ─── Components ────────────────────────────────────────────────── */

function PhoneLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <a
      href="tel:+4597547600"
      className={className}
      style={style}
      aria-label="Ring til Vestfjends VVS: 97 54 76 00"
    >
      {children ?? "97 54 76 00"}
    </a>
  );
}

function Nav() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="font-bold"
          style={{
            color: "var(--text-on-dark)",
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "1.15rem",
            letterSpacing: "0.06em",
          }}
          aria-label="Vestfjends VVS — tilbage til toppen"
        >
          VESTFJENDS VVS
        </a>
        <nav aria-label="Primær navigation">
          <ul
            className="hidden items-center gap-6 text-sm font-medium sm:flex"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {["Ydelser", "Om os", "Kontakt"].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(" ", "-")}`}
                  className="transition-all hover:opacity-100"
                  style={{
                    color: "inherit",
                    opacity: 0.75,
                    padding: "0.3rem 0.85rem",
                    border: "1px solid oklch(42% 0.028 248)",
                    borderRadius: "0.3rem",
                    fontSize: "0.8rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <PhoneLink
          className="flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--amber)", color: "var(--navy)" }}
        >
          <PhoneIcon />
          <span className="hidden sm:inline">97 54 76 00</span>
          <span className="sm:hidden">Ring nu</span>
        </PhoneLink>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col justify-end pb-14 pt-28"
      style={{ backgroundColor: "var(--navy)", minHeight: "82vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=75"
          alt=""
          fill
          priority
          className="object-cover object-center scale-110"
          style={{ opacity: 0.38 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(22% 0.042 248 / 0.55) 0%, oklch(22% 0.042 248 / 0.93) 65%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-enter relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Company name — large display */}
        <p
          className="mb-3 font-bold leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            color: "var(--amber)",
          }}
          aria-hidden="true"
        >
          VESTFJENDS VVS
        </p>

        <h1
          id="hero-heading"
          className="mb-5 max-w-2xl font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text-on-dark)",
          }}
        >
          Lokal VVS-mester i Skive og omegn
        </h1>

        <p
          className="mb-9 max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-on-dark-muted)" }}
        >
          Vi løser VVS-opgaver for private og erhverv i Skive-området.
          Hurtigt svar, ryddeligt arbejde, ingen overraskelser på regningen.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <PhoneLink
            className="inline-flex items-center justify-center gap-3 rounded-sm px-8 py-4 text-xl font-bold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--amber)",
              color: "var(--navy)",
              minWidth: "200px",
            }}
          >
            <PhoneIcon size={20} />
            97 54 76 00
          </PhoneLink>
          <a
            href="mailto:info@vestfjendsvvs.dk"
            className="text-base font-medium transition-opacity hover:opacity-75"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            info@vestfjendsvvs.dk
          </a>
        </div>

        {/* Trust signals — replaces stamp */}
        <div
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase"
          style={{ color: "var(--text-on-dark-muted)", letterSpacing: "0.08em", opacity: 0.75 }}
        >
          <span className="flex items-center gap-2">
            <CheckIcon />
            Certificeret installatør
          </span>
          <span style={{ color: "var(--amber)", opacity: 0.5 }}>·</span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            Hurtigt svar
          </span>
          <span style={{ color: "var(--amber)", opacity: 0.5 }}>·</span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            Ærlig pris
          </span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="ydelser"
      aria-labelledby="ydelser-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <IOReveal className="absolute inset-0">
        <DecorativeTools />
      </IOReveal>
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <header className="reveal mb-14">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--amber)", letterSpacing: "0.1em" }}
          >
            Hvad vi laver
          </p>
          <h2
            id="ydelser-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--text-primary)",
            }}
          >
            Vores ydelser
          </h2>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col gap-4">
              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-sm"
                style={{ backgroundColor: "var(--surface-alt)", color: "var(--amber)" }}
              >
                {service.icon}
              </div>
              <div>
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="reveal mt-16 flex flex-col items-start justify-between gap-4 rounded-sm px-8 py-8 sm:flex-row sm:items-center"
          style={{ backgroundColor: "var(--surface-alt)" }}
        >
          <p className="font-medium" style={{ color: "var(--text-primary)" }}>
            Usikker på om vi kan hjælpe? Ring, så finder vi ud af det.
          </p>
          <PhoneLink
            className="flex shrink-0 items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--navy)", color: "var(--text-on-dark)" }}
          >
            <PhoneIcon size={16} />
            97 54 76 00
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="om-os"
      aria-labelledby="om-os-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Text — normal flow, constrained on large screens */}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="py-20 sm:py-28 lg:max-w-[52%]">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--amber)", letterSpacing: "0.1em" }}
          >
            Hvem er vi
          </p>
          <h2
            id="om-os-heading"
            className="reveal mb-8 text-4xl font-bold sm:text-5xl"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: "var(--text-on-dark)",
            }}
          >
            Vi kender huset.<br />Vi kender området.
          </h2>
          <div
            className="reveal space-y-5 text-base leading-relaxed"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            <p>
              Vestfjends VVS er en lokal VVS-installatørvirksomhed med base i
              Vridsted. Vi har løst opgaver for private og erhverv i
              Skive-området i mange år, og vi kender de huse, de rør og det
              vejr der følger med.
            </p>
            <p>
              Vi møder op til aftalt tid. Vi arbejder ordentligt og rydder op
              efter os. Og vi giver dig en ærlig pris, inden vi starter.
            </p>
            <p>
              Hvad vi kan, klarer vi selv. Vi sender dig ikke videre.
            </p>
          </div>
        </div>
      </div>

      {/* Video — stacked on mobile, absolutely fills right 44% on large screens */}
      <div className="relative min-h-72 overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-[44%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-parallax absolute inset-x-0 w-full object-cover"
          style={{ top: "-14%", height: "128%" }}
          src="https://videos.pexels.com/video-files/9890448/9890448-hd_1280_720_30fps.mp4"
        />
        {/* Opacity dampener — lowers video brightness */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(22% 0.042 248 / 0.52)" }}
        />
        {/* Left gradient bleed — navy into video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--navy) 0%, oklch(22% 0.042 248 / 0) 52%)",
          }}
        />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Giant typographic phone number — background layer */}
      <div
        className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="select-none leading-none tracking-tighter"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 800,
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "oklch(94% 0.006 248 / 0.04)",
            transform: "translateX(4%) translateY(12%)",
            whiteSpace: "nowrap",
          }}
        >
          97 54 76 00
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--amber)", letterSpacing: "0.1em" }}
        >
          Kontakt os
        </p>
        <h2
          id="kontakt-heading"
          className="mb-12 text-4xl font-bold sm:text-5xl"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            color: "var(--text-on-dark)",
          }}
        >
          Kom i kontakt
        </h2>

        <div className="reveal grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-on-dark-muted)", letterSpacing: "0.08em" }}
            >
              Telefon
            </h3>
            <PhoneLink
              className="text-2xl font-bold transition-opacity hover:opacity-80"
              style={{ color: "var(--amber)", fontFamily: "var(--font-barlow-condensed)" }}
            />
            <p className="mt-1 text-sm" style={{ color: "var(--text-on-dark-muted)" }}>
              Ring for aftale
            </p>
          </div>

          <div>
            <h3
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-on-dark-muted)", letterSpacing: "0.08em" }}
            >
              E-mail
            </h3>
            <a
              href="mailto:info@vestfjendsvvs.dk"
              className="text-lg font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--text-on-dark)" }}
            >
              info@vestfjendsvvs.dk
            </a>
          </div>

          <div>
            <h3
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-on-dark-muted)", letterSpacing: "0.08em" }}
            >
              Adresse
            </h3>
            <address className="not-italic text-lg leading-relaxed" style={{ color: "var(--text-on-dark)" }}>
              Dåsbjergvej 45A<br />7800 Skive
            </address>
          </div>
        </div>

        <div
          className="my-12"
          style={{ borderTop: `1px solid var(--border-dark)` }}
          role="separator"
        />

        <div className="reveal flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium" style={{ color: "var(--text-on-dark-muted)" }}>
            Har du et VVS-problem? Vi svarer hurtigt.
          </p>
          <PhoneLink
            className="flex items-center gap-3 rounded-sm px-8 py-4 text-xl font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amber)", color: "var(--navy)", whiteSpace: "nowrap" }}
          >
            <PhoneIcon size={20} />
            97 54 76 00
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-light)", borderTop: `1px solid var(--border-dark)` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:px-8">
        <span
          className="font-bold"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: "var(--text-on-dark)", letterSpacing: "0.05em" }}
        >
          VESTFJENDS VVS A/S
        </span>
        <span style={{ color: "var(--text-on-dark-muted)" }}>
          CVR 25094050 · Dåsbjergvej 45A, 7800 Skive
        </span>
      </div>
    </footer>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────── */

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FaucetIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h14" /><path d="M5 8a2 2 0 1 0-4 0v0a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v0a2 2 0 1 0-4 0" />
      <path d="M12 8v4" /><path d="M10 12h4" /><path d="M12 16a4 4 0 0 1-4-4" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  );
}

function RadiatorIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 6v12" /><path d="M10 6v12" /><path d="M14 6v12" /><path d="M18 6v12" />
      <path d="M2 12h20" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.5 6.5 3 10.5 3 14a9 9 0 0 0 18 0c0-3.5-3.5-7.5-9-12z" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function PipeIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* ─── Decorative illustrations ──────────────────────────────────── */

function DecorativeTools() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none h-full w-full"
      viewBox="0 0 1200 720"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--amber)" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.14">

        {/* Adjustable wrench — top left */}
        <g transform="translate(28, 32) rotate(-30)">
          <path strokeWidth="10" d="M52 8 Q52 0 64 0 L88 0 Q102 0 102 14 Q102 28 88 28 L64 28 Q52 28 52 20" />
          <line x1="52" y1="8" x2="52" y2="20" strokeWidth="10" />
          <line x1="52" y1="14" x2="-96" y2="14" strokeWidth="10" />
          <line x1="-26" y1="8" x2="-26" y2="20" strokeWidth="7" />
          <line x1="-50" y1="8" x2="-50" y2="20" strokeWidth="7" />
          <line x1="-76" y1="8" x2="-76" y2="20" strokeWidth="7" />
        </g>

        {/* Pipe elbow — top right */}
        <g transform="translate(978, 38) rotate(10)">
          <path strokeWidth="14" d="M0 82 L0 24 Q0 0 24 0 L82 0" />
          <path strokeWidth="14" d="M28 82 L28 32 Q28 28 32 28 L82 28" />
          <line x1="-12" y1="82" x2="40" y2="82" strokeWidth="12" />
          <line x1="82" y1="-12" x2="82" y2="40" strokeWidth="12" />
        </g>

        {/* Bathtub profile — top center */}
        <g transform="translate(370, 48) rotate(2) scale(0.95)">
          <path strokeWidth="9" d="M0 18 L0 55 Q0 88 48 88 L162 88 Q210 88 210 55 L210 18" />
          <line x1="-8" y1="18" x2="218" y2="18" strokeWidth="9" />
          <line x1="32" y1="88" x2="26" y2="110" strokeWidth="9" />
          <line x1="178" y1="88" x2="184" y2="110" strokeWidth="9" />
          <line x1="18" y1="18" x2="18" y2="-6" strokeWidth="9" />
          <line x1="6" y1="-6" x2="38" y2="-6" strokeWidth="8" />
        </g>

        {/* Radiator — right center */}
        <g transform="translate(902, 278) rotate(-6) scale(1.7)">
          <rect x="0" y="0" width="64" height="92" rx="5" strokeWidth="7" />
          <line x1="13" y1="0" x2="13" y2="92" strokeWidth="5" />
          <line x1="26" y1="0" x2="26" y2="92" strokeWidth="5" />
          <line x1="39" y1="0" x2="39" y2="92" strokeWidth="5" />
          <line x1="52" y1="0" x2="52" y2="92" strokeWidth="5" />
          <line x1="0" y1="46" x2="64" y2="46" strokeWidth="5" />
          <line x1="-7" y1="-14" x2="71" y2="-14" strokeWidth="11" />
          <line x1="-7" y1="106" x2="71" y2="106" strokeWidth="11" />
        </g>

        {/* Faucet/tap — bottom left */}
        <g transform="translate(40, 488) rotate(4)">
          <line x1="22" y1="8" x2="22" y2="96" strokeWidth="13" />
          <line x1="40" y1="8" x2="40" y2="96" strokeWidth="13" />
          <line x1="-22" y1="26" x2="84" y2="26" strokeWidth="10" />
          <circle cx="-22" cy="26" r="10" strokeWidth="8" />
          <circle cx="84" cy="26" r="10" strokeWidth="8" />
          <path strokeWidth="12" d="M40 82 Q98 82 98 114" />
          <path strokeWidth="12" d="M22 82 Q80 82 80 114" />
          <line x1="10" y1="8" x2="52" y2="8" strokeWidth="12" />
        </g>

        {/* Shower head — center left, angled */}
        <g transform="translate(148, 390) rotate(-18) scale(1.25)">
          {/* Arm pipe */}
          <line x1="0" y1="0" x2="28" y2="52" strokeWidth="10" />
          {/* Ball joint */}
          <circle cx="28" cy="52" r="9" strokeWidth="8" />
          {/* Head body */}
          <path strokeWidth="8" d="M8 66 Q4 96 22 102 L76 102 Q94 96 90 66 Q90 60 80 58 L18 58 Q8 60 8 66 Z" />
          {/* Water holes */}
          <circle cx="30" cy="74" r="3.5" strokeWidth="4.5" />
          <circle cx="49" cy="70" r="3.5" strokeWidth="4.5" />
          <circle cx="68" cy="74" r="3.5" strokeWidth="4.5" />
          <circle cx="38" cy="88" r="3.5" strokeWidth="4.5" />
          <circle cx="58" cy="88" r="3.5" strokeWidth="4.5" />
        </g>

        {/* Large water droplet — bottom right */}
        <g transform="translate(1058, 468) rotate(-10) scale(2.8)">
          <path strokeWidth="5" d="M18 2 Q34 22 34 34 Q34 52 18 54 Q2 52 2 34 Q2 22 18 2 Z" />
          <path strokeWidth="3" d="M11 38 Q7 30 9 23" />
        </g>

        {/* Small droplet — mid bottom */}
        <g transform="translate(688, 576) rotate(5) scale(1.5)">
          <path strokeWidth="4.5" d="M14 2 Q26 17 26 26 Q26 38 14 40 Q2 38 2 26 Q2 17 14 2 Z" />
        </g>

        {/* Pipe wrench handle — center right lower */}
        <g transform="translate(780, 478) rotate(-24) scale(1.1)">
          <path strokeWidth="10" d="M0 12 Q0 0 18 0 L46 0 Q64 0 64 12 Q64 18 54 22 L10 22 Q0 18 0 12 Z" />
          <path strokeWidth="10" d="M4 18 L4 108 Q4 118 14 118 L50 118 Q60 118 60 108 L60 18" />
          <line x1="4" y1="58" x2="60" y2="58" strokeWidth="6" />
          <line x1="4" y1="82" x2="60" y2="82" strokeWidth="6" />
        </g>

      </g>
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
