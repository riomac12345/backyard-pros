-- Products table: flexible catalog (trampolines, parts, and future categories)
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category text not null default 'trampoline',
  name text not null,
  price numeric(10,2) not null,
  original_price numeric(10,2),
  description text,
  in_stock boolean not null default true,
  images text[] not null default '{}',
  attributes jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on products (category);

alter table products enable row level security;

create policy "Public read access" on products
  for select to public using (true);

create policy "Authenticated insert" on products
  for insert to authenticated with check (true);

create policy "Authenticated update" on products
  for update to authenticated using (true);

create policy "Authenticated delete" on products
  for delete to authenticated using (true);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists products_set_updated_at on products;
create trigger products_set_updated_at
  before update on products
  for each row execute function set_updated_at();

-- Seed with the current hardcoded inventory
insert into products (category, name, price, original_price, description, in_stock, attributes, sort_order)
values
  ('trampoline', 'Springfree 10ft Round', 800, 1600,
   'Our most popular size — perfect for most backyards. Fully inspected and ready to bounce. The classic round shape with Springfree''s signature spring-free safety design.',
   true, '{"size": "10ft Round"}', 1),
  ('trampoline', 'Springfree 8x13ft Oval', 950, 1900,
   'Great for families with multiple kids. The oval shape maximizes the jumping area while fitting narrower backyards. Fully refurbished and tested.',
   true, '{"size": "8×13ft Oval"}', 2),
  ('trampoline', 'Springfree 11x11ft Square', 975, 1950,
   'Maximum space, maximum fun. The square shape lets you use every corner of the jumping surface. New enclosure net installed.',
   true, '{"size": "11×11ft Square"}', 3)
on conflict do nothing;

-- Storage bucket for product photos
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

create policy "Public read product images" on storage.objects
  for select to public using (bucket_id = 'product-images');

create policy "Authenticated upload product images" on storage.objects
  for insert to authenticated with check (bucket_id = 'product-images');

create policy "Authenticated update product images" on storage.objects
  for update to authenticated using (bucket_id = 'product-images');

create policy "Authenticated delete product images" on storage.objects
  for delete to authenticated using (bucket_id = 'product-images');
