import { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { success, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password
    };
    dispatch(loginAdmin(formData));
  };

  // const token = localStorage.getItem('token');
  useEffect(() => {
    if (success) {
      setTimeout(() => navigate('/'), 1000);
    }
  }, [success, navigate]);
  console.log(success);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">🏥 MedCare Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 flex items-center border border-gray-300 rounded-md px-3">
              <AiOutlineUser className="h-5 w-5 text-blue-500" />
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 outline-none border-none bg-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 flex items-center border border-gray-300 rounded-md px-3">
              <AiOutlineLock className="h-5 w-5 text-blue-500" />
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none border-none bg-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
