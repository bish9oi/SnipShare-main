import { supabase } from '../supabaseClient';

export const isUserLoggedIn = () => {
  const token = localStorage.getItem('sb-krgblphvrhpvmneqipqe-auth-token');
  return !!token;
}; 

async function getUserInfo() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }

  console.log("User info:", user);
  return user;
}

export async function getUser() {
  const user = await getUserInfo();
  return user;
}

