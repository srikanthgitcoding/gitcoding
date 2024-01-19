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
import GetCAllWIthTypes from "./projects_all/TypeScript/GetCAllWIthTypes.tsx";

const qclinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={qclinet}>
      <BrowserRouter>


        <Index />
        <Routes>
        <Route path="singleproduct/:id" element={<OnSingleButtonFetch></OnSingleButtonFetch>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<CreateOrder></CreateOrder>}></Route>
          <Route path="/onmount" element={<OnMountFetch></OnMountFetch>}></Route>
          <Route path="/buttonclick" element={<OnButtonClickFetch></OnButtonClickFetch>}></Route>
          
          <Route path="/dynamic" element={<DynamicParalleExample ids={[1,2,3]}></DynamicParalleExample>}>
          
          </Route>


        </Routes>
      </BrowserRouter>
      {/* <GetCAllWIthTypes></GetCAllWIthTypes> */}
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
 
export default App;
