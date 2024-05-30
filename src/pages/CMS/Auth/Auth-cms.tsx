import './Auth-cms.css';
import { supabase } from '../../../supabase/supabase.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AuthPageCMS = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      navigate('/home-cms');
    }
  };
  const handleRegister = () => {
    navigate('/registrar');
  };

  return (
    <div className="container-ext-cms">
      <div className="container-titulo-cms">
        <div className='container-titulo-cms-logo'>
          <img src="src/assets/img/Auth/la-opinion-logo.png" alt="Logo la opinion" className='LogoAuth-CMS'/>
        </div>
        <div className='container-titulo-cms-bienvenida'>
          <h1>¡Bienvenidos!</h1>
          <h1>CMS</h1>
        </div>
      </div>
      <div className="container-login-cms">
        <div className="container-int-login-cms">
          <form className="form-cms" onSubmit={handleLogin}>
            <label className="label-container-cms">
              <p>Email:</p>
              <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className="label-container-cms">
              <p>Contraseña:</p>
              <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <Button type="submit"><p>Login</p></Button>{error && <p className="error-message">{error}</p>}
          </form>
        </div>
        <p className='registrarse-cms' onClick={handleRegister} style={{ cursor: 'pointer' }}>Registrarse</p>
      </div>
    </div>
  );
};

export default AuthPageCMS;

