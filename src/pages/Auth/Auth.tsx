import './Auth.css';
import { supabase } from '../../supabase/supabase.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AuthPage = () => {
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
      navigate('/home');
    }
  };
  const handleRegister = () => {
    navigate('/registrar');
  };

  return (
    <div className="container-ext">
      <div className="container-titulo">
        <img src="src/assets/img/Auth/la-opinion-logo.png" alt="Logo la opinion" className='LogoAuth'/>
        <h1>News Room</h1>
      </div>
      <div className="container-login">
        <div className="container-int-login">
          <form className="form" onSubmit={handleLogin}>
            <label className="label-container">
              <p>Email:</p>
              <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className="label-container">
              <p>Contraseña:</p>
              <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <Button type="submit"><p>Login</p></Button>{error && <p className="error-message">{error}</p>}
          </form>
        </div>
        <p className='registrarse' onClick={handleRegister} style={{ cursor: 'pointer' }}>Registrarse</p>
      </div>
    </div>
  );
};

export default AuthPage;

