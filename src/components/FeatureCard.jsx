function FeatureCard({ title, description }) {
  return (
    <article className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_16px_40px_rgba(21,36,27,0.08)]">
      <h3 className="font-display text-2xl text-forest-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-forest-900/70">{description}</p>
    </article>
  )
}

export default FeatureCard
