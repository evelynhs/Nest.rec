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
      
      </Typography>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        about us
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        about the developers
      </Typography>
    </Box>
  );
};

export default Headline;