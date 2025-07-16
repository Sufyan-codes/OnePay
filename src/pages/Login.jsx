import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import About from "../assets/about2-CbTu8vxM.png";
import { motion } from 'framer-motion';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email });
    navigate('/dashboard');
  };

  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
      className='flex justify-between max-w-6xl mx-auto pt-28 items-center'>
      <img src={About} className='hidden md:block' width={400} alt="" />
      
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-card">
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@mail.com" />
          <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••" />
          <Button full className="w-full bg-[#510453] text-white p-2 rounded-lg">Login to OndePay</Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
        </p>
      </div>
    
    </motion.section>
  );
};

export default Login;
