import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        about
      </Typography>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        about Nest.rec
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        what is Nest.rec?
      </Typography>
    </Box>
  );
};

export default Headline;