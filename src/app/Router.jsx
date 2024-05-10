import SuspenseLoader from "component/SuspenseLoader"
import BaseLayout from "layout/BaseLayout";
import { Suspense, lazy } from "react"
import { Navigate } from "react-router-dom";

const Loader = (Component) => {  
    return(
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...Component}/>
        </Suspense>
    )
};

const Main = Loader(lazy(() => import("contents/main")));

const routes = [
    {
        path: "*",
        elememnt: <BaseLayout/>,
        children: [
            {
                path: "",
                element: <Navigate to="/main" replace />
            },
            {
                path: "main",
                element: <Main />
            }
        ]
    }
]

export default routes;