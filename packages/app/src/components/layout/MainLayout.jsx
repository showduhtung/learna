import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, CssBaseline, Typography } from '@mui/material';

import { Header, ToolbarPlaceholder } from 'components/header';

export const MainLayout = ({ headers, sidebar, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(!open);

  const title = (
    <Typography variant="h5" noWrap style={{ fontWeight: 600 }}>
      LEARNA SOFTWARE
    </Typography>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title={title} actions={headers} toggleDrawer={handleDrawer} />
      <main className={classes.content}>
        <ToolbarPlaceholder />
        <Container maxWidth="lg">{children}</Container>
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
