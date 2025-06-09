
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://enlaqjtelzzzhhvlrlrx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubGFxanRlbHp6emhodmxybHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTc1NzUsImV4cCI6MjA2NDkzMzU3NX0.hBiDBRadt_27L-zOV5bmdG1V-Gxz0JZOh5f0JV7cs38';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
