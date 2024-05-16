import './Auth.css';
import { supabase } from '../../supabase/supabase.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="container-ext">
      <div className="container-titulo">
        <h1>¡Bienvenido!</h1>
        <h1>News Room</h1>
      </div>
      <div className="container-login">
        <div className="container-int-login">
          <form className="form" onSubmit={handleLogin}>
            <label className="label-container">
              <p>Email:</p>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className="label-container">
              <p>Contraseña:</p>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button type="submit"><p>Login</p></button>{error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

