import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router';
import { MainLayout } from 'components/layout';
import { Spinner } from 'components/loading';
import { lazyImport } from 'utils/lazyImport';
import { useAppNavigations } from 'hooks';

const { Users } = lazyImport(() => import('features/users'), 'Users');

const App = () => {
  const [headers, sidebar] = useAppNavigations();
  return (
    <MainLayout headers={headers} sidebar={sidebar}>
      <Suspense fallback={<Spinner size="xl" />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '*',
    element: <App />,
    children: [
      { path: 'users', element: <Users /> },
      { path: '*', element: <Navigate to="users" /> },
    ],
  },
];
