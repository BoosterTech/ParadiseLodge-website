import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://snxksbzdaykibwprwxow.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueGtzYnpkYXlraWJ3cHJ3eG93Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzcyMTg2NywiZXhwIjoyMDQzMjk3ODY3fQ.XWGlbL7cR7Zo-U6jTDWKnDgIncOMzqi1-pTb9N-2vew";
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
