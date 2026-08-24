export const categories = [
  { id: "all", label: "All Menu" },
  { id: "starters", label: "Starters & Antipasti" },
  { id: "pasta", label: "Handmade Pasta" },
  { id: "pizza", label: "Wood-Fired Pizza" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Dolci & Desserts" },
  { id: "drinks", label: "Cocktails & Wines" }
];

export const menuItems = [
  // STARTERS & ANTIPASTI
  {
    id: "m1",
    name: "Burrata & Heirloom Pomodori",
    category: "starters",
    price: 480,
    description: "Creamy artisanal burrata from Puglia, slow-roasted heirloom tomatoes, fresh basil pesto, 12-year aged Modena balsamic reduction.",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    isFeatured: true,
    badge: "Chef's Pick",
    rating: 4.9
  },
  {
    id: "m2",
    name: "Bruschetta al Tartufo",
    category: "starters",
    price: 420,
    description: "Grilled sourdough crostini rubbed with garlic, wild forest mushrooms, truffle cream drizzle, shaved Pecorino Romano.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.8
  },
  {
    id: "m3",
    name: "Carpaccio di Manzo Classico",
    category: "starters",
    price: 580,
    description: "Thinly sliced prime tenderloin, baby wild rocket, shaved Parmigiano-Reggiano, capers, lemon-infused virgin olive oil.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.9
  },
  {
    id: "m4",
    name: "Calamari Fritti Dorati",
    category: "starters",
    price: 520,
    description: "Crispy golden squid rings tossed with sea salt and cracked pepper, served with spicy Calabrian chili aioli and charred lemon.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg", "spicy"],
    rating: 4.7
  },

  // HANDMADE PASTA
  {
    id: "m5",
    name: "Truffle Tagliatelle",
    category: "pasta",
    price: 720,
    description: "Fresh egg tagliatelle rolled in-house, delicate black winter truffle emulsion, cultured butter, 24-month Parmigiano-Reggiano.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    isFeatured: true,
    badge: "Signature",
    rating: 5.0
  },
  {
    id: "m6",
    name: "Pappardelle al Ragù d'Agnello",
    category: "pasta",
    price: 760,
    description: "Wide ribbon pasta with 8-hour slow-braised Chianti lamb ragù, rosemary aromatics, topped with creamy ricotta salata.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.9
  },
  {
    id: "m7",
    name: "Spaghetti alla Carbonara Tradizionale",
    category: "pasta",
    price: 640,
    description: "Authentic Roman recipe with cured Guanciale, free-range egg yolks, fresh crushed black peppercorns, and Pecorino Romano.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.8
  },
  {
    id: "m8",
    name: "Ravioli di Ricotta e Spinaci",
    category: "pasta",
    price: 610,
    description: "Handcrafted pasta pillows stuffed with buffalo ricotta and tender spinach, tossed in fragrant sage and brown butter sauce.",
    image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.8
  },

  // WOOD-FIRED PIZZA
  {
    id: "m9",
    name: "Margherita Classica D.O.P.",
    category: "pizza",
    price: 560,
    description: "San Marzano D.O.P. tomato sauce, fresh Fior di Latte mozzarella, fragrant sweet basil, cold-pressed Sicilian olive oil on a 48h fermented crust.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    isFeatured: true,
    badge: "Heritage Classic",
    rating: 4.9
  },
  {
    id: "m10",
    name: "Diavola Piccante",
    category: "pizza",
    price: 680,
    description: "Spicy Spianata Calabrese salami, fiery 'Nduja sausage paste, smoked provolone cheese, caramelized red onions, hot honey drizzle.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg", "spicy"],
    rating: 4.9
  },
  {
    id: "m11",
    name: "Quattro Formaggi con Miele al Tartufo",
    category: "pizza",
    price: 690,
    description: "White base pizza with Fior di Latte, Gorgonzola Dolce, creamy Fontina, Parmigiano-Reggiano, toasted walnuts, and truffle honey.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.8
  },
  {
    id: "m12",
    name: "Prosciutto Crudo e Rucola",
    category: "pizza",
    price: 740,
    description: "San Marzano tomatoes, fresh mozzarella, finished after baking with 20-month aged Parma prosciutto, wild rocket, and shaved parmesan.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.9
  },

  // MAIN COURSE
  {
    id: "m13",
    name: "Risotto ai Funghi Porcini & Tartufo",
    category: "mains",
    price: 680,
    description: "Slow-stirred Carnaroli rice, pan-seared wild porcini mushrooms, rich thyme stock, finished with white truffle butter and parmesan crisps.",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    isFeatured: true,
    badge: "Chef's Pick",
    rating: 5.0
  },
  {
    id: "m14",
    name: "Branzino Cileno al Forno",
    category: "mains",
    price: 890,
    description: "Pan-roasted Mediterranean Chilean Sea Bass, saffron-infused potato velouté, blistered cherry tomatoes, caperberry emulsion.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.9
  },
  {
    id: "m15",
    name: "Ossobuco alla Milanese",
    category: "mains",
    price: 920,
    description: "Tender braised veal shank simmered with white wine and garden mirepoix, accompanied by saffron risotto and vibrant gremolata.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    dietary: ["non-veg"],
    rating: 4.9
  },
  {
    id: "m16",
    name: "Melanzane alla Parmigiana",
    category: "mains",
    price: 580,
    description: "Layers of lightly crisped eggplant, robust San Marzano tomato sauce, molten fresh mozzarella, basil, baked in earthenware.",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.7
  },

  // DOLCI & DESSERTS
  {
    id: "m17",
    name: "Tiramisu Classico della Casa",
    category: "desserts",
    price: 390,
    description: "Airy Savoiardi ladyfingers soaked in custom roast espresso and aged Marsala, layered with whipped mascarpone cream and Valrhona cocoa.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    isFeatured: true,
    badge: "House Favorite",
    rating: 5.0
  },
  {
    id: "m18",
    name: "Panna Cotta alla Vaniglia del Madagascar",
    category: "desserts",
    price: 360,
    description: "Silky Madagascar vanilla bean panna cotta served with tart wild berry compote, candied mint leaves, and pistachio crumble.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.8
  },
  {
    id: "m19",
    name: "Cannoli Siciliani Croccanti",
    category: "desserts",
    price: 380,
    description: "Crispy fried pastry shells filled with sweetened sheep's milk ricotta, dark chocolate chips, Bronte pistachios, and candied orange peel.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.9
  },

  // COCKTAILS & WINES
  {
    id: "m20",
    name: "Bella Tavola Negroni Riserva",
    category: "drinks",
    price: 550,
    description: "Botanical dry gin, Campari bitter, Carpano Antica Formula sweet vermouth, aged in oak for 30 days, flamed orange peel.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.9
  },
  {
    id: "m21",
    name: "Aperol Spritz Veneziano",
    category: "drinks",
    price: 490,
    description: "Crisp Valdobbiadene Prosecco Superiore D.O.C.G., Aperol liqueur, sparkling splash of soda, fresh orange wheel, green olive.",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.8
  },
  {
    id: "m22",
    name: "Chianti Classico Riserva DOCG (Glass)",
    category: "drinks",
    price: 650,
    description: "Castello di Brolio, Tuscany. Intense ruby red with notes of wild cherries, violet, vanilla spice, and velvety smooth tannins.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.9
  },
  {
    id: "m23",
    name: "Limoncello di Sorrento Fatto in Casa",
    category: "drinks",
    price: 350,
    description: "Traditional chilled digestive liqueur crafted in-house from organic Sorrento lemon rinds, pure cane sugar, served frost-cold.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    dietary: ["veg"],
    rating: 4.9
  }
];
