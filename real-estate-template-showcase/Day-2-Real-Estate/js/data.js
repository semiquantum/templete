/**
 * VERA LUXURY ESTATES - Comprehensive Real Estate Dataset
 * Centralized data store for properties, agents, testimonials, FAQs, and company info.
 */

const VERA_DATA = {
  company: {
    name: "VERA LUXURY ESTATES",
    tagline: "Discover Exceptional Living & Architectural Masterpieces",
    foundedYear: 2012,
    phone: "+1 (800) 837-2378",
    email: "concierge@veraestates.com",
    address: "9460 Wilshire Blvd, Suite 800, Beverly Hills, CA 90212",
    stats: [
      { id: "years", value: 14, suffix: "+", label: "Years of Excellence" },
      { id: "volume", value: 1.8, prefix: "$", suffix: "B+", label: "Total Sales Volume" },
      { id: "clients", value: 2400, suffix: "+", label: "Discerning Clients" },
      { id: "satisfaction", value: 99.4, suffix: "%", label: "Client Satisfaction" },
      { id: "agents", value: 35, suffix: "+", label: "Elite Advisors" }
    ],
    offices: [
      {
        city: "Beverly Hills",
        address: "9460 Wilshire Blvd, Suite 800",
        state: "CA 90212, United States",
        phone: "+1 (310) 555-0192",
        email: "beverlyhills@veraestates.com",
        hours: "Mon - Sat: 8:30 AM - 7:00 PM",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "Manhattan",
        address: "432 Park Avenue, Penthouse Level",
        state: "NY 10022, United States",
        phone: "+1 (212) 555-0184",
        email: "manhattan@veraestates.com",
        hours: "Mon - Sat: 9:00 AM - 7:30 PM",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "London",
        address: "14 Berkeley Square, Mayfair",
        state: "London W1J 6AE, United Kingdom",
        phone: "+44 20 7946 0912",
        email: "london@veraestates.com",
        hours: "Mon - Fri: 9:00 AM - 6:30 PM",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "Dubai",
        address: "One Central, The Offices 4, Level 9",
        state: "DIFC, Dubai, UAE",
        phone: "+971 4 312 9000",
        email: "dubai@veraestates.com",
        hours: "Mon - Sat: 9:00 AM - 8:00 PM",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  categories: [
    {
      id: "villas",
      name: "Luxury Villas",
      count: 24,
      slug: "villas",
      icon: "villa",
      description: "Expansive private estates with landscaped grounds, infinity pools, and panoramic views.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "penthouses",
      name: "Penthouses",
      count: 18,
      slug: "penthouses",
      icon: "building",
      description: "Sky-high residences with 360-degree city views, private elevators, and bespoke finishes.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "mansions",
      name: "Modern Mansions",
      count: 15,
      slug: "mansions",
      icon: "home",
      description: "Contemporary architectural masterpieces featuring cutting-edge smart home automation.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "waterfront",
      name: "Waterfront Properties",
      count: 12,
      slug: "waterfront",
      icon: "water",
      description: "Direct oceanfront and lakeside sanctuaries with private yacht docks and beaches.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "commercial",
      name: "Commercial & Towers",
      count: 9,
      slug: "commercial",
      icon: "briefcase",
      description: "Prime Grade-A office towers, luxury retail flagships, and boutique hotel investments.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "land",
      name: "Private Estates & Land",
      count: 7,
      slug: "land",
      icon: "map",
      description: "Exclusive residential development parcels, equestrian ranches, and private enclaves.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    }
  ],

  agents: [
    {
      id: 1,
      name: "Sophia Williams",
      role: "Managing Director & Luxury Advisor",
      experience: "12+ Years",
      license: "DRE #01948201",
      salesVolume: "$420M+",
      specialty: "Bel-Air & Beverly Hills Estates",
      phone: "+1 (310) 555-8921",
      email: "sophia.williams@veraestates.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "Sophia is a leading figure in ultra-luxury real estate with over a decade of experience advising global tastemakers, executives, and high-profile clientele.",
      languages: ["English", "French"],
      social: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Daniel Carter",
      role: "Senior Waterfront & Penthouse Specialist",
      experience: "10+ Years",
      license: "DRE #01839210",
      salesVolume: "$350M+",
      specialty: "Coastal Residences & Skyline Penthouses",
      phone: "+1 (212) 555-4309",
      email: "daniel.carter@veraestates.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      bio: "Daniel combines deep architectural knowledge with nuanced financial valuation to deliver unparalleled acquisition and disposition results.",
      languages: ["English", "Spanish"],
      social: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Director of International Residential",
      experience: "9+ Years",
      license: "DRE #02094822",
      salesVolume: "$280M+",
      specialty: "Architectural & Historic Properties",
      phone: "+44 20 7946 0833",
      email: "emma.wilson@veraestates.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      bio: "Emma orchestrates discreet cross-border transactions for prominent European and North American families seeking trophy residences.",
      languages: ["English", "German", "Italian"],
      social: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "James Anderson",
      role: "Head of Commercial & Strategic Investments",
      experience: "15+ Years",
      license: "DRE #01620981",
      salesVolume: "$650M+",
      specialty: "Prime Commercial Towers & Mixed-Use Assets",
      phone: "+971 4 312 9055",
      email: "james.anderson@veraestates.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      bio: "With 15 years in private equity and real estate syndication, James advises institutional investors and family offices on flagship asset acquisitions.",
      languages: ["English", "Arabic"],
      social: { linkedin: "#", instagram: "#", twitter: "#" }
    }
  ],

  properties: [
    {
      id: 1,
      title: "The Bel-Air Crown Villa",
      slug: "the-bel-air-crown-villa",
      type: "villas",
      typeName: "Luxury Villa",
      status: "For Sale",
      price: 14850000,
      formattedPrice: "$14,850,000",
      location: "Bel-Air, Los Angeles",
      address: "10985 Bellagio Road, Bel-Air, CA 90077",
      beds: 6,
      baths: 8,
      sqft: 9450,
      garages: 4,
      yearBuilt: 2023,
      featured: true,
      badge: "Exclusive",
      badgeType: "featured",
      mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Perched atop a private promontory in premier Bel-Air, The Crown Villa is a tour-de-force of contemporary architecture. Floor-to-ceiling motorized Fleetwood glass doors dissolve the boundaries between the sleek interior and a cantilevered infinity pool overlooking sweeping canyon-to-ocean vistas.",
      highlights: [
        "Zero-edge heated infinity pool with sunken firepit lounge",
        "Custom Poliform chef's kitchen with Gaggenau & Sub-Zero appliances",
        "1,200-bottle temperature-controlled glass wine cellar",
        "Private 14-seat Dolby Atmos screening room",
        "Primary suite wing with dual spa baths, fireplace, and private terrace"
      ],
      amenities: [
        "Infinity Pool", "Ocean Views", "Wine Cellar", "Smart Home Automation",
        "Home Theater", "Spa & Sauna", "Security Guardhouse", "Electric Vehicle Chargers",
        "Gym & Wellness Studio", "Outdoor Kitchen & BBQ", "Service Elevator", "Solar Energy System"
      ],
      floorPlans: [
        { level: "Main Level", size: "4,800 sq ft", desc: "Grand foyer, formal living, dining salon, show kitchen, preparation kitchen, guest suite." },
        { level: "Upper Level", size: "3,450 sq ft", desc: "Primary bedroom sanctuary with dual dressing suites, 4 en-suite guest bedrooms, library." },
        { level: "Lower Level", size: "1,200 sq ft", desc: "Dolby theater, wine tasting salon, fitness studio, staff quarters & 4-car showroom." }
      ],
      agentId: 1
    },
    {
      id: 2,
      title: "The Glass Penthouse Manhattan",
      slug: "the-glass-penthouse-manhattan",
      type: "penthouses",
      typeName: "Penthouse",
      status: "For Sale",
      price: 22500000,
      formattedPrice: "$22,500,000",
      location: "Tribeca, New York",
      address: "56 Leonard Street, Penthouse 54, New York, NY 10013",
      beds: 5,
      baths: 6,
      sqft: 7200,
      garages: 2,
      yearBuilt: 2022,
      featured: true,
      badge: "Trophy Asset",
      badgeType: "featured",
      mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Occupying the entire 54th floor of Tribeca's iconic architectural tower, this duplex penthouse offers dramatic 360-degree vistas of the Manhattan skyline, Hudson River, and Statue of Liberty. Features soaring 14-foot ceilings and 1,800 sq ft of private wrap-around terrace space.",
      highlights: [
        "Private high-speed key-locked elevator landing",
        "1,800 sq ft wrap-around landscaped loggia with outdoor fireplace",
        "Custom Boffi kitchen with Calacatta marble monolithic island",
        "Floating sculptural bronze staircase by architectural artisans",
        "Full-floor primary retreat with private sauna and sunset lounge"
      ],
      amenities: [
        "24/7 White Glove Concierge", "Private Elevator", "Terrace with Skyline Views", "Bespoke Wine Cellar",
        "Indoor Lap Pool", "Valet Parking", "Fitness Center", "Steam Room", "Children's Playroom", "Private Storage"
      ],
      floorPlans: [
        { level: "54th Floor (Lower Duplex)", size: "4,200 sq ft", desc: "Corner great room, formal dining, gourmet kitchen, guest suites, wrap loggia." },
        { level: "55th Floor (Upper Duplex)", size: "3,000 sq ft", desc: "Primary bedroom suite, private study, wellness salon, sky terrace." }
      ],
      agentId: 2
    },
    {
      id: 3,
      title: "Azure Waterfront Residence",
      slug: "azure-waterfront-residence",
      type: "waterfront",
      typeName: "Waterfront Property",
      status: "For Sale",
      price: 18900000,
      formattedPrice: "$18,900,000",
      location: "Palm Beach, Florida",
      address: "1420 South Ocean Blvd, Palm Beach, FL 33480",
      beds: 5,
      baths: 7,
      sqft: 8100,
      garages: 3,
      yearBuilt: 2024,
      featured: true,
      badge: "New Built",
      badgeType: "new",
      mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "An extraordinary modern coastal estate boasting 150 feet of direct deep-water ocean frontage with private yacht dockage. Organic modernism converges with tropical elegance featuring limestone floors, teak architectural accents, and seamless indoor-outdoor lanai living.",
      highlights: [
        "Deep-water dock accommodating yachts up to 110 feet",
        "Resort-style cascading saltwater pool with swim-up bar",
        "Private sandy beach cabana and oceanfront fire lounge",
        "Motorized louvered pergola with outdoor summer kitchen",
        "Smart climate, acoustic, and hurricane-rated biometric security"
      ],
      amenities: [
        "Private Yacht Dock", "Direct Ocean Access", "Saltwater Pool", "Outdoor Summer Kitchen",
        "Cabana & Bar", "Gated Security", "Smart Lighting & Sound", "Impact Glass Throughout"
      ],
      floorPlans: [
        { level: "Ground Floor", size: "5,000 sq ft", desc: "Open-concept living room, waterfront dining, family salon, media room, guest wing." },
        { level: "Second Floor", size: "3,100 sq ft", desc: "Primary oceanfront suite, 3 en-suite guest bedrooms, morning bar, ocean balconies." }
      ],
      agentId: 2
    },
    {
      id: 4,
      title: "The Montecito Modern Compound",
      slug: "the-montecito-modern-compound",
      type: "mansions",
      typeName: "Modern Mansion",
      status: "For Sale",
      price: 16500000,
      formattedPrice: "$16,500,000",
      location: "Montecito, California",
      address: "740 San Ysidro Road, Montecito, CA 93108",
      beds: 7,
      baths: 9,
      sqft: 11200,
      garages: 6,
      yearBuilt: 2021,
      featured: true,
      badge: "Popular",
      badgeType: "popular",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Nestled on 3.5 private acres among historic olive groves, this Montecito architectural sanctuary marries California warmth with European minimalism. Includes a detached 2-bedroom guest house, championship tennis court, and organic vineyard.",
      highlights: [
        "3.5 acres of manicured gardens, olive groves, and private vineyard",
        "Championship tennis and pickleball court with spectator pavilion",
        "Detached 1,800 sq ft architect-designed guest residence",
        "Wellness pavilion with cedar dry sauna, cold plunge, and yoga lawn",
        "6-car climate-controlled subterranean collector's motor court"
      ],
      amenities: [
        "Tennis Court", "Private Vineyard", "Guest House", "Wellness Pavilion",
        "Cold Plunge & Sauna", "Infinity Pool", "Collector's Garage", "Equestrian Access"
      ],
      floorPlans: [
        { level: "Main Residence", size: "9,400 sq ft", desc: "5 bedroom suites, great room, formal salon, culinary center, wine library, media lounge." },
        { level: "Guest House", size: "1,800 sq ft", desc: "2 bedroom suites, open kitchen, private terrace, independent garage." }
      ],
      agentId: 1
    },
    {
      id: 5,
      title: "Mayfair Regency Townhouse",
      slug: "mayfair-regency-townhouse",
      type: "villas",
      typeName: "Historic Mansion",
      status: "For Sale",
      price: 28500000,
      formattedPrice: "£22,400,000 / $28,500,000",
      location: "Mayfair, London",
      address: "18 Charles Street, Mayfair, London W1J 5DZ",
      beds: 6,
      baths: 7,
      sqft: 8650,
      garages: 2,
      yearBuilt: 2020,
      featured: false,
      badge: "Historic Gem",
      badgeType: "featured",
      mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "A meticulously restored Grade II listed Mayfair mansion combining historic Georgian proportions with world-class contemporary luxury. Features a bespoke private passenger lift servicing all 6 floors, subterranean spa with 10-meter swimming pool, and private landscaped courtyard garden.",
      highlights: [
        "Subterranean wellness suite with heated 10-meter indoor pool and hammam",
        "Full passenger lift servicing all 6 floors with bronze accents",
        "Private south-facing walled courtyard garden with outdoor fireplace",
        "First-floor grand reception room with 4.2-meter ceiling heights",
        "Direct access to private garden square amenities"
      ],
      amenities: [
        "Indoor Swimming Pool", "Private Passenger Lift", "Hammam Spa", "Walled Garden",
        "Wine Tasting Room", "24/7 Security System", "Staff Quarters", "Underfloor Heating"
      ],
      floorPlans: [
        { level: "Basement & Spa", size: "2,200 sq ft", desc: "Swimming pool, hammam, cinema, wine cellar, staff accommodation." },
        { level: "Ground & 1st Floor", size: "3,400 sq ft", desc: "Grand entrance hall, formal dining, grand drawing room with ornate cornicing." },
        { level: "2nd - 4th Floors", size: "3,050 sq ft", desc: "Principal suite occupying entire 2nd floor, 5 additional guest bedroom suites." }
      ],
      agentId: 3
    },
    {
      id: 6,
      title: "The Skyview Tower Penthouse",
      slug: "the-skyview-tower-penthouse",
      type: "penthouses",
      typeName: "Penthouse",
      status: "For Rent",
      price: 45000,
      formattedPrice: "$45,000 / month",
      location: "Downtown, Miami",
      address: "1000 Biscayne Blvd, Penthouse 60, Miami, FL 33132",
      beds: 4,
      baths: 5,
      sqft: 5800,
      garages: 3,
      yearBuilt: 2023,
      featured: false,
      badge: "For Rent",
      badgeType: "rent",
      mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Designed by world-renowned architects, this bespoke triplex penthouse in Downtown Miami captures direct Biscayne Bay and Atlantic Ocean horizons. Fully furnished with custom Italian pieces and equipped with a private rooftop sky pool and helipad access.",
      highlights: [
        "Private rooftop plunge pool with 360-degree panoramic ocean views",
        "Turnkey furnished with custom Minotti & B&B Italia collections",
        "Direct helipad access and robotic valet car retrieval",
        "Integrated Creston smart home for audio, lighting, and motorized drapery"
      ],
      amenities: [
        "Rooftop Sky Pool", "Helipad Access", "Robotic Valet", "Concierge Service",
        "Private Elevator", "Designer Furnishings", "Spa & Sauna", "Bayfront Views"
      ],
      floorPlans: [
        { level: "Lower Level", size: "2,400 sq ft", desc: "Living salon, dining area, Italian kitchen, guest suites." },
        { level: "Upper Level", size: "2,000 sq ft", desc: "Primary bedroom suite, private executive office, sunset lounge." },
        { level: "Rooftop Deck", size: "1,400 sq ft", desc: "Sky pool, summer kitchen, fire table, open-air sun deck." }
      ],
      agentId: 2
    },
    {
      id: 7,
      title: "The Financial Center Plaza",
      slug: "the-financial-center-plaza",
      type: "commercial",
      typeName: "Commercial Asset",
      status: "For Sale",
      price: 52000000,
      formattedPrice: "$52,000,000",
      location: "DIFC, Dubai",
      address: "Al Mustaqbal Street, DIFC Tower 3, Dubai, UAE",
      beds: 0,
      baths: 12,
      sqft: 45000,
      garages: 50,
      yearBuilt: 2022,
      featured: false,
      badge: "Commercial",
      badgeType: "featured",
      mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "A trophy Grade-A commercial office building situated in the epicenter of the Dubai International Financial Centre. Fully leased to blue-chip financial institutions generating strong yields with institutional ESG LEED Platinum certification.",
      highlights: [
        "100% occupied with AAA-rated sovereign & institutional tenants",
        "LEED Platinum and WELL Certified building standards",
        "High-speed destination-dispatch elevators and advanced BMS",
        "Ground floor luxury retail and fine dining amenities"
      ],
      amenities: [
        "LEED Platinum Certified", "50 Dedicated Parking Bays", "High Speed Elevators", "Conference Center",
        "24/7 Security & Access Control", "Fiber Optic Backbone", "Retail & Dining Pavilion"
      ],
      floorPlans: [
        { level: "Podium & Retail", size: "12,000 sq ft", desc: "Luxury retail flagships, reception lobby, tenant business lounge." },
        { level: "Office Floors 1-5", size: "33,000 sq ft", desc: "Column-free floor plates with panoramic city views and raised flooring." }
      ],
      agentId: 4
    },
    {
      id: 8,
      title: "Aspen Highland Ski Chalet",
      slug: "aspen-highland-ski-chalet",
      type: "mansions",
      typeName: "Alpine Chalet",
      status: "For Sale",
      price: 19750000,
      formattedPrice: "$19,750,000",
      location: "Aspen, Colorado",
      address: "310 Red Mountain Road, Aspen, CO 81611",
      beds: 6,
      baths: 7,
      sqft: 8800,
      garages: 3,
      yearBuilt: 2023,
      featured: false,
      badge: "Ski-in / Ski-out",
      badgeType: "featured",
      mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Direct ski-in / ski-out mountain modern masterpiece on coveted Red Mountain in Aspen. Constructed from reclaimed timber, Colorado flagstone, and structural glass framing unhindered views of Aspen Mountain and the Roaring Fork Valley.",
      highlights: [
        "Direct ski-in / ski-out trail connection with custom heated ski locker lounge",
        "Custom outdoor heated stone spa pool and mountain-facing firepit",
        "Dramatic double-height great room with massive stone fireplace",
        "Radiant heated driveway, motor court, and outdoor terraces"
      ],
      amenities: [
        "Ski-in / Ski-out Access", "Heated Ski Room", "Outdoor Spa Pool", "Radiant Heated Driveway",
        "Wine Cellar", "Oxygen-Enriched Primary Suite", "Game Room & Wet Bar", "Sauna & Steam"
      ],
      floorPlans: [
        { level: "Ground Level", size: "4,500 sq ft", desc: "Great room, chef kitchen, dining salon, ski lounge, 2 guest suites." },
        { level: "Upper Level", size: "2,800 sq ft", desc: "Primary bedroom suite, private study, 2 additional en-suite bedrooms." },
        { level: "Lower Level", size: "1,500 sq ft", desc: "Cinema, wine vault, wellness spa, heated garage." }
      ],
      agentId: 1
    },
    {
      id: 9,
      title: "The Paradise Cay Waterfront Estate",
      slug: "paradise-cay-waterfront-estate",
      type: "waterfront",
      typeName: "Waterfront Estate",
      status: "For Sale",
      price: 13500000,
      formattedPrice: "$13,500,000",
      location: "Tiburon, California",
      address: "2200 Mar East Street, Tiburon, CA 94920",
      beds: 5,
      baths: 6,
      sqft: 6700,
      garages: 3,
      yearBuilt: 2022,
      featured: false,
      badge: "Waterfront",
      badgeType: "new",
      mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Commanding breathtaking vistas of the San Francisco skyline, Golden Gate Bridge, and Angel Island, this newly completed architectural waterfront home offers floor-to-ceiling glass and private deep-water dock.",
      highlights: [
        "Unrivaled unobstructed Golden Gate Bridge & San Francisco skyline vistas",
        "Private deep-water yacht slip with power and water hookups",
        "Expansive cantilevered teak deck with infinity edge glass railing",
        "Gourmet kitchen with custom Italian walnut cabinetry and Miele suite"
      ],
      amenities: [
        "Deep Water Dock", "Golden Gate Views", "Teak Sun Deck", "Wine Vault",
        "Smart Security", "Solar System", "Electric Vehicle Charger", "Fire Table"
      ],
      floorPlans: [
        { level: "Main Level", size: "3,800 sq ft", desc: "Living room, dining salon, culinary center, bayfront terrace, guest suite." },
        { level: "Upper Level", size: "2,900 sq ft", desc: "Primary bridge-view sanctuary, 3 en-suite bedrooms, media room." }
      ],
      agentId: 3
    },
    {
      id: 10,
      title: "Solana Prime Commercial Center",
      slug: "solana-prime-commercial-center",
      type: "commercial",
      typeName: "Commercial Retail",
      status: "For Rent",
      price: 18000,
      formattedPrice: "$18,000 / month",
      location: "Beverly Hills, California",
      address: "9600 Wilshire Blvd, Beverly Hills, CA 90212",
      beds: 0,
      baths: 4,
      sqft: 4200,
      garages: 8,
      yearBuilt: 2023,
      featured: false,
      badge: "Commercial Lease",
      badgeType: "rent",
      mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Flagship luxury retail and creative office space on high-traffic Wilshire Boulevard in Beverly Hills. Features double-height 20-foot glass frontage, private valet parking, and customizable open plan layouts.",
      highlights: [
        "Prime Wilshire Boulevard flagship frontage with massive foot & vehicular traffic",
        "20-foot soaring glass showroom facade with museum-grade lighting",
        "Dedicated subterranean valet parking for clients and VIP guests",
        "Private executive suite and secure back-of-house storage facilities"
      ],
      amenities: [
        "20ft Glass Frontage", "Valet Parking", "HVAC Dual-Zone", "High Speed Fiber",
        "Loading Bay", "Security Monitoring", "Private Restrooms", "Storage Vault"
      ],
      floorPlans: [
        { level: "Ground Showroom", size: "3,000 sq ft", desc: "Open showroom layout, double-height storefront, reception." },
        { level: "Mezzanine Office", size: "1,200 sq ft", desc: "Executive conference room, private offices, breakroom, server room." }
      ],
      agentId: 4
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Marcus Sterling",
      role: "Managing Director, Global Equity Fund",
      property: "Acquired Bel-Air Villa ($14.8M)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote: "Working with Sophia and the Vera Estates team was a consummate masterclass in discretion, architectural expertise, and flawless negotiation. They secured our family's sanctuary off-market with zero friction."
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Tech Entrepreneur & Investor",
      property: "Acquired Manhattan Penthouse ($22.5M)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote: "Vera Estates redefines luxury advisory. Daniel Carter’s deep understanding of structural valuation and neighborhood trajectory helped us land a trophy asset that exceeded all our architectural standards."
    },
    {
      id: 3,
      name: "Sir Arthur Kensington",
      role: "Private Family Office Chairman",
      property: "Sold Mayfair Regency Residence (£22.4M)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote: "The global reach of Vera Estates is truly peerless. Emma Wilson orchestrated an ultra-discreet international campaign that connected us with the right qualified buyer in fewer than 45 days."
    },
    {
      id: 4,
      name: "Camilla & Harrison Vance",
      role: "Architectural Collectors",
      property: "Acquired Montecito Modern ($16.5M)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote: "From private helicopter viewings to handling complex title covenants seamlessly, Vera Estates provides a level of white-glove concierge service that is simply unmatched in modern real estate."
    }
  ],

  faqs: [
    {
      question: "What distinguishes Vera Luxury Estates from traditional brokerages?",
      answer: "Vera Estates operates as a bespoke advisory rather than a transactional volume agency. We curate only the top 1% of architectural and trophy residences globally. Each client receives private partner-level representation, access to our exclusive off-market private portfolio, and complete end-to-end legal, architectural, and financial advisory."
    },
    {
      question: "How do you protect privacy and confidentiality for high-profile clients?",
      answer: "Discretion is our foremost founding pillar. All confidential showings, off-market listings, and negotiations are protected under rigorous non-disclosure agreements (NDAs). We regularly execute private transactions through family trusts, blind trusts, and international corporate entities."
    },
    {
      question: "Can Vera Estates assist with international purchases and currency structuring?",
      answer: "Yes. With dedicated offices in Beverly Hills, Manhattan, London, and Dubai, our cross-border advisory team assists international buyers with multi-currency escrow structuring, tax-efficient holding vehicles, golden visa qualifications, and local regulatory compliance."
    },
    {
      question: "How do I schedule a private showing or request an off-market catalog?",
      answer: "You can submit an inquiry through any property details page, email concierge@veraestates.com, or call our Beverly Hills flagship at +1 (800) 837-2378. A dedicated senior advisor will verify credentials and arrange private jet or chauffeur transit for private viewings."
    },
    {
      question: "What is your process for listing an exclusive luxury residence?",
      answer: "Our listing process includes proprietary architectural appraisal, high-definition 4K aerial and interior cinematography, bespoke architectural monographs, private outreach to our vetted global buyer network, and targeted placements in premier luxury publications."
    }
  ]
};

// Expose globally for browser usage
if (typeof window !== "undefined") {
  window.VERA_DATA = VERA_DATA;
}
