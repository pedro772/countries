import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}