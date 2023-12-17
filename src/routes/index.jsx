import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { ROLES } from '../utils/roles';

import { UserRoutes } from './user.routes';
import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case ROLES.ADMIN:
        return <AdminRoutes />;
      case ROLES.USER:
        return <UserRoutes />;
      default:
        return <UserRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
