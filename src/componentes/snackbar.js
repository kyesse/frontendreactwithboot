import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { setSnackbar } from '../Redux/snackbar';
import { useDispatch, useSelector } from 'react-redux';



/*    <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>*/

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    
//const classes = useStyles();
const dispatch = useDispatch();

const snackbarOpen = useSelector(state=>state.snackbar.snackbarOpen);
const snackbarType = useSelector(state => state.snackbar.snackbarType);
const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);
const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }
  dispatch(setSnackbar(false, snackbarType, snackbarMessage));
};



 // const [open, setOpen] = React.useState(false);

  const handleClick = () => {
   // setOpen(true);
  };

 /* const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

  //  setOpen(false);
  }; */

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button className='"btn btn-outline-light"' variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
  
    </Stack>
  );
}