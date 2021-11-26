import { Alert as MuiAlert, AlertTitle as MuiAlertTitle } from '@mui/material';

export const Alert = ({ severity = 'error', title, children }) => {
  return (
    <MuiAlert severity={severity}>
      <MuiAlertTitle>
        <strong>{title}</strong>
      </MuiAlertTitle>
      {children}
    </MuiAlert>
  );
};
