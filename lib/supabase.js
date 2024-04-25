import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://crmuudnbvbggcjrrnsri.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybXV1ZG5idmJnZ2NqcnJuc3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NjM3NjcsImV4cCI6MjAyODQzOTc2N30.1-uOQbCei4EZ2-8IwrSjVD4BEZrxTA6j7By7D2wOc28'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
