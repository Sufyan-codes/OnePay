import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import About from "../assets/about1-B_jg3c0Z.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSignup = (e) => {
    e.preventDefault();
    login({ email });
    navigate('/dashboard');
  };

  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
      className='flex justify-between max-w-7xl mx-auto pt-28 items-center'>
      <img src={About} className='hidden md:block' width={400} alt="" />
          <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Create An Account</h2>
        <p></p>
        <form onSubmit={handleSignup} className="space-y-3">
        <input type="Text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone number" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-[#510453] text-white p-2 rounded-lg">Create Account</button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Log In</Link>
        </p>
    </div>
</motion.section>
  );
};

export default Signup;
