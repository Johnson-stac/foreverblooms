const links = [
  { label: 'Home', href: '#' },
  { label: 'Collection', href: '#featured' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <a href="#" className="font-display text-2xl text-taupe-900 sm:text-3xl">
        ForeverBlooms
      </a>

      <nav className="hidden items-center gap-8 text-sm font-medium text-taupe-600 md:flex">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="transition hover:text-taupe-900">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://wa.me/919004071897"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-blush-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-taupe-900 transition hover:border-dustyrose-300 hover:text-dustyrose-600"
      >
        WhatsApp
      </a>
    </header>
  )
}

export default Navbar
