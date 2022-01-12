import logo from './logo.svg';
import './App.css';
import Console from "./pages/Console";
import Layout from "./pages/Layout";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="console" element={<Console />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
