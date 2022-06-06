import React from 'react';
import Apps from './components/table.js';
import InputComponent from '../src/components/scan.js';
import './app.css';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Box textAlign="center" fontSize="xl">
      <Grid>
    <ColorModeSwitcher justifySelf="flex-end"   />
        <Apps/>
         {/* <InputComponent/> */}
         </Grid>
      </Box>
    </ChakraProvider>
    
  );
}

export default App;
