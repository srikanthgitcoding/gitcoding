import React from "react";
import CreateOrder from "./CreateOrder";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomHookOptimization from "../CustomHooks/Index";
import Test1 from "../CustomHooks/Test1";

const QClient = new QueryClient();
function IndexReactQuery() {
  return (
    <div>
      <QueryClientProvider client={QClient}>
      {/* <CustomHookOptimization></CustomHookOptimization> */}
      {/* <Test1></Test1> */}
        <Home></Home>
      </QueryClientProvider>
    </div>
  );
}

export default IndexReactQuery;
