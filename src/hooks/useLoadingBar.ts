import { useEffect } from "react";
import { setProgress } from "../redux/slice/TopLoadingBarSlice";
import { useAppDispatch } from "../redux/hook";

const useLoadingBar = (_dispatch: any) => {
  const Dispatch = useAppDispatch();

  useEffect(() => {
    Dispatch(setProgress(85));

    return () => {
      Dispatch(setProgress(0));
    };
  }, [Dispatch]);
};

export default useLoadingBar;
