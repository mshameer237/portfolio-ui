import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout-container">
      Header
      <Outlet />
      Footer
    </div>
  );
}
