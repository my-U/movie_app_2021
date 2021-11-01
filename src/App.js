import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation /> {/* Router 밖에서는 사용 불가 */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
      <footer></footer>
    </>
  );
}
export default App;
