import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Huggabowl: Buy a meal, give a meal" },
    {
      name: "description",
      content:
        "A volunteer-run food cart at Olympic Plaza in Calgary. Your $5 buys lunch for you and a second meal for a neighbour facing food insecurity. No questions asked.",
    },
  ];
}

const PRESS_QUOTES = [
  {
    headline:
      "Olympic Plaza food vendor pays it forward with free soup for those in need.",
    outlet: "CTV News",
    tilt: -1.2,
  },
  {
    headline:
      "Pay or don't: Calgary food stand seeks to address food insecurity.",
    outlet: "CityNews",
    tilt: 1.5,
  },
  {
    // TODO(content): replace with the actual CBC headline once confirmed.
    // docs/company.md notes an early-days CBC profile of the cart but does
    // not include the headline text. Grep `PRESS_QUOTES` to find this spot.
    headline: "A Calgary food cart that turns rescued soup into second meals.",
    outlet: "CBC News",
    tilt: 0.4,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <MathBeat />
      <CartBeat />
      <PressBeat />
      <DoorsBeat />
      <DonateStripe />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 md:py-32">
        <div className="stagger-in">
          <p className="font-display text-xs tracking-[0.28em] text-ink uppercase">
            Olympic Plaza &middot; Calgary
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink uppercase sm:text-7xl md:text-[5.5rem]">
            Buy a meal,{" "}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-0.15em] inset-y-[0.05em] -z-10 -rotate-[1.2deg] bg-neon"
              />
              <span className="relative">give a meal.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
            Hot soup from a volunteer-run cart at Olympic Plaza. Pay $5 for
            lunch and a second bowl goes to a neighbour facing food insecurity,
            no questions asked.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              to="/donate"
              className="group inline-flex items-center gap-3 border-2 border-ink bg-egg px-7 py-4 font-display text-base tracking-wider text-ink uppercase transition-colors hover:bg-egg-deep sm:text-lg"
            >
              Donate $5 = 2 meals
              <ArrowRight />
            </Link>
            <Link
              to="/visit-us"
              className="marker-underline inline-flex items-center px-1 py-2 text-base font-semibold tracking-wider text-ink uppercase"
            >
              Find the cart
            </Link>
          </div>
        </div>
      </div>
      <SteamMark
        className="pointer-events-none absolute -right-2 bottom-4 hidden h-28 w-28 text-egg md:block"
        aria-hidden
      />
    </section>
  );
}

function MathBeat() {
  return (
    <section className="border-b-2 border-ink bg-egg">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <p className="font-display text-xs tracking-[0.28em] text-ink uppercase">
          The math
        </p>
        <h2
          aria-label="Five dollars equals two meals."
          className="mt-6 font-display text-6xl leading-[0.9] tracking-tight text-ink uppercase sm:text-8xl md:text-[8.5rem]"
        >
          <span aria-hidden className="relative inline-block">
            <span
              aria-hidden
              className="absolute inset-x-[-0.12em] inset-y-[0.08em] -z-10 -rotate-2 bg-neon"
            />
            <span className="relative">$5</span>
          </span>{" "}
          <span aria-hidden className="font-marker text-ink">
            =
          </span>{" "}
          <span aria-hidden>2 meals.</span>
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start md:gap-6">
          <Step n="1" body="You buy a Huggabowl for $5." />
          <StepDivider />
          <Step n="2" body="We hand you lunch." />
          <StepDivider />
          <Step
            n="3"
            body="We hand a second bowl to a neighbour, no questions asked."
          />
        </div>
        <div className="mt-14">
          <Link
            to="/donate"
            className="inline-flex items-center gap-3 border-2 border-ink bg-bone px-7 py-4 font-display text-base tracking-wider text-ink uppercase transition-colors hover:bg-neon sm:text-lg"
          >
            Buy two meals
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Step({ n, body }: { n: string; body: string }) {
  return (
    <div>
      <p className="font-display text-5xl text-ink">{n}.</p>
      <p className="mt-3 max-w-xs text-lg leading-snug text-ink">{body}</p>
    </div>
  );
}

function StepDivider() {
  return (
    <div className="hidden self-center text-ink md:block" aria-hidden>
      <svg viewBox="0 0 64 24" className="h-6 w-16">
        <path
          d="M4 12 Q 20 6 36 14 T 58 11 M 52 6 L 60 11 L 52 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CartBeat() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-28 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <p className="font-display text-xs tracking-[0.28em] text-ink uppercase">
            At the cart
          </p>
          <h2 className="mt-6 max-w-md font-display text-5xl leading-tight tracking-tight text-ink uppercase sm:text-6xl">
            We park at Olympic Plaza.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink">
            Hours follow the cart's socials. Walk up, paying or not.
          </p>
          <div className="mt-8 inline-block border-2 border-ink bg-bone-deep px-6 py-5">
            <p className="text-xs font-bold tracking-widest text-fog uppercase">
              When we're open
            </p>
            <p className="mt-2 font-display text-2xl leading-tight text-ink uppercase">
              Seasonal &amp; weather-dependent
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink">
              Check Instagram or Facebook for the next pop-up.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/visit-us"
              className="inline-flex items-center gap-3 border-2 border-ink bg-bone px-6 py-3 font-display text-base tracking-wider text-ink uppercase transition-colors hover:bg-neon"
            >
              Find us
              <ArrowRight />
            </Link>
          </div>
        </div>
        {/*
          Beat 3 visual. v1 ships with the cart-silhouette SVG fallback on
          a robin-egg ground. Swap to a real photograph of the cart at
          Olympic Plaza when one is available. Aspect target: 4/5 on
          desktop, 5/4 on mobile.
        */}
        <div className="relative order-1 aspect-[5/4] overflow-hidden border-2 border-ink bg-egg md:order-2 md:aspect-[4/5]">
          <CartSilhouette
            aria-hidden
            className="absolute inset-0 m-auto h-2/3 w-2/3 text-bone"
          />
          <div className="absolute right-3 bottom-3 border-2 border-ink bg-bone px-3 py-1 font-display text-[0.65rem] tracking-widest text-ink uppercase">
            Photo coming soon
          </div>
        </div>
      </div>
    </section>
  );
}

function PressBeat() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <p className="inline-block -rotate-1 bg-neon px-3 py-1.5 font-display text-xs tracking-[0.25em] text-ink uppercase">
          What people said
        </p>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {PRESS_QUOTES.map((q) => (
            <PressQuote key={q.outlet} {...q} />
          ))}
        </div>
        <p className="mt-14">
          <Link
            to="/stories"
            className="marker-underline inline-flex items-center px-1 text-sm font-bold tracking-widest text-ink uppercase"
          >
            Read every clip
          </Link>
        </p>
      </div>
    </section>
  );
}

function PressQuote({
  headline,
  outlet,
  tilt,
}: {
  headline: string;
  outlet: string;
  tilt: number;
}) {
  return (
    <figure
      className="text-ink"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <blockquote className="font-display text-xl leading-[1.15] tracking-tight uppercase sm:text-2xl">
        <span aria-hidden className="mr-1 font-marker text-egg-deep">
          &ldquo;
        </span>
        {headline}
        <span aria-hidden className="ml-1 font-marker text-egg-deep">
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-5 text-xs font-bold tracking-widest text-fog uppercase">
        {outlet}
      </figcaption>
    </figure>
  );
}

function DoorsBeat() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <p className="font-display text-xs tracking-[0.28em] text-ink uppercase">
          More ways in
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <DoorPanel
            to="/volunteer"
            eyebrow="Volunteer"
            heading="Cook with us."
            body="We need home cooks, retired chefs, students, and drivers willing to pick up rescued food."
            cta="Volunteer"
            background="bg-egg"
            hoverBackground="hover:bg-egg-deep"
            className="md:col-span-6"
            sizeClass="md:min-h-[26rem]"
            mark={(cls) => (
              <KnifeMark
                aria-hidden
                className={`${cls} transition-transform group-hover:translate-x-1`}
              />
            )}
          />
          <DoorPanel
            to="/catering"
            eyebrow="Catering"
            heading="Cater your next thing."
            body="Every booking funds many give-away meals."
            cta="Get a quote"
            background="bg-neon"
            hoverBackground="hover:bg-neon-deep"
            className="md:col-span-3"
            sizeClass="md:min-h-[26rem]"
            mark={(cls) => (
              <BoxMark
                aria-hidden
                className={`${cls} transition-transform group-hover:translate-y-1`}
              />
            )}
          />
          <DoorPanel
            to="/stories"
            eyebrow="Stories"
            heading="Read the press."
            body="CBC, CTV, CityNews. The cart, on the record."
            cta="Stories"
            background="bg-bone-deep"
            hoverBackground="hover:bg-bone"
            className="md:col-span-3"
            sizeClass="md:min-h-[26rem]"
            mark={(cls) => (
              <NewsprintMark
                aria-hidden
                className={`${cls} transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}

function DoorPanel({
  to,
  eyebrow,
  heading,
  body,
  cta,
  background,
  hoverBackground,
  className = "",
  sizeClass = "",
  mark,
}: {
  to: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  background: string;
  hoverBackground: string;
  className?: string;
  sizeClass?: string;
  mark: (cls: string) => React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`group relative flex aspect-square flex-col justify-between border-2 border-ink p-7 transition-colors md:aspect-auto ${background} ${hoverBackground} ${className} ${sizeClass}`}
    >
      <p className="text-xs font-bold tracking-widest text-ink uppercase">
        {eyebrow}
      </p>
      <div>
        <h3 className="font-display text-3xl leading-tight tracking-tight text-ink uppercase sm:text-4xl md:text-5xl">
          {heading}
        </h3>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-ink">
          {body}
        </p>
        <p className="mt-6 inline-flex items-center gap-3 font-display text-base tracking-wider text-ink uppercase">
          {cta}
          <ArrowRight />
        </p>
      </div>
      {mark("absolute top-6 right-6 h-12 w-12 text-ink")}
    </Link>
  );
}

function DonateStripe() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-neon uppercase sm:text-7xl md:text-[7.5rem]">
          Feed a neighbour.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone sm:text-xl">
          Your $5 funds two meals. CRA receipt issued. The cart is
          volunteer-run.
        </p>
        <div className="mt-10">
          <Link
            to="/donate"
            className="inline-flex items-center gap-3 border-2 border-neon bg-neon px-8 py-5 font-display text-lg tracking-wider text-ink uppercase transition-colors hover:bg-neon-deep sm:text-xl"
          >
            Donate now
            <ArrowRight />
          </Link>
        </div>
        <p className="mt-14 text-xs tracking-widest text-bone/70 uppercase">
          Huggabowl is a registered Canadian charity. CRA #735654550RR0001.
        </p>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 26 16"
      className="h-3.5 w-5 shrink-0"
    >
      <path
        d="M2 8.2 Q 12 7.4 21 8.1 M 15 2.4 L 23 8.2 L 14.6 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SteamMark({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...rest}>
      <path
        d="M30 100 Q 22 76 38 60 Q 54 44 38 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M62 105 Q 52 80 68 64 Q 84 48 70 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M92 100 Q 82 78 98 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartSilhouette({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" className={className} {...rest}>
      <path
        d="M82 56 Q 76 42 86 32 Q 96 22 88 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M108 58 Q 102 44 112 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect
        x="62"
        y="58"
        width="76"
        height="6"
        rx="1.5"
        fill="currentColor"
      />
      <path
        d="M68 66 L 132 66 L 126 104 L 74 104 Z"
        fill="currentColor"
      />
      <rect
        x="30"
        y="104"
        width="140"
        height="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M30 132 L 170 132"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="62"
        cy="172"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle
        cx="138"
        cy="172"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle cx="62" cy="172" r="2.5" fill="currentColor" />
      <circle cx="138" cy="172" r="2.5" fill="currentColor" />
    </svg>
  );
}

function KnifeMark({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...rest}>
      <path
        d="M8 40 L 30 18 L 38 18 L 38 24 L 16 46 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M14 34 L 24 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BoxMark({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...rest}>
      <path
        d="M10 18 L 12 42 L 36 42 L 38 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M8 18 L 24 12 L 40 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M16 12 Q 24 4 32 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NewsprintMark({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...rest}>
      <path
        d="M6 8 L 42 8 L 42 30 L 30 42 L 6 42 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M12 16 L 36 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 22 L 30 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 27 L 34 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 32 L 26 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 42 L 30 30 L 42 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
