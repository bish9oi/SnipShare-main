const config = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  pythonApi: import.meta.env.VITE_PYTHON_API,
  javaApi: import.meta.env.VITE_JAVA_API,
};

export default config;