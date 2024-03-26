import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ugyfhdytzneyginggeav.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVneWZoZHl0em5leWdpbmdnZWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzMzA1MTksImV4cCI6MjAyNjkwNjUxOX0.Xu_9op-1lMwgzrPRwqc6ROveKyMI79i1SPRXfFqVZ6I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})