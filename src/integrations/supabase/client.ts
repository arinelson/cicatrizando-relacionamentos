// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lsnmadmposimsflqfwlw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzbm1hZG1wb3NpbXNmbHFmd2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MjE3MzQsImV4cCI6MjA1MTE5NzczNH0.jojAmf2IbrGyx26YsK2HDwve7Ko9YYwUq3ul4fgpMFE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);