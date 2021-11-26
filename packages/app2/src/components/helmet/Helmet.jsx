import { Helmet as Helm } from 'react-helmet-async';

export const Helmet = ({ title = '' }) => {
  return (
    <Helm>
      <title>{`Learna2${title ? ` - ${title}` : ''}`}</title>
      <meta name-="description" content="Trying out Lerna" />
    </Helm>
  );
};
