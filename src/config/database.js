
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://bnhdhnwigbbgxosxbrod.supabase.co"
const supabaseKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuaGRobndpZ2JiZ3hvc3hicm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzI2NzAsImV4cCI6MjAzMDY0ODY3MH0.N5cl04KshRLnzKT6CyySOQubZV3gIgMG3lQLHi5gFoU"

 const supabase = createClient(supabaseUrl, supabaseKey)

 export default supabase;