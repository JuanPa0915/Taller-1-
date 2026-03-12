import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lljhrxidxangfhvmprsy.supabase.co'
const supabaseKey = 'sb_publishable_0n_n_E7X8fCkHUYdJiKw4Q_JqIyVe1p'

export const supabase = createClient(supabaseUrl, supabaseKey)