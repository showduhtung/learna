// import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

export const Spinner = () => {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <CircularProgress />
    // </div>
  );
};
