import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page";
import NotFound from "./NotFound";
import { NavComponents } from "./components";

const App = () => {
  return (
    <div className="container">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
