import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../components/container'
import Main from '../../layouts/Main';

const About = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            {/* <Header /> */}
          </Container>
        </Box>
        <Container maxWidth={800}>
          {/* <Content /> */}
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            {/* <Footer /> */}
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default About;