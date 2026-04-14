import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { products } from '../data/products'

function ProductDetailsPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  const [extraFlowers, setExtraFlowers] = useState(0)

  const totalPrice = useMemo(() => {
    if (!product || product.comingSoon) {
      return 0
    }

    return product.basePrice + extraFlowers * product.extraFlowerPrice
  }, [extraFlowers, product])

  if (!product || product.comingSoon) {
    return <Navigate to="/" replace />
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '919004071897'
    const message = `Hi, I want to order:

Bouquet: ${product.name}
Occasion:
Delivery Date:
Custom Message:

Standard Flowers: ${product.standardFlowers}
Extra Flowers: ${extraFlowers}
Total Price: ₹${totalPrice}

Please share total cost.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,244,246,0.9)_30%,rgba(246,235,227,0.92)_65%,rgba(242,237,255,0.85)_100%)]">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <Link
          to="/"
          className="inline-flex rounded-full border border-blush-200 bg-white/85 px-4 py-2 text-sm font-semibold text-taupe-900 transition hover:border-lavender-300 hover:text-lavender-700"
        >
          Back to Collection
        </Link>

        <section className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/85 p-4 shadow-[0_24px_70px_rgba(143,113,110,0.1)]">
            <div className="overflow-hidden rounded-[1.75rem] bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/4.8] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(242,237,255,0.68),rgba(247,236,228,0.92))] p-6 shadow-[0_24px_70px_rgba(143,113,110,0.08)] sm:p-8">
            <p className="inline-flex rounded-full bg-lavender-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-lavender-700">
              Signature Bouquet
            </p>
            <h1 className="mt-4 font-display text-4xl text-taupe-900 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-taupe-600">{product.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/80 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-taupe-500">Price</p>
                <p className="mt-2 font-display text-3xl text-taupe-900">₹{totalPrice}</p>
                <p className="mt-2 text-sm text-taupe-600">Base price: {product.price}</p>
              </div>
              <div className="rounded-[1.5rem] bg-lavender-700 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-white/65">
                  Standard bouquet
                </p>
                <p className="mt-2 font-display text-3xl">{product.standardFlowers} flowers</p>
                <p className="mt-2 text-sm text-white/75">
                  Add extra stems at ₹{product.extraFlowerPrice} each.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-blush-200/70 bg-white/78 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-taupe-500">
                    Customize bouquet
                  </p>
                  <p className="mt-2 text-base text-taupe-700">
                    Increase flower count to make the bouquet fuller.
                  </p>
                </div>
                <div className="rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
                  +₹{product.extraFlowerPrice} / flower
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setExtraFlowers((current) => Math.max(0, current - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-blush-200 bg-white text-xl text-taupe-900 transition hover:border-lavender-300 hover:text-lavender-700"
                >
                  -
                </button>
                <div className="min-w-[88px] rounded-full bg-[#f8f1ff] px-4 py-3 text-center text-lg font-semibold text-taupe-900">
                  {extraFlowers}
                </div>
                <button
                  type="button"
                  onClick={() => setExtraFlowers((current) => current + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-blush-200 bg-white text-xl text-taupe-900 transition hover:border-lavender-300 hover:text-lavender-700"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-taupe-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-dustyrose-500"
            >
              Order on WhatsApp
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-[0_16px_45px_rgba(143,113,110,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lavender-700">
              Handcrafted details
            </p>
            <p className="mt-4 text-base leading-8 text-taupe-600">{product.details}</p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-[0_16px_45px_rgba(143,113,110,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lavender-700">
              Materials used
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.materials.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-lavender-100 px-4 py-2 text-sm font-medium text-lavender-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-taupe-600">{product.flowerStory}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetailsPage
