import { useAuth } from 'lib/auth';
import { ContentLayout } from 'components/layout';
import { UsersList } from '..';

export const Users = () => {
  const { user } = useAuth();
  return (
    <ContentLayout title="Users">
      <UsersList churchId={user.churchId} />
    </ContentLayout>
  );
};
