/*import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.ts';

const PrivateRoute = () => {
  const session = supabase.auth.session();

  return session ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
*/