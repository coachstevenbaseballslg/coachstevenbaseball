import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqczkvytkkrfomyosbjp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxY3prdnl0a2tyZm9teW9zYmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTIyMzAsImV4cCI6MjA4MjU2ODIzMH0.nso8ZTUVNu-6T6qYwqS9BIpD-nGOoZjoyHHOu4sv1q0';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
