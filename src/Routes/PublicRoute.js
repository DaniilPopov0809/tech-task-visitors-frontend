import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return isLoggenIn ? <Navigate to={redirectTo} /> : <Component />;
};
