import { createClient } from "@/lib/supabase/server";
import { AboutForm } from "@/components/admin/AboutForm";
import type { AboutContent } from "@/lib/types";

export default async function AdminAboutPage() {
  const supabase = await createClient();
  const { data: content } = await supabase
    .from("about_content")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <div>
      <h2 className="font-fraunces text-xl font-bold text-charcoal mb-6">Edit About Page</h2>
      <AboutForm content={content as AboutContent} />
    </div>
  );
}
