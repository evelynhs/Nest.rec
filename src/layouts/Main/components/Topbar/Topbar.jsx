import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const [signin, setSignin] = useState(true);

  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            'https://a.wattpad.com/useravatar/PRODHYUKA.256.186223.jpg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem title={'stream'} colorInvert={colorInvert} />
        </Box>

        <Box marginLeft={4}>
          <NavItem title={'logs'} colorInvert={colorInvert} route="/logs" />
        </Box>

        <Box marginLeft={4}>
          <NavItem title={'about'} colorInvert={colorInvert} route="/about" />
        </Box>

        <Box marginLeft={4}>
          <NavItem title={'faq'} colorInvert={colorInvert} route="/faq" />
        </Box>

      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
