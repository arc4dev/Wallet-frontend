import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  authError,
} from '../redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authErr = useSelector(authError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authErr,
  };
};
