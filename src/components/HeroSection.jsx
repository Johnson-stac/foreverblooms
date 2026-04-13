function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
      <div className="flex flex-col justify-center">
        <span className="mb-4 inline-flex w-fit rounded-full border border-sage-300/70 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
          Floral Design Studio
        </span>
        <h1 className="max-w-2xl font-display text-5xl leading-tight text-forest-900 sm:text-6xl">
          Seasonal arrangements designed to feel warm, tactile, and alive.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-forest-900/75 sm:text-lg">
          Build a polished starting point for your bouquet shop, studio, or event
          brand with a lightweight React and Tailwind setup that already looks
          composed on mobile and desktop.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#collections"
            className="rounded-full bg-terracotta-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-terracotta-400"
          >
            Explore Collections
          </a>
          <a
            href="#services"
            className="rounded-full border border-forest-900/15 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-forest-900 transition hover:border-sage-700 hover:text-sage-700"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(21,36,27,0.12)] backdrop-blur">
        <div className="absolute inset-x-6 top-6 h-32 rounded-full bg-sage-100 blur-3xl" />
        <div className="relative space-y-5">
          <div className="rounded-[1.75rem] bg-forest-900 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              This starter includes
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-sm text-white/70">Folder structure</p>
                <p className="mt-2 font-display text-2xl">Pages + components</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-sm text-white/70">Styling</p>
                <p className="mt-2 font-display text-2xl">Tailwind CSS</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-cream-100 bg-cream-50 p-5">
              <p className="text-sm text-forest-900/60">Responsive</p>
              <p className="mt-2 font-display text-2xl text-forest-900">Mobile-first</p>
            </div>
            <div className="rounded-2xl border border-cream-100 bg-white p-5">
              <p className="text-sm text-forest-900/60">Tooling</p>
              <p className="mt-2 font-display text-2xl text-forest-900">Vite</p>
            </div>
            <div className="rounded-2xl border border-cream-100 bg-cream-50 p-5">
              <p className="text-sm text-forest-900/60">DX</p>
              <p className="mt-2 font-display text-2xl text-forest-900">Ready to ship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
