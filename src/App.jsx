import React from "react";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";
import UseCallBack from "./hooks/useCallBackhook/UseCallBack";
import UseContext from "./hooks/Context/UseContext";
import UseReducer from "./hooks/UseReducer/UseReducer";
import UseLayoutEffect from "./hooks/UseLayoutEffect/UseLayoutEffect";
import Router from "./Router";
import HighOrderBase from "./HigherOrder/HighOrderBase";
import ApiCallBase from "./ReactQuery/ApiCallBase";
import Pratices from "./components/Pratices";

function App() {
  return (
    <div>
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseLayoutEffect/> */}
     {/* <Router/>  */}

      {/* react query 
     <ApiCallBase/>
*/}
      {/* <HighOrderBase/> */}
      <Pratices user={0}/>
    </div>
  );
}

export default App;
