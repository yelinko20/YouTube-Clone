import { Link } from "react-router-dom";
import { RoutesProps } from "../types/types";

type SideBarListProps = {
  route: RoutesProps;
};

export default function SideBarList({ route }: SideBarListProps) {
  const { label, href, active, icon: Icon } = route;
  return (
    <div
      className={`${
        active && "bg-Glass1"
      } hover:bg-Glass1 rounded-lg h-fit  w-full`}
    >
      <Link
        to={href}
        className={`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium  cursor-pointer transition-all text-White px-2 py-2 `}
      >
        <Icon size={24} />
        <p className="w-full truncate text-sm">{label}</p>
      </Link>
    </div>
  );
}
