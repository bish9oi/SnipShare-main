import { supabase } from '../supabaseClient';

const getSupabaseAuthKey = () => {
  try {
    const url = new URL(supabase.supabaseUrl);
    const ref = url.hostname.split('.')[0]; // project ref
    return `sb-${ref}-auth-token`;
  } catch {
    return null;
  }
};

export const isUserLoggedIn = () => {
  const tokenKey = getSupabaseAuthKey();
  if (!tokenKey) return false;

  const sessionString = localStorage.getItem(tokenKey);
  if (!sessionString) return false;

  try {
    const session = JSON.parse(sessionString);
    return !!session?.access_token;
  } catch {
    return false;
  }
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

