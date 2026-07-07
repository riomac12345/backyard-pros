import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProductForm } from "@/components/admin/ProductForm";
import type { Product } from "@/lib/types";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) notFound();

  return (
    <div>
      <h2 className="font-fraunces text-xl font-bold text-charcoal mb-6">Edit Product</h2>
      <ProductForm product={product as Product} />
    </div>
  );
}
