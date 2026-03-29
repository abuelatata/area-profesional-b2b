const SUPABASE_URL = "https://qoyrjhgjtydbcngfnyqn.supabase.co";
const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_ANON_KEY";

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
