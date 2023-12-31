import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FaqGroupItem = ({ items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


const Content = () => {
  return (
    <Box>
      <Box marginBottom={6} align="center">

      <img src="http://127.0.0.1:5000/video" width='80%' />
      <p src= "http://127.0.0.1:5000/logs" />
      </Box>
    </Box>
  );
};

export default Content;