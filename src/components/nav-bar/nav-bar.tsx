import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav-bar.css';
import { supabase } from '../../supabase/supabase.ts';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <nav>
      <Link to="/home"><p>HOME</p></Link>
      <p onClick={handleLogout} style={{ cursor: 'pointer' }}>LOGOUT</p>
    </nav>
  );
};

export default Navbar;
