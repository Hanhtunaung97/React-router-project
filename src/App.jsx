import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
