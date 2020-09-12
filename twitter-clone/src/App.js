import React from "react";
import Sidebar from "./containers/sidebar/Sidebar";
import Feed from "./containers/Feed/Feed";
import Widgets from "./containers/widgets/Widgets";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
