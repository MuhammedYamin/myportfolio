export type Project = {
  id: string;
  title: string;
  short: string;
  highlights: string[];
  link?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 'rrbuilder',
    title: 'RR Builders — Apartments & Constructions ',
    short: 'Company website with SEO improvements and iterative client-driven design.',
    highlights: ['On-page SEO', 'Client collaboration'],
    link: 'https://rrbuilder.vercel.app/',
    image: '/images/projects/rrbuilder.png',
  },
  {
    id: 'gov-crowdfund',
    title: 'Mangalore Government Schools Crowdfunding',
    short: 'Secure donation flows, admin dashboard, real-time progress tracking; nationwide recognition.',
    highlights: ['Secure donations', 'MongoDB', 'Featured in national press'],
    link: 'https://cf.dakshinakannada.org',
    image: '/images/projects/gov-crowdfund.png',
  },
  {
    id: 'ftir-api',
    title: 'Fourier transform infrared spectroscopy Analysis API',
    short: 'FTIR peak and minimas detection and Functional group analysis of compounds',
    highlights: ['Peak detection algorithms', 'Chemical-group assignment'],
    link: '',
    image: '/images/projects/ftir.png',
  },
];
