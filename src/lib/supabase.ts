import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('CRITICAL: Supabase credentials missing from .env file.');
}

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
            insert: () => Promise.resolve({ data: null, error: null }),
            update: () => ({ eq: () => Promise.resolve({ data: null, error: null }) }),
            delete: () => ({ eq: () => Promise.resolve({ data: null, error: null }) })
        })
    } as any;
