import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://iciftwitxtfxbavksxwy.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljaWZ0d2l0eHRmeGJhdmtzeHd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjQ2NzEyOSwiZXhwIjoyMDMyMDQzMTI5fQ.h2HiGdADEr6DWOJqg0jjzqblO_BB4XMEzABYqMOLEPw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljaWZ0d2l0eHRmeGJhdmtzeHd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjQ2NzEyOSwiZXhwIjoyMDMyMDQzMTI5fQ.h2HiGdADEr6DWOJqg0jjzqblO_BB4XMEzABYqMOLEPw",
        'content-type': 'application/json'

    }
})
