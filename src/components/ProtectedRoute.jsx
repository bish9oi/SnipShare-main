// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { isUserLoggedIn } from '../utils/auth';
// import PropTypes from 'prop-types';
// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       setLoading(true);
//       const isLoggedInResult = isUserLoggedIn();
//       setLoggedIn(isLoggedInResult);
//       if (isLoggedInResult) {
//         navigate('/');
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Or a spinner
//   }

//   return !loggedIn ? children : null;
// };

// export default ProtectedRoute;





// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { isUserLoggedIn } from '../utils/auth';

// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       setLoading(true);
//       const isLoggedInResult = isUserLoggedIn();
//       setLoggedIn(isLoggedInResult);
//       if (isLoggedInResult) {
//         navigate('/');
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Or a spinner
//   }

//   return !loggedIn ? children : null;
// };

// // Add prop-types validation
// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ProtectedRoute;



import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isUserLoggedIn } from '../utils/auth';

const ProtectedRoute = ({ children, isAuthPage = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setLoading(true);
      const isLoggedInResult = isUserLoggedIn();
      setLoggedIn(isLoggedInResult);

      if (isAuthPage && isLoggedInResult) {
        // If it's an auth page and user is logged in, redirect them to a protected route
        navigate('/files');
      } else if (!isAuthPage && !isLoggedInResult) {
        // If it's a protected route and user is not logged in, redirect them to the login page
        navigate('/login');
      }

      setLoading(false);
    };

    checkAuth();
  }, [navigate, isAuthPage]);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  // Render children only if the condition is met
  // For auth pages, render if not logged in. For protected routes, render if logged in.
  if (isAuthPage) {
    return !loggedIn ? children : null;
  } else {
    return loggedIn ? children : null;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthPage: PropTypes.bool,
};

export default ProtectedRoute;