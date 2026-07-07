import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/admin/SignOutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-[80vh] bg-cream pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {user && (
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-fraunces text-2xl font-bold text-charcoal tracking-tight">
              Shop Admin
            </h1>
            <SignOutButton />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
