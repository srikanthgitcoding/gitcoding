import React from "react";
import CreateOrder from "./CreateOrder";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const QClient = new QueryClient();
function IndexReactQuery() {
  return (
    <div>
      <QueryClientProvider client={QClient}>
        <Home></Home>
      </QueryClientProvider>
    </div>
  );
}

export default IndexReactQuery;
