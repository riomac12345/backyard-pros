import { createClient } from "@supabase/supabase-js";

const [, , oldEmail, newEmail] = process.argv;

if (!oldEmail || !newEmail) {
  console.error("Usage: node --env-file=.env.local scripts/update-user-email.mjs <old-email> <new-email>");
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const { data: list, error: listError } = await supabase.auth.admin.listUsers();

if (listError) {
  console.error("Failed to list users:", listError.message);
  process.exit(1);
}

const user = list.users.find((u) => u.email === oldEmail);

if (!user) {
  console.error(`No user found with email: ${oldEmail}`);
  process.exit(1);
}

const { data, error } = await supabase.auth.admin.updateUserById(user.id, {
  email: newEmail,
  email_confirm: true,
});

if (error) {
  console.error("Failed to update user:", error.message);
  process.exit(1);
}

console.log(`Updated user email: ${oldEmail} -> ${data.user.email}`);
