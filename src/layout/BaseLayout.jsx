import SideBar from "components/SideBar";
import { Outlet } from "react-router-dom";

const BaseLayout = (children) => {
  return (
    <>
        <SideBar/>
        <Outlet/>
    </>
  )
}
export default BaseLayout;