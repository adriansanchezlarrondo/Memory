
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://elyckuohwlgdsgtdwond.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseWNrdW9od2xnZHNndGR3b25kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzI4MjczOCwiZXhwIjoyMDI4ODU4NzM4fQ.iMD5pchLg-rXsSnu5k2nyVR3maa8vMzMWeCpWUqOyCo'
export const supabase = createClient(supabaseUrl, supabaseKey)
