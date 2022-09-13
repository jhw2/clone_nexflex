import { Outlet, Route, Routes } from "react-router-dom";
import { requests } from "./api/request";
import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";
import { DetailPage } from "./pages/DetailPage";
import { MainPage } from "./pages/Mainpage";
import { SearchPage } from "./pages/searchPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path=":movieId" element={<DetailPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
