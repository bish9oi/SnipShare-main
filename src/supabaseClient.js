// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import config from './utils/config';

export const supabase = createClient(
  config.supabaseUrl,
  config.supabaseAnonKey
);