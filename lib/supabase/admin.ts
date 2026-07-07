import { createClient } from "@supabase/supabase-js";

// Server-only client that bypasses Row Level Security. Never import this from
// a Client Component or anywhere the service role key could reach the browser.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
