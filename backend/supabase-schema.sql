create table users (
  id uuid primary key, 
  email text unique
);

create table memory (
  id uuid primary key default gen_random_uuid(), 
  user_id uuid references users(id), 
  key text, 
  value jsonb,
  created_at timestamp default now()
);

create table sessions (
  id uuid primary key default gen_random_uuid(), 
  user_id uuid references users(id), 
  mode text, 
  duration int, 
  created_at timestamp default now()
);

create table waitlist (
  id uuid primary key default gen_random_uuid(), 
  email text, 
  source text, 
  created_at timestamp default now()
);