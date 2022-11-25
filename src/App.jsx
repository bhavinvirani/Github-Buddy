import React from "react";
import {
  ChakraProvider,
  ColorModeScript,
  Stack,
  theme,
} from "@chakra-ui/react";
import { RouterConfig } from "routes/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "components/shared/Nav";
// import Footer from "components/shared/Footer";
import RepoContext from "context/RepoProvider";
import LodingBar from "components/shared/LodingBar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <RepoContext>
          <ColorModeScript />
          <LodingBar />
          <Stack direction={"column"} >
            <Nav />
            <RouterConfig />
            {/* <Footer /> */}
          </Stack>
        </RepoContext>
      </Router>
    </ChakraProvider>
  );
}

export default App;
