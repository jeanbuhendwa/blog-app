import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <main className="main__container">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
