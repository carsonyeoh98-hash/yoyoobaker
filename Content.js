// ============================================================
// YOYOO BAKER — content.js
// ============================================================
// Edit THIS FILE to update your website. No HTML knowledge needed.
// Change prices, add products, swap photos, update events here.
// Save the file on GitHub → website updates in 30 seconds.
// ============================================================

var SITE = {

  // ── CONTACT & SOCIAL ────────────────────────────────────────
  whatsapp:  '60123771639',
  instagram: 'https://www.instagram.com/yoyoobaker',
  facebook:  'https://facebook.com/yoyoobaker',
  hitpay:    'https://hitpay.shop/yoyoobaker/',

  // ── CURRENT EVENT BAR ───────────────────────────────────────
  // Change name/icon/deadline when festivals change
  event: {
    name:     "Father's Day - 21 June!",
    icon:     "\uD83D\uDC68",
    sub:      "Order by Fri 19 June 9am for delivery",
    cta:      "Order for Dad",
    deadline: "2026-06-19T09:00:00",
    // Products shown in the event section
    featured: [
      { key: 'dads-set',      label: "Dad's Day Set",              sub: "Salted Caramel + Brownie Box",    price: 210, was: 235 },
      { key: 'salted-caramel', label: "Salted Caramel Cheesecake", sub: "Rich and indulgent",              price: 138, was: null },
      { key: 'midnight-cocoa', label: "Midnight Cocoa",            sub: "Triple chocolate layers",         price: 138, was: null }
    ]
  },

  // ── SECTION 1: THE LONG TABLE ────────────────────────────────
  longTable: [
    {
      key:   'brownie-slab',
      name:  'THE MIDNIGHT BROWNIE SLAB',
      sub:   '9 inch sharing tray',
      desc:  'Dense. Fudgy. Unapologetically rich. Made with real dark chocolate, no preservatives. The one that disappears before you count to twenty.',
      price: 95,
      img:   '',
      url:   'https://hitpay.shop/yoyoobaker/',
      bg:    'linear-gradient(145deg,#3a2828,#604848)',
      addons: [
        { label: 'Roasted Walnut Crumble', price: 8 },
        { label: 'Sea Salt Flakes',        price: 5 },
        { label: 'Dark Chocolate Drizzle', price: 6 },
        { label: 'Seasonal Crumble',       price: 10 }
      ]
    },
    {
      key:   'comfort-loaf',
      name:  'THE COMFORT LOAF',
      sub:   'Banana Walnut · 35cm',
      desc:  'Moist banana, roasted walnut, no preservatives. Slice it thick. The loaf your grandmother would have approved of.',
      price: 45,
      img:   '',
      url:   'https://hitpay.shop/yoyoobaker/',
      bg:    'linear-gradient(145deg,#f0e8d0,#c0a060)',
      addons: []
    },
    {
      key:   'sunshine-loaf',
      name:  'THE SUNSHINE LOAF',
      sub:   'Lemon Poppy Seed · 35cm',
      desc:  'Bright. Zesty. Lemon peel, poppy seed crunch, clean ingredients. The cake that makes a grey afternoon feel lighter.',
      price: 55,
      img:   '',
      url:   'https://hitpay.shop/yoyoobaker/',
      bg:    'linear-gradient(145deg,#f8f0c0,#d4c040)',
      addons: []
    },
    {
      key:   'golden-slab',
      name:  'THE GOLDEN SLAB',
      sub:   'Salted Caramel Cheesecake · 9 inch square',
      desc:  'The slab version of our most-ordered cake. Cut into squares for twelve — or keep it whole. No preservatives. No apologies.',
      price: 148,
      img:   'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184018/chatgpt-image-mar-14-2026-10-58-14-am-69b4d8c0cca3f_wugfys.png',
      url:   'https://hitpay.shop/yoyoobaker/product/salted-caramel-cheesecake',
      bg:    'linear-gradient(145deg,#e8d5c0,#8b5e3c)',
      addons: []
    }
  ],

  // ── SECTION 2: THE MOMENT COLLECTION ────────────────────────
  // chapter: 'cloud' | 'afterdark' | 'signature'
  // status:  'available' | 'coming-soon' | 'seasonal'
  cakes: [

    // ── THE CLOUD ──
    {
      key:     'black-tea-cloud',
      chapter: 'cloud',
      name:    'BLACK TEA CLOUD CAKE',
      desc:    'Earl Grey layers, soft and barely-there sweet. Like the first sip of a good cup of tea. Our most reordered cake by people who say they do not usually eat cake.',
      price:   118,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184013/df-69aab7132749a_qsvk1l.jpg',
      url:     'https://hitpay.shop/yoyoobaker/product/black-tea-cloud-cake',
      bg:      'linear-gradient(145deg,#d4c8e8,#7468a0)'
    },
    {
      key:     'zen',
      chapter: 'cloud',
      name:    'ZEN CHEESECAKE',
      desc:    'No drama. No unnecessary sweetness. A perfectly smooth cheesecake made with our signature bean paste base for a lighter finish.',
      price:   118,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184016/chatgpt-image-mar-13-2026-05-59-05-pm-69b3e051a4b4e_igjt9x.png',
      url:     'https://hitpay.shop/yoyoobaker/product/zen-cheesecake',
      bg:      'linear-gradient(145deg,#e8e0d4,#a09080)'
    },
    {
      key:     'morning-garden',
      chapter: 'cloud',
      name:    'MORNING GARDEN',
      desc:    'Japanese green tea meets hand-cut lemon curd. Delicate layers that taste like a garden in the morning. The cake people order twice.',
      price:   118,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184015/lemon-cake-69baba44a57bf_fat0cg.png',
      url:     'https://hitpay.shop/yoyoobaker/product/lemon-curd-tea-cake',
      bg:      'linear-gradient(145deg,#f0e8b8,#c0a840)'
    },
    {
      key:     'melon',
      chapter: 'cloud',
      name:    'HONEYDEW AND CREAM',
      desc:    'Light sponge, honeydew cream, soft and cooling. The cake for warm afternoons — not heavy, not too sweet, just quietly delicious.',
      price:   118,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#c8f0d8,#80c8a0)'
    },
    {
      key:     'yuzu',
      chapter: 'cloud',
      name:    'YUZU CAKE',
      desc:    'Japanese yuzu — tart, floral, unlike any citrus in a Malaysian cake. The ingredient premium Japanese patisseries build entire menus around.',
      price:   128,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#f8f0c8,#d4c060)'
    },
    {
      key:     'citrus',
      chapter: 'cloud',
      name:    'CITRUS CAKE',
      desc:    'Fresh citrus and adzuki bean. A loaf-style cake that feels like it came from a quiet Kyoto bakery.',
      price:   118,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#f0f0e0,#c8c8a0)'
    },

    // ── AFTER DARK ──
    {
      key:     'midnight-cocoa',
      chapter: 'afterdark',
      name:    'MIDNIGHT COCOA',
      desc:    'Three layers of chocolate that converge. Dark sponge, cocoa ganache, silky cream. This is what chocolate cake looks like when it grows up.',
      price:   138,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184014/chocolate-cake-69bab54c7bef4_xic25i.png',
      url:     'https://hitpay.shop/yoyoobaker/product/double-choco-moist-cake',
      bg:      'linear-gradient(145deg,#d0a898,#603828)'
    },
    {
      key:     'tira-mocha',
      chapter: 'afterdark',
      name:    'TIRA-MOCHA CAKE',
      desc:    'Tiramisu and mocha grew up and became something better together. Coffee-soaked layers, rich cream, a dusting that fills the room.',
      price:   138,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184016/tiranocha-2-69b66c17375db_zymq9h.png',
      url:     'https://hitpay.shop/yoyoobaker/product/tira-mocha-cake',
      bg:      'linear-gradient(145deg,#d4c0a8,#806040)'
    },
    {
      key:     'black-sesame',
      chapter: 'afterdark',
      name:    'BLACK SESAME COCONUT',
      desc:    'Toasted black sesame, coconut cream, earthy sweetness. Nutty, aromatic, impossible to describe — so we suggest you just try it.',
      price:   138,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184016/black-sesame-2-69bab519585ce_ljxk18.png',
      url:     'https://hitpay.shop/yoyoobaker/product/black-sesame-coconut-cake',
      bg:      'linear-gradient(145deg,#d4d0c8,#484440)'
    },
    {
      key:     'hitam',
      chapter: 'afterdark',
      name:    'HITAM',
      desc:    'Black glutinous rice, coconut cream, deep and earthy sweet. Malaysia reimagined by a Japan-trained patissier. One bite and you are back at grandmother\'s table.',
      price:   128,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#3a2828,#604848)'
    },
    {
      key:     'velvet-cocoa',
      chapter: 'afterdark',
      name:    'VELVET COCOA',
      desc:    'Deep, moist chocolate in every layer. Not dramatic — just quietly the best chocolate cake you have had. The kind that stays with you.',
      price:   128,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#c0a090,#602828)'
    },

    // ── THE SIGNATURE ──
    {
      key:     'salted-caramel',
      chapter: 'signature',
      name:    'SALTED CARAMEL CHEESECAKE',
      desc:    'The one that started it all. Caramel that bites back. Cheesecake that does not apologise for being rich. Zero preservatives. 4 variants available.',
      price:   138,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184018/chatgpt-image-mar-14-2026-10-58-14-am-69b4d8c0cca3f_wugfys.png',
      url:     'https://hitpay.shop/yoyoobaker/product/salted-caramel-cheesecake',
      bg:      'linear-gradient(145deg,#e8d5c0,#8b5e3c)'
    },
    {
      key:     'dirty-peanut',
      chapter: 'signature',
      name:    'DIRTY PEANUT CHEESECAKE',
      desc:    'A name that raised eyebrows. A taste that answered every question. Our most photographed, most gifted to dads and brothers.',
      price:   118,
      status:  'available',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184016/dirty-peanut-cheesecake-69b4e242f193e_khbz1a.png',
      url:     'https://hitpay.shop/yoyoobaker/product/dirty-peanut-cheesecake',
      bg:      'linear-gradient(145deg,#d4b888,#8b6030)'
    },
    {
      key:     'bana-cheezy',
      chapter: 'signature',
      name:    'BANANA CHEEZY CAKE',
      desc:    'Banana and cream cheese baked together until they become something better than both. Familiar, warm, and quietly addictive.',
      price:   118,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#f8e8a0,#d0a830)'
    },
    {
      key:     'smoke-coconut',
      chapter: 'signature',
      name:    'SMOKE AND COCONUT',
      desc:    'Burnt cheesecake top, mocha beneath, coconut through it all. Complex and worth every ringgit.',
      price:   138,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#d0c0a8,#706050)'
    },
    {
      key:     'la-brulee',
      chapter: 'signature',
      name:    'LA BRULEE CHEESECAKE',
      desc:    'The crack of the spoon. The chill of the cream beneath. Cheesecake dressed in its finest.',
      price:   138,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#f0e8d0,#c8a860)'
    },

    // ── SEASON'S STORY ──
    {
      key:     'sakura-lychee',
      chapter: 'seasonal',
      name:    "SAKURA LYCHEE CAKE",
      desc:    'Delicate sakura and lychee — a pairing that tastes like spring. Limited run only.',
      price:   168,
      status:  'coming-soon',
      img:     '',
      url:     '',
      bg:      'linear-gradient(145deg,#f8d8e8,#e090b0)'
    },
    {
      key:     'uji-matcha',
      chapter: 'seasonal',
      name:    'UJI MATCHA MONT BLANC',
      desc:    'Once a year we work with Uji matcha — the real kind. Not matcha flavouring. A seasonal commitment. When it ends, it is gone for another year.',
      price:   148,
      status:  'seasonal',
      img:     'https://res.cloudinary.com/drsb3bbt7/image/upload/v1779184017/chatgpt-image-apr-4-2026-12-13-49-am-69cfe76e0679f_wn5jjk.png',
      url:     'https://hitpay.shop/yoyoobaker/product/uji-matcha-mont-blanc-only-season-limited',
      bg:      'linear-gradient(145deg,#8fb870,#3d6029)'
    }
  ],

  // ── SECTION 4: THE GARDEN BOX ────────────────────────────────
  gardenBox: [
    { name: 'Standard Garden Box', sub: '6 pieces · 3 designs, 2 of each', price: 105 },
    { name: 'Custom Garden Box',   sub: '6 pieces · your choice of designs', price: 115 }
  ],

  // ── SECTION 5: A LITTLE EVERYDAY JOY ────────────────────────
  scones: [
    { name: 'Classic Milk Scone',         price: 8 },
    { name: 'Spring Onion',               price: 8 },
    { name: 'Matcha Atzuki Bean',         price: 10 },
    { name: 'Golden Garlic Scone',        price: 9 },
    { name: 'Oatmeal Peanut Butter',      price: 9 },
    { name: 'The Morning Set (any 3)',     price: 24, isSet: true },
    { name: 'The Yoyoo Scone Experience (all 5)', price: 42, isSet: true }
  ],

  // ── SECTION 6: LEARN WITH YOYO ───────────────────────────────
  workshops: [
    {
      key:   'first-petal',
      name:  'THE FIRST PETAL',
      kanji: '\u521D\u4F53\u9A13',
      desc:  'Your first time holding a piping bag. One hour, one flower, one feeling you will not forget.',
      tiers: [
        { label: 'Solo',            price: 88 },
        { label: 'Bring a friend (2 pax)', price: 168, note: 'save RM8' },
        { label: 'Group of 4',      price: 320, note: 'save RM32' }
      ]
    },
    {
      key:   'foundation',
      name:  'THE FOUNDATION',
      kanji: '\u57FA\u7840\u88F1\u82B1\u8AB2\u7A0B',
      desc:  'From your first petal to a full arrangement. The same techniques Yoyo trained in Japan, now taught in Klang.',
      tiers: [
        { label: 'Standard',            price: 275 },
        { label: 'Experience alumni',   price: 258, note: 'save RM17' }
      ]
    },
    {
      key:   'full-bloom',
      name:  'THE FULL BLOOM',
      kanji: '\u9032\u968E\u88F1\u82B1+\u676F\u5B50\u86CB\u7CD5\u70D8\u57F9',
      desc:  'Advanced piping and cupcake baking in one session. Only RM20 more than Foundation — twice the skill set.',
      tiers: [
        { label: 'Standard', price: 295 }
      ]
    },
    {
      key:   'yoyoo-journey',
      name:  'THE YOYOO JOURNEY',
      kanji: '\u5B8C\u6574\u4F53\u9A13',
      desc:  'Foundation and Full Bloom together. Save RM72 vs booking separately.',
      tiers: [
        { label: 'Foundation + Full Bloom', price: 498, note: 'save RM72' }
      ]
    }
  ]

};
