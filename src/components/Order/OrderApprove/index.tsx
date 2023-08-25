import { Grid, Typography } from '@mui/material';
import Confetti from 'react-confetti';

export const OrderApprove = () => {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Grid
        display='flex'
        justifyContent='center'
        alignItems='center'
        height={window.innerHeight}
      >
        <Typography variant='h2' textAlign='center'>
          Order approved <br /> 😄
        </Typography>
      </Grid>
    </>
  );
};
