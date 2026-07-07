import Link from "next/link";
import { Plus, Package } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DeleteButton } from "@/components/admin/DeleteButton";
import type { Product } from "@/lib/types";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });

  const items = (products ?? []) as Product[];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-charcoal-muted font-sans">
          {items.length} product{items.length === 1 ? "" : "s"} in the catalog
        </p>
        <Button variant="amber" asChild>
          <Link href="/admin/products/new">
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {items.length === 0 ? (
        <Card className="flex flex-col items-center justify-center gap-3 py-16 text-center">
          <Package className="w-8 h-8 text-charcoal/30" />
          <p className="text-charcoal font-sans">No products yet.</p>
          <Button variant="forest" asChild>
            <Link href="/admin/products/new">Add your first one</Link>
          </Button>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((product) => (
            <Card key={product.id} className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 rounded-md bg-cream-dark border border-cream-deeper shrink-0 overflow-hidden flex items-center justify-center">
                {product.images?.[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <Package className="w-5 h-5 text-charcoal/30" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-fraunces font-semibold text-charcoal truncate">{product.name}</h3>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {product.category}
                  </Badge>
                  {!product.in_stock && (
                    <Badge variant="outline" className="text-xs shrink-0">
                      Out of stock
                    </Badge>
                  )}
                </div>
                <p className="text-charcoal-muted text-sm font-sans mt-0.5">
                  ${Number(product.price).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
                </Button>
                <DeleteButton productId={product.id} productName={product.name} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
