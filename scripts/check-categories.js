import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials missing');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCategories() {
    const { data, error } = await supabase
        .from('portfolio_items')
        .select('category');

    if (error) {
        console.error('Error fetching categories:', error);
        return;
    }

    const categories = Array.from(new Set(data.map(i => i.category)));
    console.log('Unique categories in portfolio_items:', categories);
}

checkCategories();
