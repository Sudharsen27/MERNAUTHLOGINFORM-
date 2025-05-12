

// import { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [notification, setNotification] = useState({ type: '', message: '' });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setNotification({ type: '', message: '' });

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       setNotification({ type: 'success', message: 'Login successful!' });
//     } catch (err) {
//       setNotification({ type: 'error', message: err?.response?.data?.msg || 'Login failed' });
//     } finally {
//       setIsLoading(false);
//       setTimeout(() => setNotification({ type: '', message: '' }), 3000);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
//             <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
//             <p className="text-blue-100 mt-1">Sign in to your account</p>
//           </div>

//           <form onSubmit={handleLogin} className="p-6 space-y-5">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//               required
//             />

//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
//                 aria-label="Toggle password visibility"
//               >
//                 {showPassword ? (
//                   <EyeOffIcon />
//                 ) : (
//                   <EyeIcon />
//                 )}
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow hover:scale-105 transition disabled:opacity-60"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <Spinner /> <span className="ml-2">Logging in...</span>
//                 </div>
//               ) : (
//                 'Login'
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Notification */}
//         {notification.message && (
//           <div
//             className={`fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-300 ${
//               notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
//             }`}
//           >
//             {notification.message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const EyeIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const EyeOffIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 6.06M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
//     <line x1="1" y1="1" x2="23" y2="23" />
//   </svg>
// );

// const Spinner = () => (
//   <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
// );

// export default Login;


import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification({ type: '', message: '' });

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setNotification({ type: 'success', message: 'Login successful!' });
    } catch (err) {
      setNotification({ type: 'error', message: err?.response?.data?.msg || 'Login failed' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setNotification({ type: '', message: '' }), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="w-full max-w-md backdrop-blur-md bg-white/30 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-indigo-400/50">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl text-center">
          <h2 className="text-3xl font-extrabold">Welcome Back</h2>
          <p className="text-indigo-100 text-sm mt-1">Please sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="p-6 space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white bg-opacity-50 backdrop-blur focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 bg-white bg-opacity-50 backdrop-blur focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-lg shadow-md disabled:opacity-60"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Spinner />
                <span className="ml-2">Logging in...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {notification.message && (
          <div
            className={`fixed top-5 right-5 px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium z-50 ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 6.06M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const Spinner = () => (
  <div className="h-5 w-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
);

export default Login;
