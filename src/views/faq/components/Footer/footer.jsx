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
          margin={'5%'}
        >
          didn't answer your question? start a pull request at <a href="https://evelynhs.github.com/Nest.rec" target="_blank">evelynhs.github.com/Nest.rec</a>
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