function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sage-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-forest-900/70">
        {description}
      </p>
    </div>
  )
}

export default SectionTitle
