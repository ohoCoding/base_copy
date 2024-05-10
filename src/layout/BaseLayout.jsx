import { Outlet } from "react-router-dom";

const BaseLayout = (children) => {
  return (
    <>
        {children || <Outlet/>}
    </>
  )
}
export default BaseLayout;