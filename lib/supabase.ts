import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mifuzqcbwzaaejxdyjit.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZnV6cWNid3phYWVqeGR5aml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzU0MTksImV4cCI6MjAyNzA1MTQxOX0.lgqcEqq17b0UmP2B_7zHAo3M68aQCt32zuucdrFJdMo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})