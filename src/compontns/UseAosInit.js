import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAosInit = () => {
  useEffect(() => {
    Aos.init({ duration: "1500" });
  }, []);
};

export default useAosInit;
