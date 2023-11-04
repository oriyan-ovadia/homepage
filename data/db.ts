import type { Workplace } from 'types';

const experience: Workplace[] = [
  {
    id: 'lemonade',
    name: 'Lemonade',
    url: 'https://www.lemonade.com/',
    duration: '2023 — Present',
    position: 'Senior Frontend Engineer',
    description: [
      "Contributed to a dynamic and innovative insurance-tech company that is revolutionizing the industry. Played a key role in shaping the user experience for Lemonade's cutting-edge insurance platform.",
      'Collaborated closely with design and product teams to create user-centric and visually appealing interfaces that enhance the overall customer experience.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Styled Components',
      'Vanilla Extract',
      'Redux',
      'TanStack Query',
      'Jest',
    ],
  },
  {
    id: 'healthy.io',
    name: 'Healthy.io',
    url: 'https://healthy.io/eu/',
    duration: '2019 — 2023',
    position: 'Frontend Developer',
    description: [
      'Created multiple web applications and marketing for a fast growing company that successfully turned a smartphone into a clinical-grade medical device. Delivered high-quality, robust production code for a diverse array of projects.',
      'Took full responsibility in leading the creation of a Design System. Successfully launched several new products, including back-office app for clinicians to view and manage patient data.',
    ],
    tags: [
      'React',
      'Next.js',
      'Emotion',
      'Linaria',
      'Turborepo',
      'Redux',
      'MobX',
      'TanStack Query',
      'Cypress',
      'Jest',
      'Vercel',
    ],
  },
  {
    id: 'nht',
    name: 'NHT',
    url: 'https://nht.io/',
    duration: '2018 — 2019',
    position: 'Frontend Developer',
    description: [
      'Worked on an innovative custom blockchain solution with a team of experienced and talented developers. Successfully migrated a complex PHP app to Angular.',
    ],
    tags: ['Angular', 'PHP', 'JavaScript', 'SCSS', 'RxJS', 'NgRx'],
  },
  {
    id: 'caspi-aviation',
    name: 'Caspi Aviation',
    url: 'https://www.caspitours.ru/',
    duration: '2015 — 2018',
    position: 'Frontend Developer',
    description: [
      'Developed and maintained a high-traffic tourism website. Optimized website performance, increased efficiency, and reduced run-time. Collaborated with SEO experts to implement the latest social trends and ensure compliance with WCAG regulations.',
    ],
    tags: ['JavaScript', 'PHP', 'jQuery', 'SCSS', 'SEO'],
  },
];

const peerReviews: { content: string }[] = [
  {
    content:
      "Has fast learning skills, friendly and smiling personality and a passion to building a beautiful user and developer experience. One of the best developers I've worked with in my career.",
  },
  {
    content:
      'His technical skills are impressive and he always strives to do things the right way.',
  },
  {
    content:
      'His strongly opinionated nature contributes to his role as a Senior Frontend Engineer, encouraging open discussions that can affect our day-to-day operations.',
  },
  {
    content: 'His sociable nature makes him a pleasant presence in the team.',
  },
  {
    content:
      'Even when expressing strong opinions, Oriyan does so respectfully, ensuring a non-toxic and open environment.',
  },
];

export const db = { experience, peerReviews };
