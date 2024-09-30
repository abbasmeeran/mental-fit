import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MentalStat from "../../pages/MentalStat";
import Layout from "../Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="mentalstat" element={<MentalStat />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <ToastContainer autoClose={2000} hideProgressBar />
    </>
  );
};

export default App;
