-- Editable About page content (single row, id fixed at 1)
create table if not exists about_content (
  id int primary key default 1,
  intro_text text not null default '',
  story_text text not null default '',
  photo_url text,
  updated_at timestamptz not null default now()
);

alter table about_content enable row level security;

create policy "Public read access" on about_content
  for select to public using (true);

create policy "Authenticated update" on about_content
  for update to authenticated using (true);

create policy "Authenticated insert" on about_content
  for insert to authenticated with check (true);

drop trigger if exists about_content_set_updated_at on about_content;
create trigger about_content_set_updated_at
  before update on about_content
  for each row execute function set_updated_at();

-- Seed with the current hardcoded copy so the site looks identical until edited
insert into about_content (id, intro_text, story_text, photo_url)
values (
  1,
  'Hi — I''m Nate Macdonald, a Mill Valley teacher, and together with my sons Quinn and Peter, we run The Bay Area Backyard Pros. Sometimes we work jobs together, sometimes we split up and cover more ground — but it''s always one of us showing up for you.',
  E'I''ve been a teacher in Mill Valley for years, and that background shaped everything about how I approach this work. You spend enough time around kids and you develop a pretty strong instinct for what keeps them safe — and what doesn''t.\n\nWhen we got a Springfree trampoline for our own backyard, I was immediately impressed. No springs on the outside. Soft frame edge. A design that genuinely thought through the ways kids get hurt and engineered them away. My boys and I all became believers.\n\nWhat I noticed was that families in the Bay Area who wanted a Springfree didn''t have a great local option. Big box stores didn''t carry them. Buying one used online felt like a gamble. There was no one to call if something needed fixing. So the boys and I stepped in — got trained on the product, built relationships with suppliers, and started helping neighbors get set up safely.\n\nThree years in, we''ve helped hundreds of families across Mill Valley, Tiburon, San Rafael, and beyond. Sometimes all of us are on the same job; sometimes Quinn or Peter heads out solo. Either way, every job gets the same care and attention. These are our neighbors — we don''t cut corners.',
  null
)
on conflict (id) do nothing;
