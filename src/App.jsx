import { Route, Routes } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  DetailBookPage,
  HomePage,
  InventoryPage,
  UserPage,
} from "./page";
import NotFound from "./NotFound";
import { NavComponents } from "./components";

const App = () => {
  return (
    <div className="container">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage/>}/> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
