"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function DeleteButton({ productId, productName }: { productId: string; productName: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm(`Delete "${productName}"? This can't be undone.`)) return;

    setDeleting(true);
    const supabase = createClient();
    const { error } = await supabase.from("products").delete().eq("id", productId);
    setDeleting(false);

    if (error) {
      alert("Couldn't delete — try again.");
      return;
    }

    router.refresh();
  }

  return (
    <Button variant="outline" size="sm" onClick={handleDelete} disabled={deleting}>
      {deleting ? "Deleting…" : "Delete"}
    </Button>
  );
}
