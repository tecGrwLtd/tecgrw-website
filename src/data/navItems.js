export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    children: [
      {name: 'Our Story', href: '/our-story'},
      { name: 'Team', href: "/team" }
      
    ]
  },
  {
    name: 'Solutions',
    children: [
      { name: 'Smart Agriculture', href: '/solutions/smart-agriculture' },
      { name: 'AI Education', href: '/solutions/ai-education' },
      { name: 'Business AI', href: '/solutions/business-ai' },
    ],
  },
  {
    name: 'Resources',
    children: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Newsletter', href: '/resources/newsletter' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Gallery', href: '/resources/gallery' },
    ],
  },
  {
    name: 'Partners',
    href: '/#partners',
    isHash: true,
  },
  { name: 'Contact', href: '/contact' }
];
