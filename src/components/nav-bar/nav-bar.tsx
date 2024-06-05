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
      <div className='nav-iz'>
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}><p>NOTAS</p></Link>
        <Link to="/gen-ai" className={location.pathname === '/gen-ai' ? 'active' : ''}><p>AI AVATAR</p></Link>
        <Link to="/video-gen" className={location.pathname === '/video-gen' ? 'active' : ''}><p>VIDEOS GENERADOS</p></Link>
      </div>
      <p onClick={handleLogout} style={{ cursor: 'pointer' }} className='logout-nav'>LOGOUT</p>
      
    </nav>
  );
};

export default Navbar;