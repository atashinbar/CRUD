import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
export default function Wrap() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
