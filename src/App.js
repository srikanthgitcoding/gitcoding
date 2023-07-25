import logo from "./logo.svg";
import "./App.css";
import Index from "./projects_all/oct6th/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrder from "./projects_all/REACTQUERY/CreateOrder";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./projects_all/REACTQUERY/Home";

const qclinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={qclinet}>
      <BrowserRouter>
        <Index />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<CreateOrder></CreateOrder>}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
