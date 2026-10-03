import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://udporqlghkweippwlxzd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcG9ycWxnaGt3ZWlwcHdseHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4OTY0MTYsImV4cCI6MjEwNjQ3MjQxNn0.sw403kBwzjaIDo-q7H2gPpGYhRd7PcxIby5McV6Qcjo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
