import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AxiosbaseUrl from "../AsyncAxios/Axios";
import Tabs from "./Tabs";
import Groceries from "./Groceries";
import Parent from "./Parent.tsx";
import ReducerExample from "./ReducerExample";
import ToDoListReducer from "./ToDoListReducer";
import Tabs1 from "./Tabs1";
import Previous from "./Previous";
import IndexForm from "../ReactMistakes/FormStateMistake/IndexForm";
import IndexState1 from "../ReactMistakes/FormStateMistake/StateNeverUpdateImmediatly/IndexState1";
import IndexRefernce from "../ReactMistakes/ReferntialEquality/IndexRefernce";
import Toggle from "../CustomHooks/Toggle/Toggle";
import ChangeAllinputsWithSingleState from "../CommonLearnings/ChangeAllinputsWithSingleState";
import IndexM from "../mosh/IndexM";
import IndexReactQuery from "../REACTQUERY/Index";
import { Outlet, Link } from "react-router-dom";

function Index() {
  const [arrList, setArrList] = useState();

  return (
    <div>
      {/* <Parent></Parent> */}
      {/* <ReducerExample></ReducerExample> */}
      {/* <ToDoListReducer></ToDoListReducer> */}
      {/* <Tabs1></Tabs1> */}
      {/* <ReducerExample></ReducerExample> */}
      {/* <Previous></Previous> */}
      {/* <IndexForm></IndexForm> */}
      {/* <IndexState1></IndexState1> */}
      {/* <ChangeAllinputsWithSingleState></ChangeAllinputsWithSingleState> */}
      {/* <IndexRefernce></IndexRefernce> */}
      {/* <Toggle></Toggle> */}
      {/* <IndexM></IndexM> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Index;
