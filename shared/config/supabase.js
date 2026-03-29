const SUPABASE_URL = "https://qoyrjhgjtydbcngfnyqn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFveXJqaGdqdHlkYmNuZ2ZueXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5MTQ2NzQsImV4cCI6MjA4ODQ5MDY3NH0.ASOVIDOiJcuWOWExEzGBvwjjKEpZIfRLbxgVyc6Xr64";";

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
