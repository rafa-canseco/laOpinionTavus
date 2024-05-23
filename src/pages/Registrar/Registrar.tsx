import './Registrar.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabase.ts';
import { useNavigate } from 'react-router-dom';

const RegistrarPage = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      setSuccess(null);
    } else {
      setError(null);
      setSuccess('Registro exitoso. Ahora puedes iniciar sesión.');
      
      navigate('/');
    }
  };

  return (
    <div className="container-ext">
      <div className="container-titulo">
        <img src="src/assets/img/Auth/la-opinion-logo.png" alt="Logo la opinion" className='LogoAuth'/>
        <h1>Registro</h1>
      </div>
      <div className="container-login">
        <div className="container-int-login">
          <form className="form" onSubmit={handleRegister}>
            <label className="label-container">
              <p>Email:</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="label-container">
              <p>Contraseña:</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label className="label-container">
              <p>Confirmar Contraseña:</p>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit"><p>Registrar</p></button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarPage;




