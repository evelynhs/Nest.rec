/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer = () => {

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          sx={{
            fontWeight: 'medium',
          }}
        >
          didn't answer your question? start a pull request at https://evelynhs.github.com/Nest.rec
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        alignItems={{ xs: 'stretched', sm: 'center' }}
      >
      </Box>
    </Box>
  );
};

export default Footer;