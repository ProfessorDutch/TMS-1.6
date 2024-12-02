import { createClient } from '@supabase/supabase-js';

// Directly hardcode the Supabase credentials
const supabase = createClient(
  'https://uuqnzcfzmwfwtoxuggey.supabase.co', // Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cW56Y2Z6bXdmd3RveHVnZ2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5OTc2MjMsImV4cCI6MjA0ODU3MzYyM30.qcLVQZtB0hJgvSz8N98f8z8uxY6rWmBOZIYOWzAZ6J' // Supabase anon key
);

export default supabase;