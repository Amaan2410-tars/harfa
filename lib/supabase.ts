import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  role: 'student' | 'admin' | 'instructor'
  created_at: string
  updated_at: string
}

export interface Application {
  id: string
  user_id: string
  program: 'Foundation' | 'Advanced' | 'Gen AI'
  status: 'pending' | 'approved' | 'rejected'
  message?: string
  created_at: string
  updated_at: string
}

export interface Enrollment {
  id: string
  user_id: string
  program: 'Foundation' | 'Advanced' | 'Gen AI'
  status: 'active' | 'completed' | 'paused'
  start_date: string
  end_date: string
  progress: number
  created_at: string
  updated_at: string
}

export interface Payment {
  id: string
  user_id: string
  enrollment_id: string
  amount: number
  currency: 'INR'
  status: 'pending' | 'completed' | 'failed'
  stripe_payment_intent_id?: string
  created_at: string
  updated_at: string
}
