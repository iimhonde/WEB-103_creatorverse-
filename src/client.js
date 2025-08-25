import { createClient } from '@supabase/supabase-js';

const URL = 'https://votpcjvjphrqaszipcry.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdHBjanZqcGhycWFzemlwY3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNzcwOTIsImV4cCI6MjA3MTY1MzA5Mn0.yI0lu41rGOWIUx1m6W-ucO-FZRRiY39zeh5ShFosUfM';

export const supabase = createClient(URL, API_KEY);