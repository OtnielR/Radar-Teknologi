import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Blogs from "./pages/blog";

function App() {
  return (
    <>
      <HashRouter>
        <Routes >
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
