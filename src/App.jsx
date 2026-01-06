import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Blogs from "./pages/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
