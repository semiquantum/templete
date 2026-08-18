/* ============================================================
   PRODUCTS DATA — 60 REALISTIC E-COMMERCE PRODUCTS
   ============================================================ */

const PRODUCTS_DATA = [
  // ==========================================
  // STORE 1: FASHION STORE (12 Products)
  // ==========================================
  {
    id: 'fashion-1',
    store: 'fashion',
    name: 'Oversized Italian Wool Coat',
    category: 'Outerwear',
    price: 340,
    originalPrice: 425,
    discount: 20,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Expertly tailored from 100% virgin Italian wool, this oversized silhouette coat delivers effortless sophistication with a relaxed dropped-shoulder cut and genuine horn buttons.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['XS', 'S', 'M', 'L', 'XL']
    },
    colors: ['Camel', 'Midnight Black', 'Ivory'],
    specs: {
      'Material': '100% Virgin Italian Wool',
      'Lining': '100% Cupro Satin',
      'Care': 'Dry Clean Only',
      'Origin': 'Handcrafted in Florence, Italy'
    }
  },
  {
    id: 'fashion-2',
    store: 'fashion',
    name: 'Artisan Leather Low-Top Sneakers',
    category: 'Footwear',
    price: 220,
    originalPrice: 260,
    discount: 15,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Clean minimalist low-top sneakers constructed with supple full-grain calfskin leather, stitched Margom rubber cupsole, and memory foam insoles for all-day comfort.',
    variants: {
      type: 'size',
      label: 'Shoe Size',
      options: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44']
    },
    colors: ['Chalk White', 'Monochrome Noir'],
    specs: {
      'Upper': 'Full-Grain Italian Calfskin',
      'Sole': 'Margom Italian Rubber Cupsole',
      'Insole': 'Ergonomic Calf-Lined Memory Foam',
      'Origin': 'Porto, Portugal'
    }
  },
  {
    id: 'fashion-3',
    store: 'fashion',
    name: 'Silk-Linen Relaxed Classic Shirt',
    category: 'Tops',
    price: 185,
    originalPrice: 210,
    discount: 12,
    rating: 4.7,
    reviewCount: 62,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A breathable blend of mulberry silk and organic French linen. Features mother-of-pearl buttons, classic spread collar, and a modern relaxed drape.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['S', 'M', 'L', 'XL']
    },
    colors: ['Optical White', 'Sky Blue', 'Sand'],
    specs: {
      'Composition': '70% Mulberry Silk, 30% Organic Linen',
      'Buttons': 'Natural Australian Mother-of-Pearl',
      'Fit': 'Relaxed Modern Tailoring',
      'Origin': 'Made in Lyon, France'
    }
  },
  {
    id: 'fashion-4',
    store: 'fashion',
    name: 'Sculptural Leather Handbag',
    category: 'Bags',
    price: 480,
    originalPrice: 600,
    discount: 20,
    rating: 4.9,
    reviewCount: 210,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Architectural geometric structured tote crafted with vegetable-tanned smooth leather, hand-painted edges, and 24k gold-plated custom hardware.',
    variants: {
      type: 'size',
      label: 'Option',
      options: ['Medium Tote', 'Large Work Edition']
    },
    colors: ['Cognac', 'Burgundy', 'Noir'],
    specs: {
      'Leather': 'Vegetable-Tanned French Cowhide',
      'Hardware': '24K Gold-Plated Solid Brass',
      'Dimensions': '32cm x 24cm x 14cm',
      'Origin': 'Milan, Italy'
    }
  },
  {
    id: 'fashion-5',
    store: 'fashion',
    name: 'Tiered Silk Chiffon Summer Dress',
    category: 'Dresses',
    price: 295,
    originalPrice: 350,
    discount: 16,
    rating: 4.8,
    reviewCount: 78,
    badge: 'Summer 2026',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ethereal midi dress with delicate tiered ruffle detailing, sheer lightweight silk chiffon overlay, smocked waistline, and fluid movement.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['XS', 'S', 'M', 'L']
    },
    colors: ['Champagne', 'Blush Rose', 'Emerald'],
    specs: {
      'Fabric': '100% Pure Mulberry Silk Chiffon',
      'Lining': '100% Rayon Breathable Slip',
      'Length': 'Midi Length (118cm)',
      'Care': 'Delicate Handwash or Dry Clean'
    }
  },
  {
    id: 'fashion-6',
    store: 'fashion',
    name: 'Minimalist Sapphire Automatic Watch',
    category: 'Accessories',
    price: 590,
    originalPrice: 720,
    discount: 18,
    rating: 4.9,
    reviewCount: 156,
    badge: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sleek 38mm dial watch with Japanese automatic mechanical movement, scratch-resistant sapphire crystal glass, and interchangeable vegetable-tanned leather strap.',
    variants: {
      type: 'style',
      label: 'Case Size',
      options: ['38mm Classic', '42mm Modern']
    },
    colors: ['Brushed Silver', 'Rose Gold', 'Matte Black'],
    specs: {
      'Movement': 'Miyota 9015 Automatic (42-hr reserve)',
      'Glass': 'Anti-Reflective Sapphire Crystal',
      'Water Resistance': '5 ATM / 50 Meters',
      'Strap': 'Hand-stitched Tuscan Leather'
    }
  },
  {
    id: 'fashion-7',
    store: 'fashion',
    name: 'Pleated Tailored Wool Trousers',
    category: 'Bottoms',
    price: 210,
    originalPrice: 250,
    discount: 16,
    rating: 4.7,
    reviewCount: 88,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-waisted double-pleated trousers with side adjusters, gentle taper, and crafted from all-season lightweight wool gabardine.',
    variants: {
      type: 'size',
      label: 'Waist',
      options: ['30', '32', '34', '36']
    },
    colors: ['Charcoal Gray', 'Espresso', 'Navy'],
    specs: {
      'Material': '100% Tropical Wool Gabardine',
      'Rise': 'High Rise (12")',
      'Closure': 'Concealed Hook and Zip Fly',
      'Origin': 'Biella, Italy'
    }
  },
  {
    id: 'fashion-8',
    store: 'fashion',
    name: 'Handcrafted Goodyear Oxford Shoes',
    category: 'Footwear',
    price: 380,
    originalPrice: 450,
    discount: 15,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Traditional cap-toe oxford shoes crafted with Goodyear welted construction, Argentine leather soles, and museum-grade hand-burnished finish.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['EU 41', 'EU 42', 'EU 43', 'EU 44']
    },
    colors: ['Deep Oak', 'Burnished Ebony'],
    specs: {
      'Construction': 'Goodyear Welted (Resoleable)',
      'Upper': 'Full-Grain Box Calf Leather',
      'Sole': 'Channel-Stitched Leather Sole',
      'Origin': 'Northamptonshire, UK'
    }
  },
  {
    id: 'fashion-9',
    store: 'fashion',
    name: 'Japanese Selvedge Denim Jacket',
    category: 'Outerwear',
    price: 265,
    originalPrice: 310,
    discount: 15,
    rating: 4.8,
    reviewCount: 95,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'
    ],
    description: '14oz Kurabo Japanese selvedge denim woven on vintage shuttle looms. Finished with custom antique copper hardware and selvedge ID interior trim.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['S', 'M', 'L', 'XL']
    },
    colors: ['Raw Indigo', 'Vintage Wash'],
    specs: {
      'Denim': '14oz Japanese Kurabo Selvedge',
      'Buttons': 'Solid Copper Donut Buttons',
      'Stitching': 'Heavyweight Poly-Core Thread',
      'Origin': 'Kojima, Okayama, Japan'
    }
  },
  {
    id: 'fashion-10',
    store: 'fashion',
    name: 'Acetate Aviator Sunglasses',
    category: 'Accessories',
    price: 195,
    originalPrice: 240,
    discount: 19,
    rating: 4.7,
    reviewCount: 142,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sculpted bio-acetate frames featuring precision 7-barrel hinges and scratch-resistant Zeiss polarized lenses offering 100% UVA/UVB protection.',
    variants: {
      type: 'style',
      label: 'Size',
      options: ['Standard 52mm', 'Oversized 55mm']
    },
    colors: ['Tortoiseshell', 'Glossy Onyx', 'Amber'],
    specs: {
      'Frame': 'Handcrafted Mazzucchelli Bio-Acetate',
      'Lenses': 'Zeiss Polarized Polycarbonate (UV400)',
      'Hinges': '7-Barrel Custom German Hardware',
      'Origin': 'Cadore, Italy'
    }
  },
  {
    id: 'fashion-11',
    store: 'fashion',
    name: 'Cashmere Ribbed Turtleneck Sweater',
    category: 'Tops',
    price: 320,
    originalPrice: 380,
    discount: 16,
    rating: 4.9,
    reviewCount: 104,
    badge: 'Capsule',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sumptuously soft 100% Grade-A Mongolian cashmere knitted in a lofty 2-ply 12-gauge fisherman rib for unparalleled warmth without bulk.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['S', 'M', 'L']
    },
    colors: ['Oatmeal', 'Heather Grey', 'Charcoal'],
    specs: {
      'Yarn': '100% Grade-A Mongolian Cashmere (15.2 micron)',
      'Gauge': '12-Gauge 2-Ply Knit',
      'Collar': 'Ribbed Roll Neck',
      'Origin': 'Ulaanbaatar, Mongolia'
    }
  },
  {
    id: 'fashion-12',
    store: 'fashion',
    name: 'Structured Wool Felt Fedora',
    category: 'Accessories',
    price: 160,
    originalPrice: 190,
    discount: 15,
    rating: 4.6,
    reviewCount: 47,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Wide-brim structured fedora crafted from 100% Australian merino wool felt with a vintage grosgrain ribbon band and leather sweatband.',
    variants: {
      type: 'size',
      label: 'Head Size',
      options: ['S (56cm)', 'M (58cm)', 'L (60cm)']
    },
    colors: ['Camel', 'Black'],
    specs: {
      'Material': '100% Australian Wool Felt',
      'Brim Width': '7.5 cm (3")',
      'Sweatband': 'Genuine Lambskin Leather',
      'Origin': 'Sydney, Australia'
    }
  },

  // ==========================================
  // STORE 2: ELECTRONICS STORE (12 Products)
  // ==========================================
  {
    id: 'electronics-1',
    store: 'electronics',
    name: 'Quantum 15 Pro 5G Smartphone',
    category: 'Smartphones',
    price: 1099,
    originalPrice: 1299,
    discount: 15,
    rating: 4.9,
    reviewCount: 430,
    badge: 'Flagship Deal',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Next-generation flagship smartphone equipped with 3nm Quantum Bionic processor, 6.7-inch ProMotion OLED 120Hz display, and 108MP computational optical camera.',
    variants: {
      type: 'storage',
      label: 'Storage Capacity',
      options: ['256GB', '512GB', '1TB']
    },
    colors: ['Space Black', 'Titanium Silver', 'Cyber Blue'],
    specs: {
      'Processor': 'Quantum 3nm Octa-Core AI Engine',
      'Display': '6.7" OLED (3200x1440, 120Hz ProMotion)',
      'Camera': '108MP Main + 48MP Ultrawide + 12MP 5x Periscope',
      'Battery': '5,200mAh (65W Fast Charging)'
    }
  },
  {
    id: 'electronics-2',
    store: 'electronics',
    name: 'AeroBook Carbon M4 Ultrabook',
    category: 'Laptops',
    price: 1499,
    originalPrice: 1799,
    discount: 17,
    rating: 4.9,
    reviewCount: 310,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-thin aerospace-grade carbon fiber body weighing only 1.1kg. Features 3.2K mini-LED display, 32GB unified RAM, and blazing 22-hour battery life.',
    variants: {
      type: 'specs',
      label: 'Configuration',
      options: ['16GB / 512GB', '32GB / 1TB', '64GB / 2TB']
    },
    colors: ['Midnight Carbon', 'Space Gray'],
    specs: {
      'CPU / GPU': '12-Core M4 High-Efficiency Silicon',
      'RAM': '32GB Unified LPDDR5X (7500 MT/s)',
      'Storage': '1TB NVMe PCIe 4.0 SSD (7,000 MB/s)',
      'Display': '14.2" 3.2K Liquid XDR (120Hz, 1600 nits)'
    }
  },
  {
    id: 'electronics-3',
    store: 'electronics',
    name: 'SonicPulse ANC Studio Headphones',
    category: 'Audio',
    price: 349,
    originalPrice: 429,
    discount: 19,
    rating: 4.8,
    reviewCount: 520,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Audiophile-grade over-ear wireless headphones with dual active noise cancellation processors, custom 45mm beryllium drivers, and lossless LDAC streaming.',
    variants: {
      type: 'color',
      label: 'Edition',
      options: ['Matte Black', 'Arctic White', 'Navy Silver']
    },
    colors: ['Matte Black', 'Arctic White', 'Navy Silver'],
    specs: {
      'ANC Rating': 'Up to -45dB Hybrid Active Cancellation',
      'Drivers': '45mm Custom Beryllium Diaphragm',
      'Battery Life': '50 Hours (ANC On) / 70 Hours (Off)',
      'Connectivity': 'Bluetooth 5.4, Multipoint, USB-C DAC'
    }
  },
  {
    id: 'electronics-4',
    store: 'electronics',
    name: 'PulseTitan GPS Smartwatch Ultra',
    category: 'Wearables',
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.8,
    reviewCount: 275,
    badge: 'Flash Deal',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Aerospace Grade 5 titanium smartwatch engineered for extreme outdoor conditions. Multi-band GPS, biometric ECG, offline mapping, and 100m dive rating.',
    variants: {
      type: 'size',
      label: 'Band Type',
      options: ['Trail Loop', 'Alpine Strap', 'Ocean Band']
    },
    colors: ['Titanium Natural', 'DLC Dark Knight'],
    specs: {
      'Case': 'Grade 5 Aerospace Titanium (49mm)',
      'Sensors': 'ECG, Blood Oxygen, Skin Temp, Depth Gauge',
      'Battery': 'Up to 96 Hours Low Power / 36 Hours Active',
      'Rating': '100m Water Resistant / EN13319 Certified'
    }
  },
  {
    id: 'electronics-5',
    store: 'electronics',
    name: 'Apex Pro RGB Mechanical Keyboard',
    category: 'Gaming',
    price: 189,
    originalPrice: 229,
    discount: 17,
    rating: 4.9,
    reviewCount: 190,
    badge: 'Pro Esports',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Tournament-grade mechanical keyboard with magnetic Hall-effect adjustable switches, rapid-trigger reset, double-shot PBT keycaps, and aircraft aluminum deck.',
    variants: {
      type: 'style',
      label: 'Layout',
      options: ['Compact 65%', 'TKL 80%', 'Full Size 100%']
    },
    colors: ['Onyx Black', 'Ice White'],
    specs: {
      'Switches': 'OmniPoint 2.0 Magnetic Hall Effect',
      'Actuation': '0.1mm - 4.0mm Adjustable per Key',
      'Polling Rate': '8000Hz Ultra-Low Latency',
      'Keycaps': 'Double-Shot Oil-Resistant PBT'
    }
  },
  {
    id: 'electronics-6',
    store: 'electronics',
    name: 'Phantom Zero 26K Wireless Mouse',
    category: 'Gaming',
    price: 129,
    originalPrice: 159,
    discount: 19,
    rating: 4.7,
    reviewCount: 160,
    badge: 'Ultralight',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Featherlight 54g honeycomb-free gaming mouse featuring 26,000 DPI optical sensor, optical micro-switches, and zero-drag pure PTFE skates.',
    variants: {
      type: 'color',
      label: 'Finish',
      options: ['Matte Stealth', 'Ghost White', 'Cyber Red']
    },
    colors: ['Matte Stealth', 'Ghost White'],
    specs: {
      'Weight': '54g Solid Shell Lightweight Design',
      'Sensor': 'PixArt PAW3395 (26,000 DPI, 650 IPS)',
      'Battery': '80 Hours Continuous 1000Hz Playtime',
      'Switches': 'Optical 100M Click Durability'
    }
  },
  {
    id: 'electronics-7',
    store: 'electronics',
    name: 'UltraVision 34" Curved OLED Monitor',
    category: 'Monitors',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviewCount: 240,
    badge: 'Save $300',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Breathtaking 34" 1800R curved QD-OLED monitor with UWQHD resolution, 240Hz refresh rate, 0.03ms response time, and 99.3% DCI-P3 color gamut.',
    variants: {
      type: 'size',
      label: 'Screen Size',
      options: ['34" Ultrawide OLED', '49" Super Ultrawide']
    },
    colors: ['Cosmic Silver'],
    specs: {
      'Resolution': '3440 x 1440 (21:9 UWQHD)',
      'Refresh Rate': '240Hz with AMD FreeSync Premium Pro',
      'Response Time': '0.03ms (GtG)',
      'Contrast Ratio': '1,500,000:1 (DisplayHDR True Black 400)'
    }
  },
  {
    id: 'electronics-8',
    store: 'electronics',
    name: 'TrueAudio Studio Pro Earbuds',
    category: 'Audio',
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.7,
    reviewCount: 380,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'True wireless spatial audio earbuds featuring dual balanced armature and dynamic hybrid drivers, personalized hearing test EQ, and IPX7 waterproofing.',
    variants: {
      type: 'color',
      label: 'Color',
      options: ['Midnight Blue', 'Matte Sand', 'Graphite']
    },
    colors: ['Midnight Blue', 'Matte Sand', 'Graphite'],
    specs: {
      'Drivers': 'Hybrid Coaxial Dual Drivers (11mm + 6mm)',
      'ANC': 'Real-Time Adaptive Noise Cancellation',
      'Playtime': '9 Hours (Earbuds) + 36 Hours (Qi Case)',
      'Protection': 'IPX7 Water & Sweatproof'
    }
  },
  {
    id: 'electronics-9',
    store: 'electronics',
    name: 'NeoTab Pro 12.9" Creator Tablet',
    category: 'Tablets',
    price: 799,
    originalPrice: 949,
    discount: 16,
    rating: 4.8,
    reviewCount: 185,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The ultimate canvas for digital illustrators and creatives. Features 12.9-inch 120Hz anti-glare screen, 4096-pressure level active pen, and desktop multitasking mode.',
    variants: {
      type: 'storage',
      label: 'Storage',
      options: ['128GB Wi-Fi', '256GB Wi-Fi', '512GB 5G Cellular']
    },
    colors: ['Space Gray', 'Starlight Silver'],
    specs: {
      'Screen': '12.9" Mini-LED (2732 x 2048, 120Hz)',
      'RAM & Storage': '8GB LPDDR5 / 256GB Fast Flash',
      'Stylus': 'Magnetic Ultra-Low Latency Pen Included',
      'Speakers': 'Quad Stereo Tuned by Dolby Atmos'
    }
  },
  {
    id: 'electronics-10',
    store: 'electronics',
    name: 'BoomStorm 360° IPX8 Bluetooth Speaker',
    category: 'Audio',
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.8,
    reviewCount: 290,
    badge: 'Waterproof',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rugged 60W omnidirectional portable speaker with dual passive bass radiators, dynamic beat-synced RGB halo lights, and floating waterproof chassis.',
    variants: {
      type: 'color',
      label: 'Color',
      options: ['Forest Camo', 'Stealth Black', 'Sunset Orange']
    },
    colors: ['Stealth Black', 'Sunset Orange'],
    specs: {
      'Power Output': '60W RMS Omnidirectional Surround',
      'Water Rating': 'IPX8 (Submersible up to 1m for 30min)',
      'Battery': '24 Hours Playback / Powerbank Output',
      'Pairing': 'True Wireless Stereo (Link 100+ Speakers)'
    }
  },
  {
    id: 'electronics-11',
    store: 'electronics',
    name: 'Quantum Drone 4K Pro Gimbal',
    category: 'Drones',
    price: 649,
    originalPrice: 799,
    discount: 19,
    rating: 4.8,
    reviewCount: 110,
    badge: 'Pro Video',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Foldable 249g ultralight drone equipped with 3-axis mechanical gimbal, 4K/60fps HDR video recording, 38-minute flight time, and omnidirectional obstacle sensing.',
    variants: {
      type: 'package',
      label: 'Bundle',
      options: ['Standard Kit', 'Fly More Combo (3 Batteries)']
    },
    colors: ['Aero Gray'],
    specs: {
      'Video Quality': '4K / 60fps HDR 10-Bit D-Log',
      'Weight': '249g (No Registration Needed in Most Regions)',
      'Flight Duration': '38 Minutes per Battery',
      'Range': '10km HD Video Transmission'
    }
  },
  {
    id: 'electronics-12',
    store: 'electronics',
    name: 'SmartHome Hub Max 10" Display',
    category: 'Smart Home',
    price: 229,
    originalPrice: 279,
    discount: 18,
    rating: 4.6,
    reviewCount: 145,
    badge: 'Matter Ready',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Universal smart home center with 10.1" HD touchscreen, built-in Zigbee & Matter bridge, motorized auto-framing video call camera, and room-filling audio.',
    variants: {
      type: 'color',
      label: 'Fabric Color',
      options: ['Chalk Grey', 'Charcoal Black']
    },
    colors: ['Chalk Grey', 'Charcoal Black'],
    specs: {
      'Display': '10.1" HD (1280x800) IPS Anti-Glare',
      'Smart Protocols': 'Matter, Thread, Zigbee 3.0, Wi-Fi 6',
      'Camera': '13MP Wide-Angle with Physical Privacy Shutter',
      'Audio': 'Stereo 2.1 Speaker System with Passive Woofer'
    }
  },

  // ==========================================
  // STORE 3: FURNITURE STORE (12 Products)
  // ==========================================
  {
    id: 'furniture-1',
    store: 'furniture',
    name: 'Nordic Cloud 3-Seater Sofa',
    category: 'Living Room',
    price: 1250,
    originalPrice: 1550,
    discount: 19,
    rating: 4.9,
    reviewCount: 180,
    badge: 'Design Icon',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Organic curved 3-seater sofa draped in tactile textured bouclé fabric. Supported by a solid kiln-dried ash wood inner frame with premium high-density feather-blend cushions.',
    variants: {
      type: 'fabric',
      label: 'Upholstery Fabric',
      options: ['Ivory Bouclé', 'Sand Linen Blend', 'Charcoal Velvet']
    },
    colors: ['Ivory', 'Sand', 'Charcoal'],
    specs: {
      'Frame': 'FSC-Certified Solid Kiln-Dried Ash',
      'Cushions': 'High-Resilience Foam with Feather-Down Wrap',
      'Dimensions': '240cm W x 95cm D x 78cm H',
      'Origin': 'Designed & Crafted in Copenhagen, Denmark'
    }
  },
  {
    id: 'furniture-2',
    store: 'furniture',
    name: 'Ergonomic Lounge Chair & Ottoman',
    category: 'Living Room',
    price: 780,
    originalPrice: 950,
    discount: 18,
    rating: 4.9,
    reviewCount: 140,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580481077195-c290119e075c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Mid-century architectural silhouette reimagined for modern sanctuaries. 7-ply molded American walnut plywood paired with supple top-grain Italian aniline leather.',
    variants: {
      type: 'wood',
      label: 'Wood & Leather',
      options: ['Walnut / Black Leather', 'Oak / Cognac Leather', 'Ebony / Dark Brown']
    },
    colors: ['Cognac Leather', 'Black Leather'],
    specs: {
      'Shell': '7-Ply Molded Walnut Plywood',
      'Leather': '100% Top-Grain Italian Aniline Leather',
      'Base': 'Cast Aluminum 360° Swivel Base',
      'Warranty': '10-Year Structural Guarantee'
    }
  },
  {
    id: 'furniture-3',
    store: 'furniture',
    name: 'Solid White Oak Dining Table',
    category: 'Dining',
    price: 1100,
    originalPrice: 1380,
    discount: 20,
    rating: 4.8,
    reviewCount: 95,
    badge: 'Solid Wood',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Generous extendable dining table handcrafted from solid European white oak with soft beveled edges, concealed butterfly extension leaf, and organic matte wax finish.',
    variants: {
      type: 'size',
      label: 'Table Length',
      options: ['180cm (Seats 6)', '220cm (Seats 8)', '260cm Extendable (Seats 10)']
    },
    colors: ['Natural White Oak', 'Smoked Dark Oak'],
    specs: {
      'Timber': '100% Solid European White Oak (FSC Certified)',
      'Finish': 'Zero-VOC Eco-Friendly Natural Oil/Wax',
      'Capacity': '6 to 10 Guests with Butterfly Leaf',
      'Assembly': 'White-Glove In-Home Setup Included'
    }
  },
  {
    id: 'furniture-4',
    store: 'furniture',
    name: 'Minimalist Platform Bed Frame',
    category: 'Bedroom',
    price: 950,
    originalPrice: 1200,
    discount: 21,
    rating: 4.8,
    reviewCount: 110,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Low-profile solid timber platform bed featuring traditional Japanese joinery, floating leg design, and an angled ergonomic upholstered headboard.',
    variants: {
      type: 'size',
      label: 'Bed Size',
      options: ['Full', 'Queen', 'King', 'California King']
    },
    colors: ['Natural Oak', 'Warm Walnut'],
    specs: {
      'Material': 'Solid American Hardwood Walnut',
      'Slats': 'Noise-Free Solid Pine Slat System',
      'Weight Capacity': '450 kg (1000 lbs)',
      'Clearance': '20cm Floating Under-Bed Clearance'
    }
  },
  {
    id: 'furniture-5',
    store: 'furniture',
    name: 'Arc Brass Architectural Floor Lamp',
    category: 'Lighting',
    price: 320,
    originalPrice: 390,
    discount: 18,
    rating: 4.7,
    reviewCount: 75,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sculptural sweeping arc floor lamp anchored by a solid honed Italian Carrara marble base, spun brushed brass shade, and step-less foot dimmer.',
    variants: {
      type: 'finish',
      label: 'Finish',
      options: ['Brushed Brass', 'Matte Black Metal', 'Polished Chrome']
    },
    colors: ['Brushed Brass', 'Matte Black'],
    specs: {
      'Base': 'Solid Italian White Carrara Marble (18kg)',
      'Stem / Shade': 'Spun Solid Brass with Satin Lacquer',
      'Height': '215cm Max Reach Height',
      'Bulb': 'Dimmable Warm LED 2700K (Included)'
    }
  },
  {
    id: 'furniture-6',
    store: 'furniture',
    name: 'Sculptural Travertine Coffee Table',
    category: 'Living Room',
    price: 640,
    originalPrice: 780,
    discount: 18,
    rating: 4.9,
    reviewCount: 62,
    badge: 'Natural Stone',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Monolithic organic shape coffee table made from unfilled honed Italian beige travertine stone, revealing subtle natural mineral veining in every unique piece.',
    variants: {
      type: 'shape',
      label: 'Shape',
      options: ['Organic Pebble', 'Rectangular Fluted']
    },
    colors: ['Beige Roman Travertine'],
    specs: {
      'Stone': '100% Honed Italian Travertine Slab',
      'Weight': '42 kg Solid Stone',
      'Sealer': 'Stain-Resistant Matte Stone Impregnator',
      'Dimensions': '110cm L x 65cm W x 38cm H'
    }
  },
  {
    id: 'furniture-7',
    store: 'furniture',
    name: 'Executive Ergonomic Mesh Chair',
    category: 'Office',
    price: 450,
    originalPrice: 550,
    discount: 18,
    rating: 4.9,
    reviewCount: 230,
    badge: 'Ergonomic',
    image: 'https://images.unsplash.com/photo-1580481077195-c290119e075c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580481077195-c290119e075c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-performance ergonomic task chair with responsive auto-tuning lumbar mechanism, 4D multi-directional armrests, and cooling elastomeric breathable mesh.',
    variants: {
      type: 'color',
      label: 'Frame Color',
      options: ['Graphite Black', 'Mineral White / Silver Base']
    },
    colors: ['Graphite Black', 'Mineral White'],
    specs: {
      'Lumbar': 'Self-Adjusting Dynamic Spine Support',
      'Armrests': '4D Adjustable (Height, Angle, Depth, Width)',
      'Base': 'Polished Die-Cast Aluminum with Smooth Caster Wheels',
      'Certification': 'BIFMA Compliant / 300 lbs Rated'
    }
  },
  {
    id: 'furniture-8',
    store: 'furniture',
    name: 'Modular Solid Walnut Bookshelf',
    category: 'Office',
    price: 820,
    originalPrice: 990,
    discount: 17,
    rating: 4.8,
    reviewCount: 54,
    badge: 'Modular',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Architectural open-back shelving system made of solid American walnut with interlocking mortise-and-tenon joints. Configurable in vertical or horizontal orientation.',
    variants: {
      type: 'size',
      label: 'Tiers',
      options: ['4-Tier Compact', '5-Tier High', '6-Tier Double Width']
    },
    colors: ['American Walnut', 'Bleached Oak'],
    specs: {
      'Wood': 'Solid Sustainably-Harvested American Walnut',
      'Shelves': '5 Interlocking Load-Bearing Shelves',
      'Wall Anchor': 'Concealed Heavy-Duty Steel Wall Kit Included',
      'Dimensions': '100cm W x 32cm D x 185cm H'
    }
  },
  {
    id: 'furniture-9',
    store: 'furniture',
    name: 'Fluted Ceramic & Linen Bedside Table',
    category: 'Bedroom',
    price: 280,
    originalPrice: 340,
    discount: 18,
    rating: 4.7,
    reviewCount: 48,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Cylindrical fluted nightstand with a soft textured cream finish, solid brass pull knob, and velvet-lined soft-close storage drawer.',
    variants: {
      type: 'size',
      label: 'Height',
      options: ['45cm Low', '55cm Standard']
    },
    colors: ['Oatmeal Cream', 'Terracotta Nude'],
    specs: {
      'Material': 'High-Density Engineered Composite & Oak Veneer',
      'Hardware': 'Solid Brushed Brass Pull',
      'Drawer': 'Under-Mount Soft-Close Glides',
      'Dimensions': '44cm Diameter x 52cm Height'
    }
  },
  {
    id: 'furniture-10',
    store: 'furniture',
    name: 'Hand-blown Smoked Glass Pendant Light',
    category: 'Lighting',
    price: 210,
    originalPrice: 260,
    discount: 19,
    rating: 4.8,
    reviewCount: 86,
    badge: 'Artisan',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Mouth-blown amber smoked glass orb pendant light suspended by an adjustable braided black textile cord with brushed antique brass canopy.',
    variants: {
      type: 'size',
      label: 'Globe Diameter',
      options: ['25cm Globe', '35cm Large Statement Globe']
    },
    colors: ['Smoked Amber', 'Opal Frosted White'],
    specs: {
      'Glass': 'Artisan Hand-Blown Borosilicate Glass',
      'Cord': '200cm Adjustable Braided Fabric Cable',
      'Socket': 'Standard E26 / E27 (Max 60W)',
      'Dimming': 'Fully Dimmable with Compatible Switch'
    }
  },
  {
    id: 'furniture-11',
    store: 'furniture',
    name: 'Hand-Woven Wool & Jute Area Rug',
    category: 'Decor',
    price: 480,
    originalPrice: 600,
    discount: 20,
    rating: 4.8,
    reviewCount: 115,
    badge: 'Natural Fiber',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxuriously textured flat-weave area rug hand-loomed by master weavers from un-dyed New Zealand wool and sustainable golden Indian jute fibers.',
    variants: {
      type: 'size',
      label: 'Dimensions',
      options: ['5x8 ft (150x240cm)', '8x10 ft (240x300cm)', '9x12 ft (270x360cm)']
    },
    colors: ['Oatmeal Heather', 'Sand & Slate'],
    specs: {
      'Weave': '60% New Zealand Wool, 40% Natural Jute',
      'Pile': 'Low-Profile Reversible Flatweave (8mm)',
      'Backing': 'Natural Latex Non-Slip Treatment',
      'Origin': 'GoodWeave Certified Loom, Jaipur'
    }
  },
  {
    id: 'furniture-12',
    store: 'furniture',
    name: 'Upholstered Bar Stools (Set of 2)',
    category: 'Dining',
    price: 360,
    originalPrice: 440,
    discount: 18,
    rating: 4.7,
    reviewCount: 68,
    badge: 'Set of 2',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Pair of contemporary counter-height bar stools with curved supportive backrest, stain-resistant textured fabric upholstery, and powder-coated steel legs.',
    variants: {
      type: 'size',
      label: 'Height',
      options: ['65cm Counter Height', '75cm Bar Height']
    },
    colors: ['Warm Sand', 'Olive Velvet', 'Charcoal'],
    specs: {
      'Frame': 'Welded Tubular Steel with Matte Powder-Coat',
      'Fabric': 'High-Performance Stain-Resistant Polyester',
      'Quantity': 'Sold as a Matched Pair (2 Stools)',
      'Weight Limit': '135 kg (300 lbs) per stool'
    }
  },

  // ==========================================
  // STORE 4: BEAUTY & COSMETICS (12 Products)
  // ==========================================
  {
    id: 'beauty-1',
    store: 'beauty',
    name: 'Triple Peptide Hydra-Glow Serum',
    category: 'Skincare',
    price: 68,
    originalPrice: 85,
    discount: 20,
    rating: 4.9,
    reviewCount: 480,
    badge: 'Cult Favorite',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-54d9c4900a35?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Clinical-grade revitalizing serum infused with 3 bio-mimetic peptides, multi-molecular hyaluronic acid, and fermented botanicals to plump, hydrate, and restore radiant elasticity.',
    variants: {
      type: 'volume',
      label: 'Bottle Volume',
      options: ['30ml Travel Size', '50ml Standard Serum', '100ml Value Size']
    },
    colors: ['Clear Bio-Active Formula'],
    specs: {
      'Key Actives': 'Matrixyl 3000 (3%), Argireline (2%), 5-Chain HA',
      'Skin Types': 'Dry, Normal, Sensitive, Combination',
      'Standards': '100% Vegan, Cruelty-Free, Fragrance-Free',
      'Clinical Trial': '98% reported improved skin bounce within 14 days'
    }
  },
  {
    id: 'beauty-2',
    store: 'beauty',
    name: 'Barrier Repair Ceramide Moisturizer',
    category: 'Skincare',
    price: 54,
    originalPrice: 68,
    discount: 21,
    rating: 4.9,
    reviewCount: 390,
    badge: 'Derm Approved',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rich yet lightweight barrier-strengthening cream formulated with 5 essential ceramides (EOP, NS, NP, AS, AP), soothing centella asiatica, and pure squalane.',
    variants: {
      type: 'volume',
      label: 'Jar Size',
      options: ['50ml Jar', '100ml Jumbo Pump']
    },
    colors: ['Silky Cream'],
    specs: {
      'Ceramides': 'Full 5-Ceramide Biomimetic Complex',
      'Soothe': 'Organic Centella Asiatica (Cica) & Oat Beta-Glucan',
      'Texture': 'Velvety Non-Greasy Cloud Cream',
      'Dermatology': 'Non-Comedogenic, Hypoallergenic Tested'
    }
  },
  {
    id: 'beauty-3',
    store: 'beauty',
    name: 'Velvet Matte Longwear Lipstick',
    category: 'Makeup',
    price: 32,
    originalPrice: 38,
    discount: 16,
    rating: 4.8,
    reviewCount: 310,
    badge: '12H Wear',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-saturated lightweight matte lipstick packed with micro-encapsulated hyaluronic spheres and vitamin E for comfortable non-drying 12-hour wear.',
    variants: {
      type: 'shade',
      label: 'Lip Shade',
      options: ['Nude Bloom', 'Rose Petal', 'Crimson Noir', 'Terracotta Glow']
    },
    colors: ['Nude Bloom', 'Crimson Noir', 'Rose Petal'],
    specs: {
      'Finish': 'Airy Soft Velvet Matte',
      'Hydration': 'Hyaluronic Filling Spheres & Jojoba Butter',
      'Pigment': 'High-Impact Single Swipe Color',
      'Case': 'Weighted Magnetic Monogram Metal Case'
    }
  },
  {
    id: 'beauty-4',
    store: 'beauty',
    name: 'Luminous Silk Mineral Foundation',
    category: 'Makeup',
    price: 46,
    originalPrice: 58,
    discount: 21,
    rating: 4.8,
    reviewCount: 275,
    badge: 'SPF 30',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Medium-to-full buildable foundation infused with micro-pearl radiance and non-nano zinc oxide mineral SPF 30 protection for a seamless second-skin glow.',
    variants: {
      type: 'shade',
      label: 'Complexion Shade',
      options: ['Fair Neutral (10N)', 'Light Warm (20W)', 'Medium Golden (30G)', 'Deep Tan (40D)']
    },
    colors: ['10N Fair', '20W Light', '30G Medium', '40D Deep'],
    specs: {
      'Coverage': 'Medium Buildable Dewy Satin Finish',
      'Protection': 'Broad Spectrum Mineral SPF 30 (Zinc Oxide)',
      'Longevity': '16-Hour Transfer-Resistant Wear',
      'Volume': '30ml Glass Dropper Bottle'
    }
  },
  {
    id: 'beauty-5',
    store: 'beauty',
    name: 'Bois Sauvage & Bergamot Eau De Parfum',
    category: 'Fragrance',
    price: 125,
    originalPrice: 155,
    discount: 19,
    rating: 4.9,
    reviewCount: 195,
    badge: 'Luxury Parfum',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An alluring unisex eau de parfum opening with sparkling Calabrian bergamot and cracked pink pepper, unfurling into cedarwood, vetiver, and smoky smoked agarwood.',
    variants: {
      type: 'volume',
      label: 'Parfum Size',
      options: ['50ml Glass Flacon', '100ml Master Edition']
    },
    colors: ['Golden Amber Essence'],
    specs: {
      'Concentration': '22% Pure Extrait de Parfum',
      'Top Notes': 'Calabrian Bergamot, Pink Peppercorn, Cardamom',
      'Heart Notes': 'French Lavender, Orris Root, Cedarwood',
      'Base Notes': 'Smoked Oud, Haitian Vetiver, Ambergris'
    }
  },
  {
    id: 'beauty-6',
    store: 'beauty',
    name: 'Botanical Biotin Repair Shampoo',
    category: 'Haircare',
    price: 36,
    originalPrice: 45,
    discount: 20,
    rating: 4.7,
    reviewCount: 220,
    badge: 'Sulfate Free',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sulfate-free scalp clarifying and strand-fortifying shampoo enriched with botanical biotin, plant keratin, cold-pressed argan oil, and rosemary extract.',
    variants: {
      type: 'volume',
      label: 'Size',
      options: ['250ml Bottle', '500ml Salon Pump']
    },
    colors: ['Herbal Botanical'],
    specs: {
      'Actives': 'Plant Keratin, Pure Biotin, Rosemary Essential Oil',
      'Free From': 'Sulfates (SLS/SLES), Silicones, Parabens',
      'Benefit': 'Reduces breakage by 76% in 3 weeks',
      'Packaging': '100% Post-Consumer Recycled Ocean Plastic'
    }
  },
  {
    id: 'beauty-7',
    store: 'beauty',
    name: 'Overnight AHA/BHA Resurfacing Mask',
    category: 'Skincare',
    price: 58,
    originalPrice: 72,
    discount: 19,
    rating: 4.8,
    reviewCount: 165,
    badge: 'Glow Reveal',
    image: 'https://images.unsplash.com/photo-1567928815117-640a316dcba3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567928815117-640a316dcba3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Transformative jelly sleeping mask powered by 10% Glycolic + Lactic AHA acid blend and 2% Salicylic BHA to gently dissolve dead skin cells while you rest.',
    variants: {
      type: 'volume',
      label: 'Volume',
      options: ['50ml Jar']
    },
    colors: ['Rose Quartz Jelly'],
    specs: {
      'Acids': '10% Lactic & Glycolic (AHA), 2% Salicylic (BHA)',
      'Hydrators': 'Prickly Pear Seed Extract & Hyaluronic Acid',
      'Usage': 'Apply 2-3 nights per week before sleep',
      'Tested': 'Dermatologist tested for sensitive skin'
    }
  },
  {
    id: 'beauty-8',
    store: 'beauty',
    name: 'Whipped Shea & Jojoba Body Butter',
    category: 'Body Care',
    price: 42,
    originalPrice: 52,
    discount: 19,
    rating: 4.8,
    reviewCount: 140,
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Decadent whipped body cream handcrafted from raw Ghanaian shea butter, golden jojoba oil, and Madagascar vanilla bean. Melts on contact into skin.',
    variants: {
      type: 'scent',
      label: 'Natural Fragrance',
      options: ['Vanilla Sandalwood', 'Coconut Blossom', 'Unscented Pure']
    },
    colors: ['Whipped Butter'],
    specs: {
      'Base': 'Fair-Trade Certified Raw African Shea Butter',
      'Nourish': 'Sweet Almond Oil, Jojoba, Vitamin E',
      'Absorption': 'Deeply moisturizing with zero sticky residue',
      'Volume': '200g Eco Aluminium Tub'
    }
  },
  {
    id: 'beauty-9',
    store: 'beauty',
    name: 'Amino Acid Gentle Foaming Cleanser',
    category: 'Skincare',
    price: 34,
    originalPrice: 42,
    discount: 19,
    rating: 4.9,
    reviewCount: 310,
    badge: 'pH 5.5',
    image: 'https://images.unsplash.com/photo-1556228722-d0b5d0382ebc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228722-d0b5d0382ebc?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-gentle gel-to-foam cleanser with apple-derived amino acid surfactants and organic green tea extract that cleanses without stripping natural moisture.',
    variants: {
      type: 'volume',
      label: 'Size',
      options: ['150ml Standard', '300ml Refill Pouch']
    },
    colors: ['Clear Gel'],
    specs: {
      'Surfactants': '100% Amino Acid Derived (No Sulfates)',
      'pH Balance': 'Skin-identical pH 5.5',
      'Extracts': 'Uji Green Tea, Chamomile, Allantoin',
      'Safe': 'Eye-safe, removes non-waterproof makeup'
    }
  },
  {
    id: 'beauty-10',
    store: 'beauty',
    name: 'Awakening Caffeine & Peptide Eye Cream',
    category: 'Skincare',
    price: 48,
    originalPrice: 60,
    discount: 20,
    rating: 4.8,
    reviewCount: 240,
    badge: 'Dark Circles',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e6a094bb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512290900672-1f02e6a094bb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Targeted eye contour cream with 3% green coffee caffeine and Haloxyl peptide complex. Equipped with a cryogenic cooling ceramic tip to de-puff tired eyes.',
    variants: {
      type: 'volume',
      label: 'Size',
      options: ['15ml Precision Tube']
    },
    colors: ['Illuminating Cream'],
    specs: {
      'Actives': '3% Active Caffeine, Haloxyl, Vitamin K',
      'Applicator': 'Ergonomic Cryo-Cooling Ceramic Tip',
      'Results': 'Visible reduction in puffiness in 10 minutes',
      'Ophthalmology': 'Safe for contact lens wearers'
    }
  },
  {
    id: 'beauty-11',
    store: 'beauty',
    name: '15% Vitamin C Brightening Facial Oil',
    category: 'Skincare',
    price: 62,
    originalPrice: 78,
    discount: 21,
    rating: 4.8,
    reviewCount: 180,
    badge: 'Antioxidant',
    image: 'https://images.unsplash.com/photo-1608248597359-54d9c4900a35?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608248597359-54d9c4900a35?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stable lipid-soluble 15% THD Ascorbate (Vitamin C) blended in cold-pressed rosehip and marula oils for dark spot fading and radiant antioxidant defense.',
    variants: {
      type: 'volume',
      label: 'Bottle',
      options: ['30ml Dropper']
    },
    colors: ['Golden Rosehip Oil'],
    specs: {
      'Vitamin C': '15% Tetrahexyldecyl Ascorbate (Non-Irritating)',
      'Carrier Oils': 'Virgin Rosehip Seed & Organic Marula Oil',
      'Stability': 'Won’t oxidize or turn orange (12-month shelf life)',
      'Benefit': 'Fades sun damage and post-acne marks'
    }
  },
  {
    id: 'beauty-12',
    store: 'beauty',
    name: 'Scalp Detox Exfoliating Scrub 200g',
    category: 'Haircare',
    price: 38,
    originalPrice: 48,
    discount: 21,
    rating: 4.7,
    reviewCount: 95,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Purifying whipped scalp treatment infused with micro-fine Himalayan pink sea salt crystals, organic tea tree oil, and apple cider vinegar to eliminate buildup.',
    variants: {
      type: 'volume',
      label: 'Tub Size',
      options: ['200g Jar']
    },
    colors: ['Pink Salt Scrub'],
    specs: {
      'Exfoliator': 'Ultra-fine Himalayan Pink Sea Salt Crystals',
      'Purifiers': 'Australian Tea Tree, Peppermint, ACV',
      'Usage': 'Weekly pre-shampoo scalp massage',
      'Formula': 'Biodegradable micro-plastic free formula'
    }
  },

  // ==========================================
  // STORE 5: GENERAL ONLINE STORE (12 Products)
  // ==========================================
  {
    id: 'general-1',
    store: 'general-store',
    name: 'Horizon Ultra 5G Smartphone 256GB',
    category: 'Electronics',
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.8,
    reviewCount: 620,
    badge: 'Mega Deal',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-performance all-around 5G smartphone featuring 6.5" 120Hz AMOLED display, 64MP triple camera, 5000mAh battery, and 67W Turbo Flash charging.',
    variants: {
      type: 'storage',
      label: 'Memory',
      options: ['128GB / 6GB RAM', '256GB / 8GB RAM', '512GB / 12GB RAM']
    },
    colors: ['Obsidian Black', 'Aurora Blue'],
    specs: {
      'Processor': 'Snapdragon Octa-Core 5G',
      'Battery': '5,000 mAh with 67W Fast Charger in Box',
      'Screen': '6.5" AMOLED 120Hz HDR10+',
      'Warranty': '2-Year Full Manufacturer Warranty'
    }
  },
  {
    id: 'general-2',
    store: 'general-store',
    name: 'Velocity Boost Pro Athletic Shoes',
    category: 'Fashion',
    price: 110,
    originalPrice: 140,
    discount: 21,
    rating: 4.8,
    reviewCount: 410,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for distance running and everyday active comfort. Responsive nitrogen-infused foam midsole with high-grip Continental rubber outsoles.',
    variants: {
      type: 'size',
      label: 'Size',
      options: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12']
    },
    colors: ['Flame Red', 'Triple Black', 'Cyber Volt'],
    specs: {
      'Upper': 'Engineered Seamless Breathable Knit',
      'Midsole': 'Nitrogen-Infused Energy Return Foam',
      'Weight': '240g (Lightweight Racing Spec)',
      'Terrain': 'Road, Track, Treadmill'
    }
  },
  {
    id: 'general-3',
    store: 'general-store',
    name: 'Voyager Waterproof Laptop Backpack',
    category: 'Accessories',
    price: 75,
    originalPrice: 95,
    discount: 21,
    rating: 4.7,
    reviewCount: 330,
    badge: 'TSA Ready',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    description: '30L water-resistant daily commuter and travel backpack with padded 16-inch laptop compartment, integrated USB charging port, and hidden anti-theft pocket.',
    variants: {
      type: 'capacity',
      label: 'Capacity',
      options: ['25L Daily', '30L Expandable Travel']
    },
    colors: ['Slate Grey', 'Midnight Black', 'Navy'],
    specs: {
      'Material': '900D High-Density Waterproof Polyester',
      'Laptop Sleeve': 'Fleece Padded Fits up to 16.2" Laptop',
      'Features': 'Luggage Strap, USB Passthrough Port, Lockable Zippers',
      'Dimensions': '48cm x 32cm x 18cm'
    }
  },
  {
    id: 'general-4',
    store: 'general-store',
    name: 'StudioPro Noise-Cancelling Headphones',
    category: 'Electronics',
    price: 129,
    originalPrice: 179,
    discount: 28,
    rating: 4.7,
    reviewCount: 540,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Wireless over-ear Bluetooth 5.3 headphones with 40-hour battery, deep dynamic bass boost mode, memory foam ear cups, and fold-flat travel case.',
    variants: {
      type: 'color',
      label: 'Color',
      options: ['Matte Black', 'Silver Grey', 'Deep Navy']
    },
    colors: ['Matte Black', 'Silver Grey'],
    specs: {
      'Battery Life': '40 Hours ANC On / 60 Hours Normal',
      'ANC': 'Digital Active Noise Cancelling (-35dB)',
      'Fast Charge': '10 min charge = 5 hours playback',
      'Microphone': 'Quad Mic with AI Voice Clarification'
    }
  },
  {
    id: 'general-5',
    store: 'general-store',
    name: 'Barista Touch Espresso Machine',
    category: 'Home',
    price: 249,
    originalPrice: 329,
    discount: 24,
    rating: 4.9,
    reviewCount: 280,
    badge: 'Top Kitchen',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Commercial-style 19-bar Italian pump espresso machine with digital touchscreen presets, ThermoBlock 25-second rapid heat-up, and manual micro-foam steam wand.',
    variants: {
      type: 'finish',
      label: 'Finish',
      options: ['Brushed Stainless Steel', 'Matte Black Edition']
    },
    colors: ['Stainless Steel', 'Matte Black'],
    specs: {
      'Pressure': '19-Bar High-Pressure Italian Pump',
      'Water Tank': '1.8L Removable BPA-Free Reservoir',
      'Heating': 'ThermoBlock Instant Heating System',
      'Includes': 'Portafilter, Single & Double Filters, Tamper, Milk Pitcher'
    }
  },
  {
    id: 'general-6',
    store: 'general-store',
    name: 'FitTrack GPS Multisport Smartwatch',
    category: 'Sports',
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.6,
    reviewCount: 390,
    badge: 'Fitness Essential',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Versatile waterproof fitness smartwatch with 1.4" color AMOLED screen, 120+ sport tracking modes, 24/7 heart rate monitor, sleep stage tracker, and 14-day battery.',
    variants: {
      type: 'color',
      label: 'Strap Color',
      options: ['Midnight Black', 'Cobalt Blue', 'Rose Pink']
    },
    colors: ['Midnight Black', 'Cobalt Blue'],
    specs: {
      'Display': '1.4" HD AMOLED with Always-On Display',
      'Battery': 'Up to 14 Days on a Single Magnetic Charge',
      'Water Resistance': '5 ATM (50 Meters Swim-Proof)',
      'Compatibility': 'iOS & Android App Synchronization'
    }
  },
  {
    id: 'general-7',
    store: 'general-store',
    name: 'PureGlow 4-Piece Daily Skincare Set',
    category: 'Beauty',
    price: 65,
    originalPrice: 85,
    discount: 24,
    rating: 4.8,
    reviewCount: 210,
    badge: 'Bundle Deal',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Complete 4-step daily brightening and hydration ritual: Gentle Amino Cleanser (100ml), Balancing Mist (100ml), Glow Vitamin Serum (30ml), and Moisture Cream (50ml).',
    variants: {
      type: 'skin',
      label: 'Skin Type Routine',
      options: ['All Skin Types Formula', 'Sensitive Skin Routine']
    },
    colors: ['Clean Formula'],
    specs: {
      'Contents': '4 Full-Size Skincare Essentials in Gift Box',
      'Ingredients': 'Hyaluronic Acid, Vitamin C, Niacinamide, Squalane',
      'Standards': 'Cruelty-Free, Sulfate-Free, Paraben-Free',
      'Value': '$115 Individual Retail Value'
    }
  },
  {
    id: 'general-8',
    store: 'general-store',
    name: 'AeroFlex Lightweight Gym Sneakers',
    category: 'Sports',
    price: 85,
    originalPrice: 105,
    discount: 19,
    rating: 4.7,
    reviewCount: 185,
    badge: 'Comfort Fit',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-flexible cross-training workout shoes with breathable stretch-knit mesh, high-impact EVA heel crash pad, and anatomical arch support insoles.',
    variants: {
      type: 'size',
      label: 'Shoe Size',
      options: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11']
    },
    colors: ['Ghost White / Grey', 'Triple Black', 'Pastel Pink'],
    specs: {
      'Upper': '4-Way Stretch Engineered Jacquard Knit',
      'Outsole': 'Multi-Directional Traction Hexagonal Rubber',
      'Closure': 'Lace-Up with Adaptive Midfoot Lockdown',
      'Care': 'Machine Washable on Cold Cycle'
    }
  },
  {
    id: 'general-9',
    store: 'general-store',
    name: 'Architect Dimmable LED Desk Lamp',
    category: 'Home',
    price: 45,
    originalPrice: 60,
    discount: 25,
    rating: 4.8,
    reviewCount: 270,
    badge: 'Qi Charging',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern aluminum folding desk lamp with 5 color temperatures, 10 smooth dimming levels, 10W wireless smartphone fast-charging base, and 45-minute auto-off timer.',
    variants: {
      type: 'color',
      label: 'Lamp Color',
      options: ['Anodized Space Gray', 'Matte White', 'Brushed Rose Gold']
    },
    colors: ['Space Gray', 'Matte White'],
    specs: {
      'Lighting': '52 Eye-Caring LEDs (CRI > 90, Flicker-Free)',
      'Wireless Charger': 'Qi-Certified 10W Fast Charging Base Pad',
      'Adjustability': 'Dual-Hinge 225° Arm + 90° Base Rotation',
      'Timer': 'Integrated 30/60 Minute Sleep Timer'
    }
  },
  {
    id: 'general-10',
    store: 'general-store',
    name: 'Aerolite 28" Expandable Suitcase',
    category: 'Lifestyle',
    price: 140,
    originalPrice: 185,
    discount: 24,
    rating: 4.8,
    reviewCount: 310,
    badge: 'Hard Shell',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Durable 100% German Bayer polycarbonate hard-shell check-in luggage with 360° silent dual-spinner wheels, recessed TSA combination lock, and 20% expansion zipper.',
    variants: {
      type: 'size',
      label: 'Luggage Size',
      options: ['20" Carry-On', '24" Medium Trip', '28" Long-Haul Check-in']
    },
    colors: ['Titanium Grey', 'Navy Blue', 'Forest Green'],
    specs: {
      'Shell': '100% Impact-Resistant Polycarbonate',
      'Wheels': '8 Silent 360° Ball-Bearing Spinner Wheels',
      'Security': 'TSA Approved 3-Digit Flush Combination Lock',
      'Weight': '4.1 kg (Empty)'
    }
  },
  {
    id: 'general-11',
    store: 'general-store',
    name: 'Stainless Steel Digital Air Fryer 6.5Qt',
    category: 'Home',
    price: 99,
    originalPrice: 139,
    discount: 29,
    rating: 4.9,
    reviewCount: 450,
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Extra-large 6.5-quart digital air fryer oven with 360° rapid air convection heat technology. Features 8 one-touch cooking presets and nonstick dishwasher-safe basket.',
    variants: {
      type: 'capacity',
      label: 'Capacity',
      options: ['5.0 Qt Family', '6.5 Qt Party XL']
    },
    colors: ['Stainless Steel & Onyx'],
    specs: {
      'Capacity': '6.5 Quart (Serves 4-6 People)',
      'Power': '1700W Rapid Heating Element (Up to 400°F / 200°C)',
      'Presets': 'Fries, Wings, Steak, Fish, Bake, Roast, Dehydrate, Reheat',
      'Cleaning': 'BPA/PFOA-Free Dishwasher Safe Basket'
    }
  },
  {
    id: 'general-12',
    store: 'general-store',
    name: 'UltraGrip Eco Yoga & Pilates Mat',
    category: 'Sports',
    price: 38,
    originalPrice: 50,
    discount: 24,
    rating: 4.8,
    reviewCount: 175,
    badge: 'Eco Friendly',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80'
    ],
    description: '6mm high-density non-slip eco TPE yoga mat featuring laser-engraved body alignment guidance system, sweat-activated grip, and carry strap included.',
    variants: {
      type: 'color',
      label: 'Color Blend',
      options: ['Sage Green / Mint', 'Dusty Rose / Coral', 'Midnight Blue / Grey']
    },
    colors: ['Sage Green', 'Dusty Rose', 'Midnight Blue'],
    specs: {
      'Material': '100% Biodegradable Certified Eco-Friendly TPE',
      'Thickness': '6mm Extra-Cushioned Joint Support',
      'Dimensions': '183cm L x 66cm W (Extra Long & Wide)',
      'Includes': 'Cotton Carry Sling & Storage Strap'
    }
  }
];

// Helper Functions for Data Access
function getProductsByStore(storeName) {
  return PRODUCTS_DATA.filter(product => product.store === storeName);
}

function getProductById(productId) {
  return PRODUCTS_DATA.find(product => product.id === productId);
}

function getCategoriesByStore(storeName) {
  const storeProducts = getProductsByStore(storeName);
  const categories = ['All', ...new Set(storeProducts.map(p => p.category))];
  return categories;
}

function searchProducts(query, storeName = null) {
  const cleanQuery = query.toLowerCase().trim();
  let pool = PRODUCTS_DATA;
  if (storeName) {
    pool = pool.filter(p => p.store === storeName);
  }
  if (!cleanQuery) return pool;
  return pool.filter(p => 
    p.name.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery) ||
    p.description.toLowerCase().includes(cleanQuery)
  );
}
