import { Box } from "@chakra-ui/react";
import Home from "pages/Home";
// import Users from "pages/Users";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Bookmarks from "pages/Bookmarks";

export const RouterConfig = () => {
  return (
    <>
        <Box as="main">
          <Routes>
            {/*//* Public Routes */}
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/bookmarks"} element={<Bookmarks />} />
            {/* <Route exact path={"/users"} element={<Users />} /> */}

            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </Box>
    </>
  );
};
