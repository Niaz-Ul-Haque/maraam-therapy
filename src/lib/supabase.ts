import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface BlogPost {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  image_url?: string;
  user_id: string;
  published_at?: string;
}

export interface User {
  id: string;
  email: string;
}

// Utility functions for blog posts
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Upload image to Supabase Storage
export const uploadBlogImage = async (file: File, postId: string): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${postId}-${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file);

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Error in uploadBlogImage:', error);
    return null;
  }
};

// Extract filename from Supabase storage URL
export const extractImageFileName = (imageUrl: string): string | null => {
  try {
    const urlParts = imageUrl.split('/');
    const fileName = urlParts[urlParts.length - 1];
    // Remove any query parameters
    return fileName.split('?')[0];
  } catch (error) {
    console.error('Error extracting filename from URL:', error);
    return null;
  }
};

// Delete image from Supabase Storage
export const deleteBlogImage = async (imageUrl: string): Promise<boolean> => {
  try {
    const fileName = extractImageFileName(imageUrl);
    if (!fileName) {
      console.error('Could not extract filename from URL:', imageUrl);
      return false;
    }

    const { error } = await supabase.storage
      .from('blog-images')
      .remove([fileName]);

    if (error) {
      console.error('Error deleting image from storage:', error);
      return false;
    }

    console.log('Image deleted successfully from storage:', fileName);
    return true;
  } catch (error) {
    console.error('Error in deleteBlogImage:', error);
    return false;
  }
};