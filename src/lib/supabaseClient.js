import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://afvpgcmowowowhwngnpx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdnBnY21vd293b3dod25nbnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NDMxNzUsImV4cCI6MjAyODIxOTE3NX0.D-5eYgLtlfZgy66H7GEmgd1D5qhLeYSEivAoWeVAvJE')