function ProductCard({ name, price, image, tag, comingSoon = false }) {
  const handleWhatsAppClick = () => {
    if (comingSoon) {
      return
    }

    const phoneNumber = '919004071897'
    const message = `Hi, I want to order:

Bouquet: ${name}
Occasion:
Delivery Date:
Custom Message:

Please share total cost.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-blush-200/80 bg-white/90 p-5 shadow-[0_24px_60px_rgba(143,113,110,0.08)] backdrop-blur transition duration-300 hover:scale-[1.02] hover:shadow-[0_28px_70px_rgba(143,113,110,0.14)]">
      <div className="overflow-hidden rounded-[1.5rem]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="aspect-[4/4.4] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex aspect-[4/4.4] items-center justify-center rounded-[1.5rem] border border-dashed border-blush-300/70 bg-gradient-to-br from-rose-50 via-ivory-50 to-champagne-100">
            <span className="text-center font-medium uppercase tracking-[0.18em] text-taupe-500">
              PNG Placeholder
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <h3 className="font-display text-2xl text-taupe-900">{name}</h3>
          <p className="mt-2 text-base font-medium text-taupe-700">{price}</p>
        </div>

        <p className="inline-flex rounded-full bg-blush-200/45 px-3 py-1 text-xs font-medium tracking-[0.08em] text-taupe-600">
          {tag}
        </p>
      </div>

      <button
        type="button"
        onClick={handleWhatsAppClick}
        disabled={comingSoon}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
          comingSoon
            ? 'cursor-not-allowed bg-lavender-100 text-lavender-700'
            : 'bg-taupe-900 text-white hover:bg-dustyrose-500'
        }`}
      >
        {comingSoon ? 'Coming Soon' : 'Order on WhatsApp'}
      </button>
    </article>
  )
}

export default ProductCard
