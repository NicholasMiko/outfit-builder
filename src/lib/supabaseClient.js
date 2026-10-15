   import { createClient } from '@supabase/supabase-js';

   const url = import.meta.env.VITE_SUPABASE_URL;
   const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

   if (!url || !key) {
       document.body.innerHTML =
           '<p style="color:red;font-family:sans-serif;padding:2rem">' +
           'VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY belum diisi di .env</p>';
       throw new Error('Supabase env belum diisi');
   }

   export const supabase = createClient(url, key);