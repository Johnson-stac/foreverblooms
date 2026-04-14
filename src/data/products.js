import tulipsBouquetImage from '../assets/bouquet-tulips.png'
import rosesBouquetImage from '../assets/bouquet-roses.png'
import liliesBouquetImage from '../assets/bouquet-lilies.png'
import orchidsBouquetImage from '../assets/bouquet-orchids.png'

export const products = [
  {
    slug: 'tulips',
    name: 'Tulips',
    specialName: 'Blush Promise',
    price: '₹950',
    basePrice: 950,
    standardFlowers: 10,
    extraFlowerPrice: 50,
    image: tulipsBouquetImage,
    tag: 'Handmade | Customizable',
    description:
      'A soft pastel tulip bouquet designed for gentle celebrations, heartfelt gifts, and elegant everyday gestures.',
    materials: ['Tulips', 'Hand-tied wrap', 'Premium ribbon', 'Signature bouquet paper'],
    details:
      'Our tulip bouquet is handcrafted to feel graceful and modern, with a balanced silhouette that looks polished in hand and beautiful in photos. The wrapping is kept airy and premium so the flower heads remain the focus.',
    flowerStory:
      'Tulips are loved for their clean shape and quiet romance. In this bouquet, they create a calm, refined impression that works beautifully for birthdays, thank-you gifts, anniversaries, and intimate occasions.',
    comingSoon: false,
  },
  {
    slug: 'roses',
    name: 'Roses',
    specialName: 'Velvet Reverie',
    price: '₹1050',
    basePrice: 1050,
    standardFlowers: 10,
    extraFlowerPrice: 50,
    image: rosesBouquetImage,
    tag: 'Handmade | Customizable',
    description:
      'A classic rose bouquet with deeper contrast and a romantic finish for grander gifting moments.',
    materials: ['Rose stems', 'Layered bouquet wrap', 'Satin ribbon', 'Decorative filler accents'],
    details:
      'This arrangement is assembled by hand with a denser center and a premium wrap structure for a richer presence. It is designed to feel celebratory, polished, and expressive.',
    flowerStory:
      'Roses carry warmth, admiration, and romance. This bouquet leans into those qualities with a fuller visual profile and a more luxurious presentation.',
    comingSoon: false,
  },
  {
    slug: 'lilies',
    name: 'Lilies',
    specialName: 'Lavender Lullaby',
    price: '₹999',
    basePrice: 999,
    standardFlowers: 10,
    extraFlowerPrice: 50,
    image: liliesBouquetImage,
    tag: 'Handmade | Customizable',
    description:
      'A sculptural bouquet with lily-inspired blooms and lavender tones for a refined statement piece.',
    materials: ['Lily-inspired stems', 'Textured wrap', 'Lace accent layer', 'Premium ribbon'],
    details:
      'Handcrafted with strong vertical lines and layered wrapping, this bouquet feels artistic and elevated. The silhouette is intentionally dramatic while staying soft in color.',
    flowerStory:
      'Lilies are associated with elegance and poise. This arrangement takes that mood into a more editorial direction, ideal for milestone gifting and special celebrations.',
    comingSoon: false,
  },
  {
    slug: 'orchids',
    name: 'Orchids',
    specialName: 'Golden Heirloom',
    price: '₹1199',
    basePrice: 1199,
    standardFlowers: 10,
    extraFlowerPrice: 50,
    image: orchidsBouquetImage,
    tag: 'Handmade | Customizable',
    description:
      'A luxe orchid bouquet with rich contrast, ornate wrapping, and a statement finish.',
    materials: ['Orchid stems', 'Decorative wrap', 'Gold satin ribbon', 'Textural accent stems'],
    details:
      'This bouquet is built with layered wrapping and a slightly more formal composition, giving it a premium, occasion-ready character from the first glance.',
    flowerStory:
      'Orchids are admired for rarity, beauty, and elegance. In bouquet form, they create a high-impact gift that still feels graceful and sophisticated.',
    comingSoon: false,
  },
  {
    slug: 'peonies',
    name: 'Peonies',
    specialName: 'Pearl Bloom',
    price: 'Launching Soon',
    basePrice: 0,
    standardFlowers: 0,
    extraFlowerPrice: 0,
    image: '',
    tag: 'Coming Soon | Limited Edit',
    description: '',
    materials: [],
    details: '',
    flowerStory: '',
    comingSoon: true,
  },
  {
    slug: 'daisies',
    name: 'Daisies',
    specialName: 'Daisy Daydream',
    price: 'Launching Soon',
    basePrice: 0,
    standardFlowers: 0,
    extraFlowerPrice: 0,
    image: '',
    tag: 'Coming Soon | Garden Fresh',
    description: '',
    materials: [],
    details: '',
    flowerStory: '',
    comingSoon: true,
  },
  {
    slug: 'pastel-mix',
    name: 'Pastel Mix',
    specialName: 'Soft Serenade',
    price: 'Launching Soon',
    basePrice: 0,
    standardFlowers: 0,
    extraFlowerPrice: 0,
    image: '',
    tag: 'Coming Soon | Signature Wrap',
    description: '',
    materials: [],
    details: '',
    flowerStory: '',
    comingSoon: true,
  },
]

export const availableProducts = products.filter((product) => !product.comingSoon)
