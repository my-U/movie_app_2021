import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />{" "}
      {/*exact는 화면에 컴포넌트가 2개 이상 랜더링 되는 것을 방지해줌*/}
      <Route path="/about" component={About} />
      {/*  /about과 /about/hello가 동시에 랜더링 됨
      <Route path="/about/hello">
        <h1>hello</h1>
      </Route>*/}
    </HashRouter>
  );
}
export default App;
