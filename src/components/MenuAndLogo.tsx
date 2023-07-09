import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { iconsClassNames } from "../utils/ClassName";
import { show } from "../redux/slice/SidebarSlice";
import { useAppDispatch } from "../redux/hook";

export default function MenuAndLogo() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-4">
      <button className={iconsClassNames} onClick={() => dispatch(show())}>
        <AiOutlineMenu className="text-2xl" />
      </button>
      <img
        src={logo}
        alt="YouTube Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}
