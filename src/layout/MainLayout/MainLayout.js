import { Outlet } from "react-router-dom";

import { Footer } from "components";

export default function MainLayout() {
  return (
    <div className="main-layout-container">
      Header
      <Outlet />
      <Footer />
    </div>
  );
}
