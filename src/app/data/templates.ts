export type Template = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const TEMPLATES: Template[] = [
  {
    slug: 'minimal-studio',
    title: 'Minimal Studio',
    description: 'Clean landing + portfolio grid.',
    tags: ['Clean', 'Portfolio', 'Business'],
  },
  {
    slug: 'agency-bold',
    title: 'Agency Bold',
    description: 'Hero, services, case studies.',
    tags: ['Agency', 'Modern', 'CTA'],
  },
  {
    slug: 'product-showcase',
    title: 'Product Showcase',
    description: 'Apple-style sections + CTAs.',
    tags: ['Product', 'Showcase', 'Premium'],
  },
];
