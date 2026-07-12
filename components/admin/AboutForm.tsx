"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Upload } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import type { AboutContent } from "@/lib/types";

export function AboutForm({ content }: { content: AboutContent }) {
  const router = useRouter();

  const [introText, setIntroText] = useState(content.intro_text);
  const [storyText, setStoryText] = useState(content.story_text);
  const [photoUrl, setPhotoUrl] = useState<string | null>(content.photo_url);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    const supabase = createClient();

    const path = `${crypto.randomUUID()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, file);

    if (uploadError) {
      setError("Couldn't upload the photo — try again.");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    setPhotoUrl(data.publicUrl);
    setUploading(false);
    e.target.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaved(false);
    setSaving(true);

    const supabase = createClient();
    const { error: saveError } = await supabase
      .from("about_content")
      .update({
        intro_text: introText,
        story_text: storyText,
        photo_url: photoUrl,
      })
      .eq("id", 1);

    setSaving(false);

    if (saveError) {
      setError("Couldn't save — try again.");
      return;
    }

    setSaved(true);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Card>
        <CardContent className="p-6 flex flex-col gap-2">
          <Label htmlFor="intro">Intro text (top of the About page)</Label>
          <p className="text-charcoal-muted text-xs font-sans -mt-1 mb-1">
            The short paragraph under the "Local Experts You Can Trust" heading.
          </p>
          <Textarea
            id="intro"
            value={introText}
            onChange={(e) => setIntroText(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col gap-2">
          <Label htmlFor="story">Story ("How It Started" section)</Label>
          <p className="text-charcoal-muted text-xs font-sans -mt-1 mb-1">
            Leave a blank line between paragraphs — each one will show up as its own paragraph on the page.
          </p>
          <Textarea
            id="story"
            value={storyText}
            onChange={(e) => setStoryText(e.target.value)}
            className="min-h-[280px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col gap-4">
          <Label>Photo</Label>
          <div className="flex flex-wrap items-start gap-4">
            {photoUrl && (
              <div className="relative w-40 h-32 rounded-md overflow-hidden border border-cream-deeper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoUrl} alt="" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setPhotoUrl(null)}
                  className="absolute top-1 right-1 bg-charcoal/70 text-white rounded-full p-1 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  aria-label="Remove photo"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <label className="w-40 h-32 rounded-md border-2 border-dashed border-cream-deeper flex flex-col items-center justify-center gap-1 text-charcoal-muted cursor-pointer hover:border-forest hover:text-forest transition-colors">
              <Upload className="w-5 h-5" />
              <span className="text-xs font-sans">{uploading ? "Uploading…" : photoUrl ? "Replace photo" : "Add photo"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {saved && !error && <p className="text-sm text-forest font-medium">Saved.</p>}

      <div className="flex gap-3">
        <Button type="submit" variant="forest" disabled={saving || uploading}>
          {saving ? "Saving…" : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
