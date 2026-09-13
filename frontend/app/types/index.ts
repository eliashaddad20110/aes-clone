export interface User {
  id: string;
  email: string;
  role: string;
}

export interface NewsPost {
  id: string;
  title_en: string;
  title_de?: string;
  content_en: string;
  content_de?: string;
  excerpt_en?: string;
  excerpt_de?: string;
  image_url?: string;
  author_id: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface StaffMember {
  id: string;
  name: string;
  position_en: string;
  position_de?: string;
  category: 'administration' | 'teachers' | 'staff' | 'board';
  bio_en?: string;
  bio_de?: string;
  photo_url?: string;
  email?: string;
  display_order: number;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  title?: string;
  alt_text?: string;
  url: string;
  caption_en?: string;
  caption_de?: string;
  display_order: number;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
}

export type Language = 'en' | 'de';
