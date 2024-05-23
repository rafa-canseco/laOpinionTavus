import { Link, useNavigate } from 'react-router-dom';
import './nav-bar.css';
import { supabase } from '../../supabase/supabase.ts';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav>
      <Link to="/home"><p>HOME</p></Link>
      <Link to="/gen-ai" className='ai-pos'><p>AI AVATAR</p></Link>
      <p onClick={handleLogout} style={{ cursor: 'pointer' }}>LOGOUT</p>
    </nav>
  );
};

export default Navbar;
