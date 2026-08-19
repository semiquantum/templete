/**
 * REAL ESTATE PROPERTY DATASET
 * SQ Studio Real Estate Website Template Showcase
 */

const PROPERTIES_DATA = [
  /* ============================================================
     TEMPLATE 1: ESTATELY (Agency Portfolio)
     ============================================================ */
  {
    id: "est-101",
    template: "agency",
    title: "The Grand Haven Villa",
    tagline: "Exquisite Modern Architectural Masterpiece",
    type: "Villa",
    purpose: "buy",
    price: 2450000,
    priceFormatted: "$2,450,000",
    location: "Oakridge Hills, Austin, TX",
    beds: 5,
    baths: 5.5,
    sqft: 5200,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Perched above scenic hills with panoramic sunset views, The Grand Haven Villa represents the peak of contemporary living. Featuring soaring 14-foot ceilings, imported Italian stone flooring, a temperature-controlled 500-bottle wine room, and an infinity pool overlooking private woodlands.",
    amenities: ["Infinity Pool", "Wine Cellar", "Smart Home Automation", "3-Car Garage", "Outdoor Kitchen", "Spa & Sauna", "Home Theater"],
    agent: {
      name: "Marcus Vance",
      role: "Senior Partner & Luxury Specialist",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      phone: "(512) 884-2190",
      email: "m.vance@estately-agency.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2023,
      parking: "3 Covered Spots",
      lotSize: "0.85 Acres",
      heatingCooling: "Multi-Zone Geothermal",
      hoa: "$220/mo"
    }
  },
  {
    id: "est-102",
    template: "agency",
    title: "Bellevue Coastal Residence",
    tagline: "Sun-drenched Waterfront Luxury Living",
    type: "House",
    purpose: "buy",
    price: 1850000,
    priceFormatted: "$1,850,000",
    location: "Coastal Bluffs, Newport Beach, CA",
    beds: 4,
    baths: 4,
    sqft: 3950,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Immaculately redesigned mid-century modern sanctuary located moments from Newport Harbor. Boasts seamless indoor-outdoor living, custom white-oak cabinetry, Sub-Zero appliances, and private deck with saltwater spa.",
    amenities: ["Waterfront View", "Private Hot Tub", "Sub-Zero Chef's Kitchen", "Fire Pit Lounge", "Solar Array", "Security System"],
    agent: {
      name: "Elena Rostova",
      role: "Principal Broker",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      phone: "(949) 715-4420",
      email: "elena@estately-agency.com",
      rating: 5.0
    },
    specs: {
      yearBuilt: 2021,
      parking: "2-Car Attached",
      lotSize: "0.45 Acres",
      heatingCooling: "Central Dual HVAC",
      hoa: "None"
    }
  },
  {
    id: "est-103",
    template: "agency",
    title: "Highland Park Modern Townhome",
    tagline: "Urban Elegance with Private Rooftop",
    type: "Apartment",
    purpose: "rent",
    price: 4800,
    priceFormatted: "$4,800/mo",
    location: "Highland Park, Dallas, TX",
    beds: 3,
    baths: 3.5,
    sqft: 2650,
    status: "For Rent",
    badgeType: "badge-rent",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Premium tri-level townhome in prestigious Highland Park. Features private internal elevator, 360-degree skyline views from rooftop terrace, quartz waterfall kitchen island, and secured garage.",
    amenities: ["Private Elevator", "Rooftop Terrace", "Quartz Countertops", "Walk-in Closets", "EV Charger", "Pet Friendly"],
    agent: {
      name: "Marcus Vance",
      role: "Senior Partner & Luxury Specialist",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      phone: "(512) 884-2190",
      email: "m.vance@estately-agency.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2022,
      parking: "2-Car Tandem",
      lotSize: "Townhome Lot",
      heatingCooling: "Smart Thermostat / Central Heat & AC",
      hoa: "$350/mo (Included in Rent)"
    }
  },
  {
    id: "est-104",
    template: "agency",
    title: "The Crestwood Manor",
    tagline: "Classic Countryside Estate with Modern Finish",
    type: "House",
    purpose: "buy",
    price: 3200000,
    priceFormatted: "$3,200,000",
    location: "Greenwich Foothills, CT",
    beds: 6,
    baths: 6.5,
    sqft: 6800,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An iconic Georgian-inspired estate nestled within 2.5 acres of manicured gardens. Complete with tennis court, heated lap pool, guest carriage house, and dual master suites.",
    amenities: ["Tennis Court", "Heated Pool", "Carriage House", "Library with Fireplace", "Security Gate", "Generator Backup"],
    agent: {
      name: "Sophia Chen",
      role: "Estates Director",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      phone: "(203) 594-8833",
      email: "s.chen@estately-agency.com",
      rating: 4.95
    },
    specs: {
      yearBuilt: 2020,
      parking: "4-Car Detached",
      lotSize: "2.50 Acres",
      heatingCooling: "Radiant Floor + Hydro-Air AC",
      hoa: "None"
    }
  },

  /* ============================================================
     TEMPLATE 2: HOMEHUB (Discovery Marketplace)
     ============================================================ */
  {
    id: "hub-201",
    template: "listing",
    title: "Skyline Panorama Penthouse",
    tagline: "Floor-to-Ceiling Windows with City Skyline",
    type: "Penthouse",
    purpose: "buy",
    price: 1980000,
    priceFormatted: "$1,980,000",
    location: "Downtown, Seattle, WA",
    beds: 3,
    baths: 3,
    sqft: 2850,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Live on top of the world in this penthouse marvel offering 270-degree vistas of Puget Sound and Mount Rainier. Private wrap-around sky terrace, custom Italian kitchen, and 24/7 concierge.",
    amenities: ["Sky Terrace", "24/7 Concierge", "Valet Parking", "Fitness Center", "Private Elevator", "Wine Storage"],
    agent: {
      name: "David Kim",
      role: "Urban Living Specialist",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      phone: "(206) 441-9080",
      email: "david@homehub-portal.com",
      rating: 4.85
    },
    specs: {
      yearBuilt: 2022,
      parking: "2 Reserved Garage",
      lotSize: "Condo Unit",
      heatingCooling: "Central Heat Pump & AC",
      hoa: "$840/mo"
    }
  },
  {
    id: "hub-202",
    template: "listing",
    title: "Meadowbrook Family Haven",
    tagline: "Charming Craftsman with Expanded Backyard",
    type: "House",
    purpose: "buy",
    price: 895000,
    priceFormatted: "$895,000",
    location: "Silver Lake, Portland, OR",
    beds: 4,
    baths: 3,
    sqft: 2900,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Beautifully updated Craftsman home on a quiet tree-lined cul-de-sac. Features a chef's kitchen with butcher-block island, covered cedar patio with outdoor fireplace, and top-rated school district.",
    amenities: ["Large Backyard", "Covered Cedar Patio", "Fireplace", "Hardwood Floors", "Workshop Shed", "Solar Ready"],
    agent: {
      name: "Rachel Morgan",
      role: "Residential Consultant",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      phone: "(503) 890-3321",
      email: "rachel@homehub-portal.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2018,
      parking: "2-Car Garage",
      lotSize: "0.32 Acres",
      heatingCooling: "High-Efficiency Gas Heat + AC",
      hoa: "$45/mo"
    }
  },
  {
    id: "hub-203",
    template: "listing",
    title: "Urban Loft at The Yards",
    tagline: "Industrial-Chic Brick & Beam Living",
    type: "Apartment",
    purpose: "rent",
    price: 3100,
    priceFormatted: "$3,100/mo",
    location: "River North, Chicago, IL",
    beds: 2,
    baths: 2,
    sqft: 1450,
    status: "For Rent",
    badgeType: "badge-rent",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Authentic timber and brick loft with 12ft exposed beams, oversized factory windows, polished concrete floors, and modern stainless steel appliances. Walkable to fine dining and transit.",
    amenities: ["Exposed Brick", "In-Unit Laundry", "Rooftop Pool", "Bike Storage", "Fitness Room", "Dog Wash Station"],
    agent: {
      name: "David Kim",
      role: "Urban Living Specialist",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      phone: "(206) 441-9080",
      email: "david@homehub-portal.com",
      rating: 4.85
    },
    specs: {
      yearBuilt: 2019,
      parking: "1 Heated Underground",
      lotSize: "Loft Unit",
      heatingCooling: "Central HVAC",
      hoa: "Included in rent"
    }
  },
  {
    id: "hub-204",
    template: "listing",
    title: "Solstice Modern Villa",
    tagline: "Eco-Conscious Architecture with Solar Oasis",
    type: "Villa",
    purpose: "buy",
    price: 1650000,
    priceFormatted: "$1,650,000",
    location: "Paradise Valley, Phoenix, AZ",
    beds: 4,
    baths: 4.5,
    sqft: 4100,
    status: "For Sale",
    badgeType: "badge-sale",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Stunning desert modern home designed for Net-Zero living. Features rammed-earth thermal walls, courtyard pool, seamless disappearing glass walls, and native xeriscape botanical landscaping.",
    amenities: ["Courtyard Pool", "Net-Zero Solar", "Smart Irrigation", "Outdoor Kitchen", "Motorized Sun Shades", "3-Car Garage"],
    agent: {
      name: "Rachel Morgan",
      role: "Residential Consultant",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      phone: "(503) 890-3321",
      email: "rachel@homehub-portal.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2023,
      parking: "3-Car Garage",
      lotSize: "0.75 Acres",
      heatingCooling: "Multi-Zone Heat Pump",
      hoa: "$110/mo"
    }
  },

  /* ============================================================
     TEMPLATE 3: AURELIA ESTATES (Ultra-Luxury Portfolio)
     ============================================================ */
  {
    id: "aur-301",
    template: "luxury",
    title: "The Bellissima Oceanfront Palace",
    tagline: "Direct Private Beach Access & Helipad",
    type: "Villa",
    purpose: "buy",
    price: 14500000,
    priceFormatted: "$14,500,000",
    location: "Star Island, Miami Beach, FL",
    beds: 7,
    baths: 9,
    sqft: 11200,
    status: "Exclusive",
    badgeType: "badge-luxury",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary private compound with 180 feet of prime deep-water frontage on Biscayne Bay. Features a private yacht slip for vessels up to 130ft, custom wellness wing with cold plunge & hammam, and full staff quarters.",
    amenities: ["Private 130ft Yacht Slip", "Helipad Access", "Wellness Spa & Hammam", "Infinity Reflection Pool", "Staff Quarters", "Armored Vault Room"],
    agent: {
      name: "Julian Montclaire",
      role: "Managing Director — Private Client Group",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      phone: "(305) 998-0012",
      email: "julian@aurelia-estates.com",
      rating: 5.0
    },
    specs: {
      yearBuilt: 2024,
      parking: "6-Car Climate Controlled Garage",
      lotSize: "1.45 Prime Waterfront Acres",
      heatingCooling: "Commercial Grade Marine HVAC",
      security: "24/7 Gated Guard & Biometric Entry"
    }
  },
  {
    id: "aur-302",
    template: "luxury",
    title: "Villa Mirador Belvedere",
    tagline: "Italian Renaissance Inspired Master Estate",
    type: "Villa",
    purpose: "buy",
    price: 18900000,
    priceFormatted: "$18,900,000",
    location: "Bel Air, Los Angeles, CA",
    beds: 8,
    baths: 11,
    sqft: 14500,
    status: "Exclusive",
    badgeType: "badge-luxury",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled behind triple-guarded gates on Bel Air's most prestigious ridge, Villa Mirador offers unhindered views from Downtown LA to Catalina Island. Features imported Carrara marble columns, 18-seat IMAX private cinema, and championship bowling alley.",
    amenities: ["IMAX Private Cinema", "Dual Infinity Pools", "Championship Bowling Alley", "Catering Kitchen", "Automobile Gallery", "Wine Cave"],
    agent: {
      name: "Julian Montclaire",
      role: "Managing Director — Private Client Group",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      phone: "(305) 998-0012",
      email: "julian@aurelia-estates.com",
      rating: 5.0
    },
    specs: {
      yearBuilt: 2023,
      parking: "10-Car Showroom",
      lotSize: "2.80 Acres",
      heatingCooling: "Crestron Intelligent Climate Automation",
      security: "Biometric & Armed Perimeter Security"
    }
  },
  {
    id: "aur-303",
    template: "luxury",
    title: "The Sovereign Penthouse",
    tagline: "Triplex Crown Above Central Park",
    type: "Penthouse",
    purpose: "buy",
    price: 26000000,
    priceFormatted: "$26,000,000",
    location: "Billionaires' Row, Manhattan, NY",
    beds: 5,
    baths: 6.5,
    sqft: 8400,
    status: "Exclusive",
    badgeType: "badge-luxury",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Occupying the top three floors of a world-renowned supertall tower on Billionaires' Row. Private glass elevator, double-height grand salon with 28ft ceilings, private heated sky pool, and unobstructed Central Park vistas.",
    amenities: ["Private Sky Pool", "Private Glass Elevator", "Central Park 360° Views", "Private Chauffeur Service", "Michelin Chef On-Call", "Sommelier Cellar"],
    agent: {
      name: "Victoria Sterling",
      role: "Senior Vice President — Global Luxury",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      phone: "(212) 880-9900",
      email: "v.sterling@aurelia-estates.com",
      rating: 5.0
    },
    specs: {
      yearBuilt: 2024,
      parking: "3 Automated Valet Spaces",
      lotSize: "Triplex Penthouse",
      heatingCooling: "Independent Whisper-Quiet Air Filtration",
      security: "Dedicated 24/7 White-Glove Concierge"
    }
  },

  /* ============================================================
     TEMPLATE 4: NESTORA LIVING (Residential & Apartments)
     ============================================================ */
  {
    id: "nes-401",
    template: "residential",
    title: "Cedar Grove Modern 2BHK",
    tagline: "Light-Filled Urban Apartment with Balcony Garden",
    type: "Apartment",
    purpose: "rent",
    price: 2450,
    priceFormatted: "$2,450/mo",
    location: "Greenlake Community, Seattle, WA",
    beds: 2,
    baths: 2,
    sqft: 1080,
    status: "For Rent",
    badgeType: "badge-rent",
    featured: true,
    floorPlanId: "fp-2bhk",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Experience community living at its finest. Nestled in walkable Greenlake, this home features natural quartz counters, energy-efficient stainless appliances, in-unit washer/dryer, and a sunlit balcony overlooking the central courtyard.",
    amenities: ["Private Balcony Garden", "Resident Co-Working Lounge", "EV Charging Stations", "Pet Spa & Dog Park", "Rooftop BBQ Pavilion", "Fitness & Yoga Studio"],
    agent: {
      name: "Claire Bennett",
      role: "Community Leasing Manager",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      phone: "(206) 555-0143",
      email: "leasing@nestora-living.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2023,
      petPolicy: "Cats & Dogs Welcome (Up to 2 pets)",
      deposit: "$500",
      leaseTerms: "6 to 18 Months",
      transitScore: "92 (Walker's & Rider's Paradise)"
    }
  },
  {
    id: "nes-402",
    template: "residential",
    title: "Willow Creek 3BHK Family Suite",
    tagline: "Spacious Layout with Dedicated Home Office",
    type: "Apartment",
    purpose: "rent",
    price: 3400,
    priceFormatted: "$3,400/mo",
    location: "Greenlake Community, Seattle, WA",
    beds: 3,
    baths: 2.5,
    sqft: 1620,
    status: "For Rent",
    badgeType: "badge-rent",
    featured: true,
    floorPlanId: "fp-3bhk",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A thoughtfully designed 3-bedroom residence offering dual walk-in closets, kitchen with breakfast bar, separate laundry utility room, and direct elevator access to secured parking.",
    amenities: ["Dedicated Home Office Nook", "Double Vanity Bathroom", "Dual Walk-In Closets", "Package Locker System", "Children's Play Zone", "High-Speed Fiber"],
    agent: {
      name: "Claire Bennett",
      role: "Community Leasing Manager",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      phone: "(206) 555-0143",
      email: "leasing@nestora-living.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2023,
      petPolicy: "Cats & Dogs Welcome",
      deposit: "$750",
      leaseTerms: "12 Months",
      transitScore: "94"
    }
  },
  {
    id: "nes-403",
    template: "residential",
    title: "The Studio Loft at Nestora",
    tagline: "Efficient Micro-Luxury for Urban Professionals",
    type: "Apartment",
    purpose: "rent",
    price: 1750,
    priceFormatted: "$1,750/mo",
    location: "Greenlake Community, Seattle, WA",
    beds: 1,
    baths: 1,
    sqft: 620,
    status: "For Rent",
    badgeType: "badge-rent",
    featured: false,
    floorPlanId: "fp-studio",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Smart studio layout optimizing every square foot. Features built-in modular storage, fold-down murphy desk, acoustic insulation, and floor-to-ceiling glass patio doors.",
    amenities: ["Modular Built-Ins", "Keyless Smart Lock", "Courtyard View", "Bicycle Storage", "Community Kitchen", "Fitness Center"],
    agent: {
      name: "Claire Bennett",
      role: "Community Leasing Manager",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      phone: "(206) 555-0143",
      email: "leasing@nestora-living.com",
      rating: 4.9
    },
    specs: {
      yearBuilt: 2023,
      petPolicy: "Pets Welcome",
      deposit: "$350",
      leaseTerms: "Flexible (3-15 Mo)",
      transitScore: "92"
    }
  },

  /* ============================================================
     TEMPLATE 5: URBANEDGE COMMERCIAL (Offices & Commercial)
     ============================================================ */
  {
    id: "com-501",
    template: "commercial",
    title: "Apex Innovation Tower — Floor 14-16",
    tagline: "Class-A Corporate Headquarters Space",
    type: "Office",
    purpose: "lease",
    price: 42,
    priceFormatted: "$42 / sq.ft / yr",
    location: "Financial District, San Francisco, CA",
    beds: 0,
    baths: 6,
    sqft: 24500,
    status: "For Lease",
    badgeType: "badge-commercial",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "LEED Platinum certified premier office contiguous space across 3 floors. High-efficiency floor plates, column-free spans, redundant dual-feed 10Gbps fiber connectivity, dedicated executive boardroom, and private cafeteria.",
    amenities: ["LEED Platinum Certified", "Redundant 10Gbps Fiber", "Dedicated Freight Elevator", "Onsite 24/7 Security", "Underground Parking (3:1000)", "Executive Boardroom"],
    agent: {
      name: "Arthur Sterling",
      role: "Executive Vice President — Commercial Leasing",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      phone: "(415) 779-3300",
      email: "a.sterling@urbanedge-commercial.com",
      rating: 4.95
    },
    specs: {
      buildingClass: "Class A+",
      zoning: "C-3-O (Commercial Downtown Core)",
      ceilingHeight: "13 ft Finished",
      parkingRatio: "3.2 / 1,000 SF",
      occupancy: "Immediate (Full Turnkey Available)"
    }
  },
  {
    id: "com-502",
    template: "commercial",
    title: "Pacific Gateway Logistics Hub",
    tagline: "Modern High-Bay Distribution Warehouse",
    type: "Industrial",
    purpose: "lease",
    price: 18,
    priceFormatted: "$18 / sq.ft / yr",
    location: "Logistics Corridor, Ontario, CA",
    beds: 0,
    baths: 4,
    sqft: 85000,
    status: "For Lease",
    badgeType: "badge-commercial",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "State-of-the-art logistics center featuring 36ft clear ceiling height, 24 dock-high loading doors with hydraulic levelers, ESFR fire sprinkler system, and fully secure 140ft truck court.",
    amenities: ["36ft Clear Height", "24 Dock Doors + 2 Drive-in Ramps", "ESFR Fire Sprinklers", "Heavy 3-Phase 3000A Power", "140ft Concrete Truck Court", "Cross-Dock Configuration"],
    agent: {
      name: "Arthur Sterling",
      role: "Executive Vice President — Commercial Leasing",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      phone: "(415) 779-3300",
      email: "a.sterling@urbanedge-commercial.com",
      rating: 4.95
    },
    specs: {
      buildingClass: "Class A Industrial",
      zoning: "M-2 (Heavy Industrial / Logistics)",
      ceilingHeight: "36 ft Clear",
      dockDoors: "24 Exterior Docks",
      occupancy: "Q3 2026"
    }
  },
  {
    id: "com-503",
    template: "commercial",
    title: "Metropolitan Retail Flagship",
    tagline: "Prime High-Foot-Traffic Glass Corner Storefront",
    type: "Retail",
    purpose: "lease",
    price: 65,
    priceFormatted: "$65 / sq.ft / yr",
    location: "SoHo Shopping District, New York, NY",
    beds: 0,
    baths: 2,
    sqft: 4800,
    status: "For Lease",
    badgeType: "badge-commercial",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Rare corner retail position with 90 feet of continuous wraparound frontage on Broadway. High foot traffic of over 45,000 pedestrians daily. Fully vented for high-end dining or premier luxury brand boutique.",
    amenities: ["90ft Corner Glass Frontage", "High Foot-Traffic Zone", "Fully HVAC & ADA Compliant", "Basement Storage Included", "Gas & Heavy Exhaust Vented", "Signage Rights"],
    agent: {
      name: "Elena Rostova",
      role: "Commercial Retail Director",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      phone: "(212) 440-1920",
      email: "elena@urbanedge-commercial.com",
      rating: 4.98
    },
    specs: {
      buildingClass: "Prime Commercial Retail",
      zoning: "M1-5B Commercial",
      ceilingHeight: "16 ft Ground Floor",
      pedestrianCount: "45,000+ Daily",
      occupancy: "Immediate"
    }
  }
];

/* Agents Directory */
const AGENTS_DATA = [
  {
    id: "agent-1",
    name: "Marcus Vance",
    role: "Senior Partner & Luxury Specialist",
    experience: "14+ Years Experience",
    agency: "Estately Agency",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    phone: "(512) 884-2190",
    email: "m.vance@estately-agency.com",
    dealsClosed: "$140M+ Closed",
    rating: 4.9
  },
  {
    id: "agent-2",
    name: "Elena Rostova",
    role: "Principal Broker & Waterfront Director",
    experience: "12+ Years Experience",
    agency: "Estately & UrbanEdge",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    phone: "(949) 715-4420",
    email: "elena@estately-agency.com",
    dealsClosed: "$210M+ Closed",
    rating: 5.0
  },
  {
    id: "agent-3",
    name: "Julian Montclaire",
    role: "Managing Director — Private Client Group",
    experience: "18+ Years Experience",
    agency: "Aurelia Estates",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    phone: "(305) 998-0012",
    email: "julian@aurelia-estates.com",
    dealsClosed: "$450M+ Closed",
    rating: 5.0
  },
  {
    id: "agent-4",
    name: "Victoria Sterling",
    role: "Senior Vice President — Global Luxury",
    experience: "15+ Years Experience",
    agency: "Aurelia Estates",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    phone: "(212) 880-9900",
    email: "v.sterling@aurelia-estates.com",
    dealsClosed: "$320M+ Closed",
    rating: 5.0
  },
  {
    id: "agent-5",
    name: "David Kim",
    role: "Urban Living Specialist",
    experience: "8+ Years Experience",
    agency: "HomeHub Discovery",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    phone: "(206) 441-9080",
    email: "david@homehub-portal.com",
    dealsClosed: "380+ Units Sold",
    rating: 4.85
  },
  {
    id: "agent-6",
    name: "Claire Bennett",
    role: "Community Leasing Manager",
    experience: "7+ Years Experience",
    agency: "Nestora Living",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    phone: "(206) 555-0143",
    email: "leasing@nestora-living.com",
    dealsClosed: "98% Occupancy Rate",
    rating: 4.9
  }
];

/* Testimonials Data */
const TESTIMONIALS_DATA = [
  {
    name: "Jonathan & Sarah Sterling",
    location: "Austin, Texas",
    role: "Luxury Home Buyers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The team made our interstate relocation completely stress-free. Their market insight, discrete representation, and negotiation expertise secured our dream home well under asking."
  },
  {
    name: "Robert Vance, Tech Founder",
    location: "San Francisco, California",
    role: "Commercial Tenant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Finding a 25,000 sq ft headquarters in downtown SF was daunting until we partnered with UrbanEdge. Their technical advisory and lease restructuring saved our company over $350k annually."
  },
  {
    name: "Genevieve Moreau",
    location: "Miami Beach, Florida",
    role: "Private Investor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Aurelia Estates delivers an unmatched level of confidentiality and bespoke concierge service. Julian curated off-market waterfront options that simply cannot be found anywhere else."
  },
  {
    name: "Michael & Emily Thornton",
    location: "Seattle, Washington",
    role: "Nestora Residents",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Nestora Living truly feels like a vibrant community rather than just a complex. The amenities, pet park, and prompt on-site management have made living here an absolute joy."
  }
];

/* Data Helper Functions */
function getPropertyById(id) {
  return PROPERTIES_DATA.find(p => p.id === id) || null;
}

function getPropertiesByTemplate(templateName) {
  if (!templateName || templateName === "all") return PROPERTIES_DATA;
  return PROPERTIES_DATA.filter(p => p.template === templateName);
}

function getAllProperties() {
  return [...PROPERTIES_DATA];
}
