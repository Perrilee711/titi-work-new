export interface Track {
  id: string;
  title: string;
  artist: string;
  date: string;
  duration: number;
  description: string;
  vibe: string[];
  src: string;
  coverColor: string;
  featured?: boolean;
  order?: number;
  timelineLink?: string;
  noteLink?: string;
  tags?: string[];
  backstory?: string;
  year?: string;
  location?: string;
  bpm?: string;
  format?: string;
}

export interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const TRACKS: Track[] = [
  {
    id: 'red-dot-religion',
    title: 'Red Dot Religion',
    artist: 'Titi',
    date: '2024-02-20',
    duration: 195,
    description: 'The sequel no one asked for, made anyway. An ambient meditation on digital identity and the sacred geometry hidden in notification badges.',
    vibe: ['ambient', 'experimental', 'electronic'],
    src: '/music/red-dot-religion.mp3',
    coverColor: '#C45C5C',
    featured: true,
    order: 1,
    timelineLink: '/timeline/red-dot-religion',
    noteLink: '/notes/red-dot-religion',
    backstory: 'An ambient piece exploring themes of digital identity.',
    year: 'Winter, 2024',
    location: 'Singapore',
    bpm: '60',
    format: 'Synthesizer & Electronics'
  },
  {
    id: 'cat-soul-in-the-terms-of-service',
    title: 'Cat Soul in the Terms of Service',
    artist: 'Titi',
    date: '2024-04-01',
    duration: 180,
    description: 'An existential meditation on the fine print of life, wrapped in an upbeat melody.',
    vibe: ['whimsical', 'pop', 'playful'],
    src: '/music/cat-soul-in-the-terms-of-service.mp3',
    coverColor: '#5B8DB8',
    featured: false,
    order: 2,
    timelineLink: '/timeline/cat-soul',
    noteLink: '/notes/cat-soul',
    backstory: 'Written after spending three hours reading terms and conditions out of sheer boredom.',
    year: 'Spring, 2024',
    location: 'Vienna, Austria',
    bpm: '120',
    format: 'Digital Recording'
  },
  {
    id: 'meadow-hearts-and-ragged-shoes',
    title: 'Meadow, Hearts and Ragged Shoes',
    artist: 'Titi',
    date: '2024-03-15',
    duration: 227,
    description: 'Written during a long walk through alpine meadows. The melody captures sunlight filtering through pine branches.',
    vibe: ['folk', 'acoustic', 'peaceful'],
    src: '/music/meadow-hearts-and-ragged-shoes.mp3',
    coverColor: '#8B9A6B',
    featured: true,
    order: 3,
    timelineLink: '/timeline/meadow',
    noteLink: '/notes/meadow',
    backstory: 'The gentle percussion mimics wooden clogs on stone paths.',
    year: 'Spring, 2024',
    location: 'Vienna, Austria',
    bpm: '85',
    format: 'Digital Recording'
  },
  {
    id: 'soleil-sur-le-quai',
    title: 'Soleil sur le Quai',
    artist: 'Titi',
    date: '2024-01-10',
    duration: 248,
    description: 'Picture a French quayside at golden hour. Wine in hand. Nowhere to be.',
    vibe: ['chill', 'instrumental', 'warm'],
    src: '/music/soleil-sur-le-quai.mp3',
    coverColor: '#D4A853',
    featured: false,
    order: 4,
    timelineLink: '/timeline/soleil',
    noteLink: '/notes/soleil',
    backstory: 'Captures that specific feeling of European Wandering.',
    year: 'Winter, 2024',
    location: 'Paris, France',
    bpm: '88',
    format: 'Digital Recording'
  },
  {
    id: 'wild-but-tender',
    title: 'Wild but Tender',
    artist: 'Titi',
    date: '2023-12-05',
    duration: 212,
    description: 'A soulful indie track about embracing contradictions. Being tough and soft, ambitious and content.',
    vibe: ['indie', 'soul', 'emotional'],
    src: '/music/wild-but-tender.mp3',
    coverColor: '#7B5EA7',
    featured: false,
    order: 5,
    timelineLink: '/timeline/wild-but-tender',
    noteLink: '/notes/wild-but-tender',
    backstory: 'About embracing the wild and tender parts of ourselves.',
    year: 'Winter, 2023',
    location: 'Brooklyn, NY',
    bpm: '98',
    format: 'Analog 24-Track Tape'
  },
  {
    id: 'la-la-playground',
    title: 'La La Playground',
    artist: 'Titi',
    date: '2024-05-12',
    duration: 203,
    description: 'Inspired by childhood memories of swing sets and ice cream trucks. This track refuses to take itself seriously.',
    vibe: ['playful', 'upbeat', 'nostalgic'],
    src: '/music/la-la-playground.mp3',
    coverColor: '#E8845C',
    featured: false,
    order: 6,
    timelineLink: '/timeline/la-la',
    noteLink: '/notes/la-la',
    backstory: 'Childhood memories of swing sets and ice cream trucks.',
    year: 'Spring, 2024',
    location: 'London, UK',
    bpm: '110',
    format: 'Digital Recording'
  },
  {
    id: 'moonlight-on-melrose',
    title: 'Moonlight on Melrose',
    artist: 'Titi',
    date: '2024-06-20',
    duration: 235,
    description: 'A late-night jazz instrumental. Walking alone through empty streets after a rainstorm.',
    vibe: ['noir', 'jazz', 'mysterious'],
    src: '/music/moonlight-on-melrose.mp3',
    coverColor: '#4A6B8A',
    featured: false,
    order: 7,
    timelineLink: '/timeline/moonlight',
    noteLink: '/notes/moonlight',
    backstory: 'The saxophone tells a story words cannot.',
    year: 'Summer, 2024',
    location: 'Los Angeles, CA',
    bpm: '72',
    format: 'Live Studio Recording'
  },
  {
    id: 'gatinho-a-beira-mar',
    title: 'Gatinho à Beira-Mar',
    artist: 'Titi',
    date: '2024-07-08',
    duration: 215,
    description: 'A bossa nova tribute to lazy beach afternoons. Sand between toes and cold drinks condensation.',
    vibe: ['bossa', 'brazilian', 'relaxed'],
    src: '/music/gatinho-a-beira-mar.mp3',
    coverColor: '#C4956A',
    featured: false,
    order: 8,
    timelineLink: '/timeline/gatinho',
    noteLink: '/notes/gatinho',
    backstory: 'Born from salt air and sunscreen.',
    year: 'Summer, 2024',
    location: 'Remote Beach, Somewhere Warm',
    bpm: '78',
    format: 'Digital Recording'
  },
  {
    id: 'thank-you-for-loving-me',
    title: 'Thank You For Loving Me',
    artist: 'Titi',
    date: '2024-08-15',
    duration: 260,
    description: 'A heartfelt ballad written in gratitude. The piano carries the weight of late-night conversations.',
    vibe: ['ballad', 'piano', 'romantic'],
    src: '/music/thank-you-for-loving-me.mp3',
    coverColor: '#B85C74',
    featured: false,
    order: 9,
    timelineLink: '/timeline/thank-you',
    noteLink: '/notes/thank-you',
    backstory: 'Late-night conversations and quiet understanding.',
    year: 'Summer, 2024',
    location: 'Melbourne, Australia',
    bpm: '68',
    format: 'Piano & Voice'
  },
  {
    id: 'titi-and-perri-hand-in-hand',
    title: 'Titi & Perri (Hand in Hand)',
    artist: 'Titi & Perri',
    date: '2024-09-01',
    duration: 178,
    description: 'A celebration of two cats who found each other across continents. A wedding gift bridging Vienna and Melbourne.',
    vibe: ['duet', 'heartfelt', 'romantic'],
    src: '/music/titi-and-perri-hand-in-hand.mp3',
    coverColor: '#D4789A',
    featured: true,
    order: 10,
    timelineLink: '/timeline/hand-in-hand',
    noteLink: '/notes/hand-in-hand',
    backstory: 'Two cats found each other across continents.',
    year: 'Autumn, 2024',
    location: 'Vienna & Melbourne',
    bpm: '95',
    format: 'Home Studio Recording'
  },
  {
    id: 'titi-the-tiny-coder-cat',
    title: 'Titi the Tiny Coder Cat',
    artist: 'Titi',
    date: '2024-10-10',
    duration: 195,
    description: 'An anthem for the computer-bound. Debugging at 3am and the strange satisfaction of a clean commit. Meows included.',
    vibe: ['whimsical', 'tech', 'playful'],
    src: '/music/titi-the-tiny-coder-cat.mp3',
    coverColor: '#8B6B4A',
    featured: false,
    order: 11,
    timelineLink: '/timeline/titi-coder',
    noteLink: '/notes/titi-coder',
    backstory: 'An anthem for the computer-bound.',
    year: 'Autumn, 2024',
    location: 'Everywhere WiFi Exists',
    bpm: '130',
    format: 'Digital Recording'
  },
];

export const MEMORIES: Memory[] = [
  { 
    id: 1, 
    date: 'Sep 2024', 
    title: 'The Wedding Song', 
    desc: 'Recording Titi & Perri as a wedding gift.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB19Aj7wg0PqhYj-tVrAcZM20TWXLnW7bifj09CmP1OTgtyIWyZ4FxLm1tgQR1H-x-dAcHF4yOT0zSi_PVI0buIfWzyI9SomjTP8Cdsu8WulvgkKMEirYH4CZFd2gKKBYqf3sOJ_OH4eHWckZ1m13o2PeJ6-Z_-ek3oHbf1TWWmwYUx8TFFH95gYaYkFvAGvGp7g7bdZ09ycANaa6io9bjmEmd1MXnM64yezaz6JV6Mq49HqfTrU6mMdGWDb59ciA0lLoT4FJMbeDqs'
  },
  { 
    id: 2, 
    date: 'Jul 2024', 
    title: 'Beach Sessions', 
    desc: 'Gatinho was born from salt air and sunscreen.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAH2OrsxahfPkcz9gIuEWRtsAlvyUc5RTSoE5RJfAoVyEFa8c4Ibe7h7g3Uxs2e7g7hRkg-6r6V7X1RTZNZgK0Etq9Vijf-qyyCOY__OcRu8E_l8Ia7hygrvypjaHm-N3SFq8kctP9wp0JcXNuFbe_8_mGOHlw0rXZjDwqGYdUAxTR8DGdLHTB0zovtgAs_2FO88YT_bYbLRUTrrrzKvs9xE1V6M1nUznuOsJG83b44sV1PfL5YpSOg-a1kxILCSmQhwh2Fbr1EPmu'
  },
  { 
    id: 3, 
    date: 'Mar 2024', 
    title: 'Vienna Meadow', 
    desc: 'Where Meadow, Hearts began its journey.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBQCeuyEbzuuojOj9kn76SCAxXvoxYTTxIt411sSXRA5wEa7CCl2YHZl7J40ORnR1M6PK_PjLXPBv7ip95kTYc6BuGz_vjChHSzl9wanrrYReg55q-s9S05qcLK5b62KGuWuxUe7vwCeQRYMzr1n6Tc2SQqVCWpvVzLUNMQaN0m7_vQtKLT2t6HYPv7KNZ2OEJC5bRnQsznF7FFQ7cKH3iFLjvt5M_QJyskoRKiVtnbX8kmcZfbraGt96wT65c05_vZ7J0UXER30A'
  },
];

export const RELATED_ARCHIVES = [
  { tag: 'Memory', title: 'Midnight in Vienna', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBQCeuyEbzuuojOj9kn76SCAxXvoxYTTxIt411sSXRA5wEa7CCl2YHZl7J40ORnR1M6PK_PjLXPBv7ip95kTYc6BuGz_vjChHSzl9wanrrYReg55q-s9S05qcLK5b62KGuWuxUe7vwCeQRYMzr1n6Tc2SQqVCWpvVzLUNMQaN0m7_vQtKLT2t6HYPv7KNZ2OEJC5bRnQsznF7FFQ7cKH3iFLjvt5M_QJyskoRKiVtnbX8kmcZfbraGt96wT65c05_vZ7J0UXER30A' },
  { tag: 'Technique', title: 'The Tape Hiss Study', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcq3eOcNcGOWcZjJvscxeIVA_wVrEj1NHeDzviEF5kUsaS6UEGJxhHxu-vmS4MMBsyxHcrTAvWLIVrbF5oefqWFPDt8kUG_1rNMKWb1IbdBoXFtk0KGiUacpYL4rj1A7czzjtwTeNN5rjERPChgavPsz0cpZz5Q9Wd8ifKo_l69z_eIfxBxL2M_T4QtYfW6ia4UvIGWIhWeMF_wmjtj0evcbFZ4vFV8r8gf2AdTQRvEqQqCqSw3p4BBcrqJd2jikzqGW7nE7wjfE_V' },
  { tag: 'Legacy', title: 'Unreleased Vocal Takes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdw6tVkOEeyNZwBbQgQd_xBXG7ViTNmpz6nQAzmGZwT1HPBT4s66YYpikoAdYDzLqagMtj7puEN6fvEw4sUpuvUFrxOrgUbZ36d0cVb7zC_cPkRUXBEinhecilsFBsKYN11XWxLMadjIuPrPR8YYJSl9bnIlb1WGU1YEWBU0SjSM0fnwHeJ4A2-hYYl-fziiaYsGCO1IcfrH7RgCJYev57kUu-VheqK1ZMqylUzgHWXTwEHCGffvv0Ry3L91GZP-y6i85z-6hu7NHm' },
];

// Get featured tracks
export const getFeaturedTracks = () => TRACKS.filter(t => t.featured).sort((a, b) => (a.order || 99) - (b.order || 99));
export const getAllTracks = () => [...TRACKS].sort((a, b) => (a.order || 99) - (b.order || 99));
export const getTrackById = (id: string) => TRACKS.find(t => t.id === id);
