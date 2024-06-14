import { Route, Routes } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import NotFound from "./NotFound";
import { NavComponents } from "./components";

const App = () => {
  return (
    <div className="container">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage/>}/> */}
        <Route path="/detail/:slug" element={<DetailBookPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
