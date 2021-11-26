import { AccountCircle, Mail, Notifications } from '@mui/icons-material';

import { useAuth } from 'lib/auth';

export const useAppNavigations = () => {
  const { logout } = useAuth();

  const header = [
    {
      key: 'mail',
      label: 'show 4 new mails',
      icon: <Mail />,
      disabled: true,
    },
    {
      key: 'notification',
      label: 'show new notifications',
      icon: <Notifications />,
      type: 'menu',
      list: [
        { text: 'Notification 1', type: 'link', url: '/notifications' },
        { text: 'Notification 2', type: 'link', url: '/notifications' },
        { text: 'Notification 3', type: 'link', url: '/notifications' },
        { text: 'Notification 4', type: 'link', url: '/notifications' },
      ],
      disabled: true,
      tooltip: 'Notifications',
    },
    {
      key: 'account',
      label: 'account settings',
      icon: <AccountCircle />,
      type: 'menu',
      list: [
        { text: 'Profile', type: 'link', url: '/profile' },
        { text: 'My Account', type: 'link', url: '/settings' },
        { text: 'Logout', onClick: () => logout() },
      ],
      tooltip: 'Account',
    },
  ];
  return [header];
};
