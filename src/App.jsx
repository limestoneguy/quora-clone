import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
