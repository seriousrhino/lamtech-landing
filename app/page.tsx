import Image from "next/image";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Why LamTech", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    tag: "01",
    title: "Barcode Labels",
    desc: "Precision die-cut labels engineered for crisp, long-lasting prints — from small SKU stickers to large logistics tags.",
    points: [
      "Thermal transfer & direct thermal",
      "Paper, polyester (PET) & polypropylene",
      "Custom sizes, shapes & adhesives",
      "Cold-storage & tamper-proof grades",
    ],
    icon: LabelIcon,
  },
  {
    tag: "02",
    title: "Thermal Transfer Ribbons",
    desc: "Wax, wax-resin and resin ribbons that deliver dark, smudge-resistant barcodes on virtually any label material.",
    points: [
      "Wax, wax-resin & full resin grades",
      "High-speed & flat-head compatible",
      "Near-edge & flat-head core options",
      "Scratch, heat & chemical resistant",
    ],
    icon: RibbonIcon,
  },
  {
    tag: "03",
    title: "Barcode Printers",
    desc: "Reliable desktop and industrial thermal printers built for Indian workloads — dusty floors, long shifts, high volumes.",
    points: [
      "Desktop & industrial models",
      "203 & 300 dpi print resolution",
      "USB, Ethernet & serial connectivity",
      "Pan-India service & spares support",
    ],
    icon: PrinterIcon,
  },
];

const INDUSTRIES = [
  { title: "Retail & FMCG", icon: RetailIcon },
  { title: "Pharmaceutical", icon: PharmaIcon },
  { title: "Logistics & Warehousing", icon: WarehouseIcon },
  { title: "Manufacturing", icon: FactoryIcon },
  { title: "Apparel & Textile", icon: ApparelIcon },
  { title: "Food & Beverage", icon: FoodIcon },
];

const STATS = [
  { value: "100%", label: "Made in India" },
  { value: "3-in-1", label: "Labels · Ribbons · Printers" },
  { value: "Pan-India", label: "Supply & support" },
  { value: "Bulk", label: "OEM & custom orders" },
];

const WHY = [
  {
    title: "One partner, complete stack",
    desc: "Labels, ribbons and printers that are matched and tested together — no more mixing mismatched consumables.",
    icon: StackIcon,
  },
  {
    title: "Built for Indian conditions",
    desc: "Consumables and hardware chosen to hold up to heat, humidity, dust and the demands of high-volume Indian floors.",
    icon: ShieldIcon,
  },
  {
    title: "Consistent, scannable prints",
    desc: "Sharp, high-contrast barcodes that scan first-time, every time — cutting rejects, rescans and downtime.",
    icon: ScanIcon,
  },
  {
    title: "Responsive local support",
    desc: "Talk to real people who know your setup. Fast quotes, quick dispatch and dependable after-sales service.",
    icon: SupportIcon,
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <Products />
        <Industries />
        <Why />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Announcement bar                                                   */
/* ------------------------------------------------------------------ */

function AnnouncementBar() {
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[13px] font-medium tracking-wide">
        <IndiaFlag className="h-3.5 w-5 shrink-0 rounded-[2px]" />
        <span>
          Proudly <strong className="font-bold">Made in India</strong>, for
          India — Barcode Labels · Ribbons · Printers
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="LamTech logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Lam<span className="text-brand">Tech</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Get a Quote
          </a>

          {/* Mobile menu — native disclosure, no JS */}
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-ink [&::-webkit-details-marker]:hidden">
              <MenuIcon className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-white p-2 shadow-xl">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 block rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* soft red glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-soft blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-brand-soft blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-tint bg-brand-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <IndiaFlag className="h-3 w-4 rounded-[2px]" />
            Made in India · Trademark of Syro Industries
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Barcode <span className="text-brand">labels, ribbons</span> &
            printers — built in India.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            LamTech gives you the complete barcoding stack from a single,
            dependable partner. Sharp, scannable prints, consumables that last,
            and hardware ready for real Indian workloads.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Get a Free Quote
            </a>
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Explore Products
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-ink">{s.value}</dt>
                <dd className="mt-0.5 text-xs font-medium leading-tight text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-3xl border border-line bg-white p-6 shadow-[0_30px_80px_-30px_rgba(225,29,42,0.35)]">
            {/* mock label card */}
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">
                  Lam<span className="text-brand">Tech</span>
                </span>
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                  Label · PET
                </span>
              </div>
              <div className="barcode mt-5 h-24 w-full rounded-md" />
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
                <span>8 901234 567895</span>
                <span>SKU-LT-001</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <MiniTile label="Labels" icon={LabelIcon} />
              <MiniTile label="Ribbons" icon={RibbonIcon} />
              <MiniTile label="Printers" icon={PrinterIcon} />
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
              <div className="barcode-red h-10 w-10 shrink-0 rounded-md bg-white" />
              <div>
                <p className="text-sm font-semibold">First-time scans</p>
                <p className="text-xs text-white/70">
                  High-contrast prints, fewer rejects
                </p>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:flex">
            <IndiaFlag className="h-4 w-6 rounded-[2px]" />
            <span className="text-sm font-bold text-ink">
              Made in India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniTile({
  label,
  icon: Icon,
}: {
  label: string;
  icon: (p: { className?: string }) => React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-line bg-brand-soft/40 py-3">
      <Icon className="h-5 w-5 text-brand" />
      <span className="text-[11px] font-semibold text-ink">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Logo / trust strip                                                 */
/* ------------------------------------------------------------------ */

function LogoStrip() {
  const items = [
    "Retail chains",
    "Pharma units",
    "Warehouses",
    "Factories",
    "Apparel brands",
    "Food processors",
  ];
  return (
    <section className="border-y border-line bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted across Indian businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((i) => (
            <span
              key={i}
              className="text-sm font-bold tracking-tight text-ink/40"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Products                                                           */
/* ------------------------------------------------------------------ */

function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we make"
          title="One partner for your entire barcoding line"
          subtitle="Labels, ribbons and printers that are engineered to work together — so every scan is clean and every shift runs without a hitch."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-tint hover:shadow-[0_24px_60px_-30px_rgba(225,29,42,0.4)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="h-7 w-7" />
                </div>
                <span className="font-mono text-sm font-semibold text-brand/50">
                  {p.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-7 text-muted">
                {p.desc}
              </p>

              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Get a Free Quote
                <ArrowIcon className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industries                                                         */
/* ------------------------------------------------------------------ */

function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 border-y border-line bg-brand-soft/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we serve"
          title="Barcoding for every corner of Indian industry"
          subtitle="From a single retail counter to a sprawling distribution centre, LamTech keeps your products tagged, tracked and moving."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <ind.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-ink">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why LamTech                                                        */
/* ------------------------------------------------------------------ */

function Why() {
  return (
    <section id="why" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why LamTech"
              title="Dependable barcoding, made close to home"
              subtitle="We keep it simple: quality consumables, robust hardware, honest pricing and support that actually picks up the phone."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Made in India highlight */}
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <IndiaFlag className="h-6 w-9 rounded-[3px]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/70">
                  Made in India
                </span>
              </div>
              <p className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
                Every label, ribbon and printer we ship is{" "}
                <span className="text-brand">
                  proudly manufactured and supported in India
                </span>{" "}
                — for Indian businesses.
              </p>
              <p className="mt-5 text-[15px] leading-7 text-white/70">
                Buying local means faster turnarounds, easier support and a
                supply chain you can count on. When you grow, we grow with you.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-extrabold">3-in-1</p>
                  <p className="text-xs text-white/60">Complete stack</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold">100%</p>
                  <p className="text-xs text-white/60">Made in India</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold">Local</p>
                  <p className="text-xs text-white/60">Support & spares</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line bg-brand-soft/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          About LamTech
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          A trademark brand of Syro Industries Pvt Ltd
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          LamTech was built on a simple idea — that Indian businesses deserve a
          single, trustworthy source for their barcoding needs. We manufacture
          and supply barcode labels, thermal transfer ribbons and barcode
          printers, all held to one consistent standard of quality.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted">
          As a trademark brand under{" "}
          <strong className="font-semibold text-ink">
            Syro Industries Pvt Ltd
          </strong>
          , we combine manufacturing discipline with genuinely local support —
          so you get products that perform and people who answer.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          Talk to our team
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                           */
/* ------------------------------------------------------------------ */

function CtaBand() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready to upgrade your barcoding?
          </h2>
          <p className="mt-2 max-w-2xl text-white/85">
            Tell us what you print and how much — we&apos;ll put together the
            right labels, ribbons and printer for your line.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-brand shadow-sm transition-transform hover:scale-[1.03]"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Let's get you a quote"
              subtitle="Share your requirement and our team will get back to you with pricing and recommendations — usually within one business day."
            />

            <div className="mt-10 space-y-5">
              <ContactRow
                icon={PhoneIcon}
                label="Call us"
                value="+91 88514 33481"
                href="tel:+918851433481"
              />
              <ContactRow
                icon={MailIcon}
                label="Email"
                value="info@lamtechprint.in"
                href="mailto:info@lamtechprint.in"
              />
              <ContactRow
                icon={GlobeIcon}
                label="Website"
                value="www.lamtechprint.com"
                href="https://www.lamtechprint.com"
              />
              <ContactRow
                icon={PinIcon}
                label="Address"
                value="B-1 Floor, Basement, Time House 5, Commercial Complex, Wazirpur, Delhi – 110052"
              />
            </div>
          </div>

          {/* Form (non-functional placeholder) */}
          <div className="rounded-3xl border border-line bg-brand-soft/30 p-7 sm:p-9">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Company" placeholder="Company name" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" placeholder="+91" type="tel" />
                <Field label="Email" placeholder="you@company.in" type="email" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">
                  What do you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Barcode Labels", "Ribbons", "Printers"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirement, quantities and label sizes…"
                  className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request a Quote
              </button>
              <p className="text-center text-xs text-muted">
                This form is a placeholder and isn&apos;t wired up yet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: (p: { className?: string }) => React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-base font-bold text-ink transition-colors hover:text-brand"
          >
            {value}
          </a>
        ) : (
          <p className="text-base font-bold text-ink">{value}</p>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="LamTech logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight text-ink">
                Lam<span className="text-brand">Tech</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Barcode labels, thermal transfer ribbons and barcode printers —
              proudly Made in India. A trademark brand of Syro Industries Pvt
              Ltd.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-tint bg-brand-soft px-3 py-1.5">
              <IndiaFlag className="h-3.5 w-5 rounded-[2px]" />
              <span className="text-xs font-bold text-brand">
                Made in India 🇮🇳
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href="#products" className="hover:text-brand">
                  Barcode Labels
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand">
                  Thermal Transfer Ribbons
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand">
                  Barcode Printers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href="tel:+918851433481" className="hover:text-brand">
                  +91 88514 33481
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lamtechprint.in"
                  className="hover:text-brand"
                >
                  info@lamtechprint.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.lamtechprint.com"
                  className="hover:text-brand"
                >
                  www.lamtechprint.com
                </a>
              </li>
              <li className="pt-1 leading-6">
                B-1 Floor, Basement, Time House 5, Commercial Complex, Wazirpur,
                Delhi – 110052
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} LamTech — a trademark brand of Syro
            Industries Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">Designed &amp; made in India.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Shared: section heading                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-8 text-muted">{subtitle}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                              */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

function IndiaFlag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="6.67" y="0" fill="#FF9933" />
      <rect width="30" height="6.67" y="6.67" fill="#ffffff" />
      <rect width="30" height="6.66" y="13.34" fill="#138808" />
      <circle
        cx="15"
        cy="10"
        r="2.4"
        fill="none"
        stroke="#000080"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LabelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 8a2 2 0 0 1 2-2h9l7 6-7 6H5a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

function RibbonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 6v12M17 6v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PrinterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 8V4h10v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="8"
        width="18"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 14h10v6H7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

function RetailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 7h12l1 4H5l1-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6 11v7h12v-7M4 7l2-3h12l2 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PharmaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="9"
        width="16"
        height="7"
        rx="3.5"
        transform="rotate(45 12 12)"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M12 8l4 4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function WarehouseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 10l9-5 9 5v9H3v-9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M7 19v-5h10v5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function FactoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 20V9l5 3V9l5 3V6l6 3v11H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApparelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9 4l3 2 3-2 5 4-3 3-2-1v10H9V10L7 11 4 8l5-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FoodIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3l9 5-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScanIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 8v8M11 8v8M14 8v8M16.5 8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 13a7 7 0 0 1 14 0M4 13h2v5H5a1 1 0 0 1-1-1v-4ZM18 13h2v4a1 1 0 0 1-1 1h-1v-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
