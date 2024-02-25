
import './App.css'
import Home from "./component/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Result from "./component/result/Result.jsx";
import Task11 from "./component/task1/Task11.jsx";
import Task12 from "./component/task1/Task12.jsx";
import {useState} from "react";

function App() {

    const [res, setRes] = useState();

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/task11" element={<Task11 setRes={setRes}/>}/>
              <Route path="/task12" element={<Task12 setRes={setRes}/>}/>
              <Route path="/result" element={<Result res={res}/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
