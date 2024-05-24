// fetchSession.js
import supabase from '../../config/database';


export const fetchSession = () => async (dispatch) => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error fetching session:', error);
    } else {
      dispatch(setSessionID(data));
    }
  } catch (err) {
    console.error('Error in fetchSession:', err);
  }
};
