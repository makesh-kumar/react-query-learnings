import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Normal from "./Normal";
import ReactQuery from "./ReactQuery";

function Home() {
  return (
    <div>
      Home page
      <Link to="/">Home</Link>
      <Link to="normal">Normal</Link>
      <Link to="rq">React Query</Link>
      <Outlet />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/normal" element={<Normal />} />
          <Route path="/rq" element={<ReactQuery />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default Home;
