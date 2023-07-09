import { useMemo } from "react";
import { HiHome, HiOutlineNewspaper } from "react-icons/hi";
import { RiMeteorFill } from "react-icons/ri";
import { BsMusicNote, BsLightbulbFill } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { GiHanger } from "react-icons/gi";

import studio from "../assets/studio.svg";
import kids from "../assets/kids.svg";

import { useLocation } from "react-router-dom";
import { RoutesProps } from "../types/types";
import SideBarList from "./SideBarList";
import MenuAndLogo from "../components/MenuAndLogo";
import { useAppSelector } from "../redux/hook";

export default function Sidebar() {
  const isShow = useAppSelector((state) => state.sidebar.isShow);
  const { pathname } = useLocation();
  const routes: RoutesProps[] = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: RiMeteorFill,
        label: "Trending",
        active: pathname === "/trending",
        href: "/trending",
      },
      {
        icon: BsMusicNote,
        label: "Music",
        active: pathname === "/music",
        href: "/music",
      },
      {
        icon: SiYoutubegaming,
        label: "Gaming",
        active: pathname === "/gaming",
        href: "/gaming",
      },
      {
        icon: HiOutlineNewspaper,
        label: "News",
        active: pathname === "/news",
        href: "/news",
      },
      {
        icon: TfiCup,
        label: "Sports",
        active: pathname === "/sports",
        href: "/sports",
      },
      {
        icon: BsLightbulbFill,
        label: "Learning",
        active: pathname === "/learning",
        href: "/learning",
      },
      {
        icon: GiHanger,
        label: "Fashion & Beauty",
        active: pathname === "/fashion-and-beauty",
        href: "/fashion-and-beauty",
      },
    ],
    [pathname]
  );

  return (
    <div
      className={`fixed z-20 transition-all top-0  ${
        isShow ? "left-0" : "-left-[250px]"
      }`}
    >
      <div className="flex-col shadow-lg gap-y-2 bg-Black min-h-screen w-[250px] px-4 pt-2 relative">
        <MenuAndLogo />
        <div className="flex flex-col gap-y-2 px-1 py-4">
          {routes.map((route) => {
            return <SideBarList route={route} key={route.href} />;
          })}
        </div>
        <div className="flex flex-col gap-y-2 px-1 py-4  border-t-[1px] border-Glass1">
          <div className="text-White px-2 py-2">More From YouTube</div>
          <div className="hover:bg-Glass1 rounded-lg h-fit  w-full">
            <a
              href="https://studio.youtube.com/"
              target="_blank"
              className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium  cursor-pointer transition-all text-White px-2 py-2"
            >
              <img src={studio} alt="youtube studio icon" className="h-7" />
              <p className="w-full truncate text-sm">Youtube Studio</p>
            </a>
          </div>
          <div className="hover:bg-Glass1 rounded-lg h-fit  w-full">
            <a
              href="https://www.youtube.com/kids/"
              target="_blank"
              className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium  cursor-pointer transition-all text-White px-2 py-2"
            >
              <img src={kids} alt="youtube studio icon" className="h-7" />
              <p className="w-full truncate text-sm">Youtube Kids</p>
            </a>
          </div>
        </div>
        <div className="text-White px-4 py-2 text-sm  rounded-lg absolute bottom-6">
          Build with love by{" "}
          <a
            href="https://github.com/yelinko20"
            target="_blank"
            className="text-SkyBlue font-semibold"
          >
            Ye Lin Ko
          </a>
        </div>
      </div>
    </div>
  );
}
