export type MediaType = 'book' | 'film-old' | 'film-new' | 'artwork' | 'synthesis';

export interface AnalysisItem {
  id: string;
  type: MediaType;
  title: string;
  creator: string;
  year: string;
  imageUrl: string;
  description: string;
  keyThemes: string[];
  analysis: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  items: Record<MediaType, AnalysisItem>;
}