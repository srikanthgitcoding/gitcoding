import logo from "./logo.svg";
import "./App.css";
import Index from "./projects_all/oct6th/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrder from "./projects_all/REACTQUERY/CreateOrder";
import OnMountFetch from "./projects_all/REACTQUERY/OnMountFetch.jsx";
import OnSingleButtonFetch from "./projects_all/REACTQUERY/onSingleButtonFetch.jsx";
import DynamicParalleExample from "./projects_all/REACTQUERY/DynamicParalleExample.jsx";

import OnButtonClickFetch from "./projects_all/REACTQUERY/OnButtonClickFetch";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./projects_all/REACTQUERY/Home";
import ReRenderIndex from "./projects_all/ReRender/ReRenderIndex";
const client = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <ReRenderIndex />
        <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
      </QueryClientProvider>
    </div>
  );
}

export default App;
