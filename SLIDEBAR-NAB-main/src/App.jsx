import "./App.css";
import Signin from "./signin";
import Signup from "./signup";
import dashboard from "./dashboard";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes, PrivateRoute } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";



function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <></> */}
          {/* <PrivateRoute path="/dashboard" element={<dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
