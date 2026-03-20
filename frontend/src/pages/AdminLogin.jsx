import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function AdminLogin() {
  const { isDark } = useTheme();
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    const result = await login(email, password);
    if (result.success) {
      toast.success('Welcome back! 🎉');
      navigate('/admin');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        isDark ? 'bg-dark-950' : 'bg-dark-50'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-8 sm:p-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div
            className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
              isDark ? 'bg-primary-500/10' : 'bg-primary-50'
            }`}
          >
            <FaLock className="text-primary-500" size={24} />
          </div>
          <h1 className="text-2xl font-bold font-[var(--font-display)] gradient-text">
            Admin Login
          </h1>
          <p className={`text-sm mt-2 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
            Enter your credentials to access the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="admin-email"
              className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-dark-500' : 'text-dark-400'
                }`}
                size={14}
              />
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@portfolio.com"
                className="input pl-11"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className={`text-sm font-semibold mb-1.5 block ${isDark ? 'text-dark-300' : 'text-dark-600'}`}
            >
              Password
            </label>
            <div className="relative">
              <FaLock
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-dark-500' : 'text-dark-400'
                }`}
                size={14}
              />
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input pl-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-dark-500' : 'text-dark-400'
                }`}
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className={`btn-primary w-full justify-center ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Logging in...
              </span>
            ) : (
              'Sign In'
            )}
          </motion.button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className={`text-sm font-medium ${isDark ? 'text-dark-400 hover:text-primary-400' : 'text-dark-500 hover:text-primary-600'}`}
          >
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
