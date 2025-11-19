// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import config from './config';

// Use config values instead of process.env
const supabaseUrl = "https://pwjjxykvquevlnnytoif.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3amp4eWt2cXVldmxubnl0b2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MzI2MjYsImV4cCI6MjA3MjEwODYyNn0.84s468HozBePkbsxFuGJfPKV3ZlE4efSTmh0mJmk4MA";

// Create and export the main Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Create and export the service role client for admin operations
export const supabaseServiceRoleClient = createClient(
  config.supabaseUrl,
  config.supabaseServiceRole
);
