import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetail from "./components/TempAndDetail";
import Forecaste from "./components/Forecaste";

const App = () => {

  

  return (
    <div className=" text-white mx-auto max-w-screen-lg bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 mt-4 py-5 px-32">
      <Header />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetail />
      <Forecaste />
      <Forecaste />
    </div>
  );
};

export default App;
