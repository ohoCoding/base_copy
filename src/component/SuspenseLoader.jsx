import { RingLoader } from "react-spinners";
import {nProgress} from "nprogress";
import { useEffect } from "react";

const SuspenseLoader = () => {
    useEffect(() => {
       nProgress.start();
       return() => {
        nProgress.done()
       } 
    },[]);
    return(
        <div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          >
         <RingLoader color="#d63636" size={50} />
        </div>
    )
}

export default SuspenseLoader;