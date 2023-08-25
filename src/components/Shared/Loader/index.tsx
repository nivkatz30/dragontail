import { CircularProgress, Grid } from '@mui/material';

export const Loader = () => {
  return (
    <Grid
      display='flex'
      height='100vh'
      width='100%'
      justifyContent='cener'
      alignItems='center'
    >
      <CircularProgress />
    </Grid>
  );
};
