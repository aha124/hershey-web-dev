// ==========================================
// SITE CONSTANTS - Easy to update
// ==========================================

// Contact Information
export const CONTACT = {
  email: 'hello@anthonyarbaiza.com',
  phone: '', // Add phone number if desired
  location: 'Hershey, PA',
  responseTime: '24 hours',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  linkedin: '', // Add if desired
  github: '', // Add if desired
  twitter: '', // Add if desired
} as const;

// Site Metadata
export const SITE_META = {
  title: 'Anthony Arbaiza | Web Developer in Hershey, PA',
  description: 'Simple, professional websites for local businesses in Hershey and Central PA. No monthly fees, no hassle.',
  url: 'https://anthonyarbaiza.com',
  ogImage: '/og-image.png',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;

// Hero Content
export const HERO_CONTENT = {
  headline: 'Websites for Local Businesses. Built by Your Neighbor.',
  subheadline: "I'm Anthony—a web developer right here in Hershey, PA. I help small businesses get online with simple, professional websites. No monthly fees, no hassle, no jargon.",
  ctaPrimary: 'See My Work',
  ctaSecondary: 'Or just say hi',
} as const;

// Why Local Section
export const WHY_LOCAL = {
  sectionTitle: 'Why Work With a Neighbor?',
  cards: [
    {
      icon: 'MapPin',
      title: "I'm Right Here in Hershey",
      description: "Not a faceless agency. We can grab coffee at Houlihan's, meet at your shop, or just talk on the phone. I'm 10 minutes away, not 10 time zones.",
    },
    {
      icon: 'BadgeDollarSign',
      title: 'Simple & Honest Pricing',
      description: 'One flat price. You own your site. No monthly fees unless you want ongoing help. No contracts, no surprises.',
    },
    {
      icon: 'MessageCircle',
      title: 'I Speak Human, Not Tech',
      description: "No jargon, no upsells. Just a clean website that shows up when people search Google for what you do.",
    },
  ],
} as const;

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  {
    title: 'Parkside Harmony',
    badge: 'Local Chorus',
    description: 'A welcoming site for our community barbershop chorus, featuring upcoming shows, membership info, and our story.',
    link: 'https://parksidevoices.org',
    note: 'Fun fact: I sing tenor with these guys',
    image: '/images/parkside-mockup.jpg',
    isDemo: false,
  },
  {
    title: 'Arbafix',
    badge: 'Console Repair',
    description: "Clean, conversion-focused site for my video game console repair side business. PS5, Xbox, Switch—I fix 'em.",
    link: 'https://arbafix.com',
    note: '',
    image: '/images/arbafix-mockup.jpg',
    isDemo: false,
  },
  {
    title: 'The Cocoa Table',
    badge: 'Demo Site',
    description: 'What a simple, effective site could look like for a local restaurant or café.',
    link: '/demo/restaurant',
    note: 'This is a fictional demo—click to explore',
    image: '/images/restaurant-mockup.jpg',
    isDemo: true,
  },
] as const;

// Pricing Packages
export const PRICING = {
  sectionTitle: 'Simple, Honest Pricing',
  sectionSubtitle: 'No hidden fees. No monthly contracts. You own your website.',
  packages: [
    {
      name: 'Starter Site',
      price: '$1,500',
      features: [
        '1-3 pages',
        'Mobile-friendly design',
        'Contact form',
        'Google-ready (basic SEO)',
        '2 week turnaround',
      ],
      perfectFor: 'contractors, solo professionals, trades',
      highlighted: false,
      badge: '',
    },
    {
      name: 'Business Site',
      price: '$2,500',
      features: [
        '5-7 pages',
        'Everything in Starter',
        'Photo gallery',
        'Google Maps integration',
        'Social media links',
        '3 week turnaround',
      ],
      perfectFor: 'restaurants, shops, service businesses',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Ongoing Care',
      price: '$50/month',
      features: [
        'Monthly updates & edits',
        'Content changes when you need them',
        'Tech support',
        'Hosting management',
      ],
      perfectFor: "owners who'd rather not touch it",
      highlighted: false,
      badge: 'Optional Add-on',
    },
  ],
  footnote: 'Every site is yours forever. No lock-in, no gotchas.',
} as const;

// About Section
export const ABOUT_CONTENT = {
  sectionTitle: 'About Anthony',
  paragraphs: [
    "I'm a data professional by day—I work in healthcare analytics at a local engineering firm. Building websites is something I do on the side because I genuinely enjoy it, and I like helping local businesses succeed.",
    "I also sing with Parkside Harmony, our local barbershop chorus. If you've been to one of our shows at the Hershey Area Playhouse, you might have seen me.",
    "I'm not a big agency with overhead to cover. I'm your neighbor. And I think every Hershey-area business deserves a great website without getting locked into crazy monthly fees.",
  ],
  signoff: '— Anthony',
} as const;

// Contact Section
export const CONTACT_CONTENT = {
  sectionTitle: "Let's Talk",
  sectionSubtitle: 'No pressure, no sales pitch. Just reach out and we\'ll see if I can help.',
  formFields: {
    name: { label: 'Name', required: true },
    email: { label: 'Email', required: true },
    phone: { label: 'Phone', required: false },
    message: { label: 'Message', required: true },
  },
  submitButton: 'Send Message',
  locationNote: 'Hershey, PA (and happy to meet anywhere nearby)',
  responseNote: 'I usually respond within 24 hours',
  casualNote: "Prefer to talk? Just say so in your message and I'll give you a call.",
} as const;

// Footer
export const FOOTER_CONTENT = {
  copyright: '2025 Anthony Arbaiza',
  tagline: 'Because every local business deserves a good website.',
  builtWith: 'Designed & built with coffee and chocolate in Hershey, PA',
  portfolioLinks: [
    { label: 'parksidevoices.org', href: 'https://parksidevoices.org' },
    { label: 'arbafix.com', href: 'https://arbafix.com' },
  ],
} as const;

// Colors (for reference in JS when needed)
export const COLORS = {
  chocolate: '#4a3728',
  cocoa: '#2d1f1a',
  caramel: '#d4a574',
  gold: '#e8c17f',
  cream: '#fdf8f3',
  warmWhite: '#fffefa',
  textDark: '#1f1410',
  // Restaurant demo
  burgundy: '#722f37',
  restaurantCream: '#fdf6e3',
  richBrown: '#3d2314',
  copper: '#b87333',
} as const;

// Restaurant Demo Content
export const RESTAURANT_DEMO = {
  name: 'The Cocoa Table',
  tagline: 'Farm-fresh food in the heart of Hershey',
  address: '123 Chocolate Avenue, Hershey, PA',
  phone: '(717) 555-0123',
  hours: {
    weekday: 'Mon-Sat 7am-9pm',
    weekend: 'Sun 8am-3pm',
  },
  menuItems: [
    {
      name: 'Cocoa-Rubbed Short Ribs',
      description: 'Local beef with house cocoa spice blend, roasted vegetables',
      price: '$28',
    },
    {
      name: 'Farmhouse Breakfast',
      description: 'Two eggs any style, thick-cut bacon, sourdough, seasonal jam',
      price: '$16',
    },
    {
      name: 'Harvest Bowl',
      description: 'Quinoa, roasted beets, goat cheese, candied pecans, maple vinaigrette',
      price: '$18',
    },
    {
      name: 'Brown Butter Chocolate Chip Cookie',
      description: "Because we're in Hershey",
      price: '$5',
    },
  ],
  story: "The Cocoa Table started in 2018 with a simple idea: serve honest food made with ingredients from farms we know by name. We're proud to be part of the Hershey community, and we're grateful for every neighbor who walks through our door.",
  cta: {
    title: 'Join Us',
    subtitle: 'Walk-ins always welcome',
  },
} as const;
