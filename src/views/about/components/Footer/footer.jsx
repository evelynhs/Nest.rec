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
          margin={'6%'}
          sx={{
            fontWeight: 'medium',
          }}
        >
          Want to see more projects? Check out our websites at <a href="https://github.com/evelynhs" target="_blank">
            github.com/evelynhs
          </a> or <a href="https://github.com/paulresmer" target="_blank">
            github.com/paulresmer
          </a>
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