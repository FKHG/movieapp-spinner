import React from "react";
import { render } from "react-dom";
import MovieApp from "./components/MovieApp";

const App = () => (
  <div>
    <MovieApp />
  </div>
);

render(<App />, document.getElementById("root"));
export default App