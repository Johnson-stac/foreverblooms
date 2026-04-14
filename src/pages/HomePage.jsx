import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import cynaraRosarioImage from '../assets/cynara-rosario.jpeg'
import { availableProducts, products } from '../data/products'

const categories = [
  'Same Day Delivery',
  'Birthday Flowers',
  'Anniversary Flowers',
  'Grand Gestures',
  'Gift Hampers',
  'Potted Plants',
]

const highlights = [
  {
    title: 'Boutique styling',
    detail: 'Each bouquet is wrapped to feel gift-ready, premium, and visually soft from the first glance.',
  },
  {
    title: 'Luxury finishing',
    detail: 'Layered papers, satin ribbon, and carefully balanced stems give every order a more elevated feel.',
  },
  {
    title: 'Personal customization',
    detail: 'Choose your bouquet, increase the flower count, and place your order directly through WhatsApp.',
  },
]

const reasons = [
  {
    title: 'Handmade',
    description:
      'Every bouquet is arranged by hand with attention to balance, texture, and premium wrapping.',
  },
  {
    title: 'Custom Designs',
    description:
      'We tailor stems, palette, and presentation around birthdays, proposals, anniversaries, and intimate gifting.',
  },
  {
    title: 'Same Day Delivery',
    description:
      'Fast local fulfillment helps your flowers arrive fresh and on time for last-minute surprises.',
  },
]

function WhyChooseUsCard({ title, description }) {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/80 px-6 py-8 text-center shadow-[0_20px_45px_rgba(143,113,110,0.08)]">
      <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-blush-200 to-champagne-100" />
      <h3 className="mt-5 font-display text-2xl text-taupe-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-taupe-600">{description}</p>
    </div>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,244,246,0.9)_30%,rgba(246,235,227,0.92)_100%)]">
      <Navbar />

      <main>
        <section className="mx-auto w-full max-w-7xl px-4 pt-2 sm:px-6 lg:px-10">
          <div className="flex gap-3 overflow-x-auto rounded-[1.75rem] border border-blush-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(253,240,242,0.88))] p-3 sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:border-blush-200/80 sm:bg-blush-200/60 sm:p-0 lg:grid-cols-6">
            {categories.map((category) => (
              <div
                key={category}
                className="min-w-[156px] rounded-[1.2rem] bg-white/90 px-4 py-4 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-taupe-600 sm:min-w-0 sm:rounded-none sm:bg-white/80 sm:px-5 sm:py-5 sm:text-xs"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:pb-28 lg:pt-14">
          <div className="order-2 max-w-2xl lg:order-1">
            <p className="inline-flex rounded-full border border-blush-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-dustyrose-600">
              Premium Floral Studio
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.02] text-taupe-900 sm:text-6xl lg:text-7xl">
              Handmade Bouquets with Love
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-taupe-600 sm:text-lg sm:leading-8">
              Curated bouquet designs with a softer, more premium finish for birthdays, anniversaries, heartfelt gifting, and intimate celebrations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-dustyrose-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-dustyrose-600"
              >
                Explore Collection
              </a>
              <a
                href="#why-us"
                className="inline-flex items-center justify-center rounded-full border border-champagne-200 bg-white/85 px-7 py-3.5 text-sm font-semibold text-dustyrose-600 transition hover:bg-champagne-100"
              >
                Why ForeverBlooms
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-5 shadow-[0_16px_40px_rgba(143,113,110,0.06)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dustyrose-600">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-taupe-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-blush-200/70 blur-3xl sm:h-32 sm:w-32" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-champagne-100/80 blur-3xl sm:h-36 sm:w-36" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_90px_rgba(143,113,110,0.12)] backdrop-blur sm:p-6">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-rose-50 via-white to-champagne-100 p-5 sm:rounded-[2rem] sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/90 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-taupe-500 sm:text-sm">
                      Signature Bouquet
                    </p>
                    <p className="mt-3 font-display text-2xl text-taupe-900 sm:text-3xl">
                      {availableProducts[0].specialName}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-dustyrose-500">
                      {availableProducts[0].name}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-taupe-900 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/60 sm:text-sm">
                      Starting At
                    </p>
                    <p className="mt-3 font-display text-2xl sm:text-3xl">₹950</p>
                  </div>
                  <div className="sm:col-span-2 overflow-hidden rounded-[1.75rem] border border-blush-200/70 bg-white/85">
                    <img
                      src={availableProducts[0].image}
                      alt="Tulips bouquet"
                      className="h-[26rem] w-full object-cover object-center sm:h-[32rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-taupe-900 sm:text-5xl">
              Bestselling Blooms
            </h2>
            <p className="mt-2 text-base text-taupe-500">
              Named bouquet collections with their flower type below, plus dedicated detail pages for customization.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((bouquet) => (
              <ProductCard key={bouquet.name} {...bouquet} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-10">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(120deg,rgba(253,246,248,0.9),rgba(255,249,247,0.88),rgba(247,236,228,0.95))] shadow-[0_24px_70px_rgba(143,113,110,0.1)]">
            <div className="grid items-center gap-8 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-14 lg:py-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dustyrose-600">
                  Seasonal Edit
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-taupe-900 sm:text-5xl">
                  Summer Blooms
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-taupe-600">
                  Soft roses, sunlit tulips, and layered textures curated for warm
                  celebrations and elegant gifting.
                </p>
                <a
                  href="#featured"
                  className="mt-8 inline-flex rounded-full bg-taupe-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-dustyrose-500"
                >
                  Explore Collection
                </a>
              </div>

              <div className="flex min-h-[220px] items-center justify-center rounded-[2rem] border border-champagne-200/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,239,236,0.7)_45%,rgba(246,231,219,0.9))]">
                <span className="px-4 text-center font-display text-4xl text-dustyrose-300 sm:text-6xl">
                  SUMMER BLOOMS
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-us"
          className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-10 lg:pb-16"
        >
          <div className="rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(250,238,232,0.92))] px-6 py-12 shadow-[0_30px_80px_rgba(143,113,110,0.08)] lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dustyrose-600">
                Why Choose Us
              </p>
              <h2 className="mt-4 font-display text-4xl text-taupe-900 sm:text-5xl">
                Refined floral work with thoughtful service.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reasons.map((reason) => (
                <WhyChooseUsCard key={reason.title} {...reason} />
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-champagne-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,247,244,0.86))] p-5 text-center sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl text-taupe-900">100%</p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-taupe-500">
                  Fresh blooms
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-taupe-900">Tailored</p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-taupe-500">
                  for every occasion
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-taupe-900">WhatsApp</p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-taupe-500">
                  easy ordering
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
          <div className="rounded-[2.5rem] bg-[#fbefdf] p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -left-8 -top-8 h-full w-full rounded-[2rem] bg-[#e6cec3]" />
                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_28px_70px_rgba(143,113,110,0.14)]">
                  <img
                    src={cynaraRosarioImage}
                    alt="Cynara Rosario"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="max-w-2xl">
                <p className="font-display text-4xl leading-tight text-[#c29c8e] sm:text-5xl">
                  Crafted with heart, detail, and a deep love for floral storytelling.
                </p>
                <p className="mt-6 text-lg leading-8 text-taupe-600">
                  ForeverBlooms began with a simple idea: bouquets should feel
                  personal, elevated, and emotionally memorable. Every arrangement
                  is designed to balance softness, color, and form so each order
                  arrives with presence and care.
                </p>
                <div className="mt-8">
                  <h3 className="font-display text-3xl text-taupe-900">
                    Cynara Rosario
                  </h3>
                  <p className="mt-2 text-base text-taupe-600">
                    Founder, ForeverBlooms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
