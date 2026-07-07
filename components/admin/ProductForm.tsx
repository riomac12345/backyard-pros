"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Plus, Upload } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/types";

type AttributeRow = { key: string; value: string };

function attributesToRows(attributes: Record<string, string>): AttributeRow[] {
  const rows = Object.entries(attributes).map(([key, value]) => ({ key, value }));
  return rows.length > 0 ? rows : [{ key: "", value: "" }];
}

export function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const isEditing = Boolean(product);

  const [name, setName] = useState(product?.name ?? "");
  const [category, setCategory] = useState(product?.category ?? "trampoline");
  const [price, setPrice] = useState(product?.price?.toString() ?? "");
  const [originalPrice, setOriginalPrice] = useState(product?.original_price?.toString() ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [inStock, setInStock] = useState(product?.in_stock ?? true);
  const [images, setImages] = useState<string[]>(product?.images ?? []);
  const [attributeRows, setAttributeRows] = useState<AttributeRow[]>(
    attributesToRows(product?.attributes ?? {})
  );
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);
    const supabase = createClient();

    for (const file of Array.from(files)) {
      const path = `${crypto.randomUUID()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(path, file);

      if (uploadError) {
        setError("Couldn't upload one of the photos — try again.");
        continue;
      }

      const { data } = supabase.storage.from("product-images").getPublicUrl(path);
      setImages((prev) => [...prev, data.publicUrl]);
    }

    setUploading(false);
    e.target.value = "";
  }

  function removeImage(url: string) {
    setImages((prev) => prev.filter((img) => img !== url));
  }

  function updateAttributeRow(index: number, field: "key" | "value", value: string) {
    setAttributeRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  }

  function addAttributeRow() {
    setAttributeRows((prev) => [...prev, { key: "", value: "" }]);
  }

  function removeAttributeRow(index: number) {
    setAttributeRows((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !price.trim()) {
      setError("Name and price are required.");
      return;
    }

    setSaving(true);
    const supabase = createClient();

    const attributes = attributeRows.reduce<Record<string, string>>((acc, row) => {
      if (row.key.trim()) acc[row.key.trim()] = row.value;
      return acc;
    }, {});

    const payload = {
      name: name.trim(),
      category: category.trim() || "trampoline",
      price: Number(price),
      original_price: originalPrice.trim() ? Number(originalPrice) : null,
      description: description.trim() || null,
      in_stock: inStock,
      images,
      attributes,
    };

    const { error: saveError } = isEditing
      ? await supabase.from("products").update(payload).eq("id", product!.id)
      : await supabase.from("products").insert(payload);

    setSaving(false);

    if (saveError) {
      setError("Couldn't save — try again.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Card>
        <CardContent className="p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                list="category-suggestions"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <datalist id="category-suggestions">
                <option value="trampoline" />
                <option value="parts" />
                <option value="accessory" />
              </datalist>
            </div>
            <div className="flex items-end pb-2.5">
              <label className="flex items-center gap-2 text-sm font-sans text-charcoal-light">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={(e) => setInStock(e.target.checked)}
                  className="w-4 h-4 rounded border-cream-deeper accent-forest"
                />
                In stock
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="1"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="originalPrice">Retail price ($, optional)</Label>
              <Input
                id="originalPrice"
                type="number"
                min="0"
                step="1"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <Label>Photos</Label>
          <div className="flex flex-wrap gap-3">
            {images.map((url) => (
              <div key={url} className="relative w-24 h-24 rounded-md overflow-hidden border border-cream-deeper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="absolute top-1 right-1 bg-charcoal/70 text-white rounded-full p-1 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  aria-label="Remove photo"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <label className="w-24 h-24 rounded-md border-2 border-dashed border-cream-deeper flex flex-col items-center justify-center gap-1 text-charcoal-muted cursor-pointer hover:border-forest hover:text-forest transition-colors">
              <Upload className="w-5 h-5" />
              <span className="text-xs font-sans">{uploading ? "Uploading…" : "Add photo"}</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Label>Details (size, model, condition, etc.)</Label>
            <Button type="button" variant="ghost" size="sm" onClick={addAttributeRow}>
              <Plus className="w-4 h-4" />
              Add detail
            </Button>
          </div>
          {attributeRows.map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <Input
                placeholder="Label (e.g. Size)"
                value={row.key}
                onChange={(e) => updateAttributeRow(i, "key", e.target.value)}
              />
              <Input
                placeholder="Value (e.g. 10ft Round)"
                value={row.value}
                onChange={(e) => updateAttributeRow(i, "value", e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeAttributeRow(i)}
                className="p-2 text-charcoal-muted hover:text-charcoal shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-md"
                aria-label="Remove detail"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" variant="forest" disabled={saving || uploading}>
          {saving ? "Saving…" : isEditing ? "Save Changes" : "Add Product"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
