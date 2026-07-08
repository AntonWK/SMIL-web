import type { StringMappingType } from "typescript";

export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: string;
  ariaLabel?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  iconClass?: string;
  mail?: string;
}

export type Person = {
  name: string;
  role?: string;       // Titeln (t.ex. VD, Utvecklare)
  company?: string;    // Företaget
  mail?: string;
  image?: ImageMetadata; // Stöd för både URL och Astro-bilder
  imageUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  text: string;
  href: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  classes?: Record<string, string | Record<string, string>>;
  animate?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
}

export interface HeroProps extends HeadlineProps {
  description?: string; // override or additional? Hero has description, Headline has subtitle. Hero has actions.
  actions?: string | CallToAction[];
  image?: ImageMetadata | string; // Just in case, though checked Hero.astro and it uses slots mostly or props.
  bgImage?: {
    src: ImageMetadata | string;
    alt: string;
  };
}

export interface FeaturesProps extends HeadlineProps {
  features?: Feature[];
  columns?: number; // Values has columns
}

export interface ContentProps extends HeadlineProps {
  content?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  items?: Feature[];
  isReversed?: boolean;
  isAfterContent?: boolean;
  description?: string[]; // Adding back description as string array for compatibility
  actions?: string | CallToAction[];
}

export interface SplitContentProps extends ContentProps {
  columnRatio?: "1/2-1/2" | "1/3-2/3" | "2/3-1/3";
}

export interface ServiceListProps extends HeadlineProps {
  services?: Service[];
}

export interface PeopleProps extends HeadlineProps {
  items?: Person[];
  columns?: 1 | 2 | 3 | 4;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

export interface PricingProps extends HeadlineProps {
  plans?: PricingPlan[];
}

export interface IntegrationItem {
  name: string;
  icon?: string;
  url?: string;
}

export interface IntegrationsProps extends HeadlineProps {
  integrations?: IntegrationItem[];
}

export interface StatItem {
  title: string;
  amount: string;
  icon?: string;
}

export interface StatsProps extends HeadlineProps {
  stats?: StatItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  image?: string;
  testimonial: string;
  company?: string;
}

export interface TestimonialsProps extends HeadlineProps {
  testimonials?: Testimonial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps extends HeadlineProps {
  items?: FAQItem[];
}

export interface CallToActionWidgetProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  actions?: string | CallToAction[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

export interface PortfolioProps extends HeadlineProps {
  projects?: ProjectItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  description?: string;
  date: string;
  icon?: string;
}

export interface ExperienceProps extends HeadlineProps {
  items?: ExperienceItem[];
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillsProps extends HeadlineProps {
  skills?: SkillItem[];
}
