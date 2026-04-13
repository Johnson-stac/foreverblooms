function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-24 w-full max-w-7xl px-6 pb-10 pt-6 lg:px-10"
    >
      <div className="rounded-[2.25rem] border border-white/70 bg-taupe-900 px-6 py-10 text-white shadow-[0_28px_80px_rgba(93,73,70,0.2)] lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/55">ForeverBlooms</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Floral arrangements with a soft, modern touch.
            </h2>
          </div>

          <div className="space-y-3 text-sm text-white/75">
            <a
              href="https://www.instagram.com/foreverblooms.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              Instagram
            </a>
            <a href="tel:+919004071897" className="block transition hover:text-white">
              +91 90040 71897
            </a>
            <a
              href="mailto:hello@foreverblooms.in"
              className="block transition hover:text-white"
            >
              hello@foreverblooms.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
