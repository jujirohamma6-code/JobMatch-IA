/* src/services/supabaseClient.js */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and Anon Key must be provided as environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  // Optionally throw an error or handle this more gracefully in a real app
  // throw new Error('Supabase URL and Anon Key must be provided via environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);