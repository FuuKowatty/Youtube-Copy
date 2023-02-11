import { BsCameraVideo, BsBell } from "react-icons/bs";
import { IoAppsSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import NavbarNavigation from "./NavbarNavigation";
import Searchbar from "./Searchbar";
import SearchButton from "./SearchButton";
import SearchMicrophone from "./SearchMicrophone";
import { BiArrowBack } from "react-icons/bi";
import { toggleMobileSearchbar } from "../../store";

export default function Navbar() {
  const isActive = useAppSelector((state) => state.toggleSidebar.isActive);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center px-3 sm:px-14  h-14 opacity-95 sticky top-0 z-30">
      {isActive ? (
        <>
          <BiArrowBack
            className="text-3xl cursor-pointer"
            onClick={() => dispatch(toggleMobileSearchbar())}
          />
          <Searchbar />
        </>
      ) : (
        <>
          {" "}
          <NavbarNavigation />
          <div className="hidden flex-1 sm:block">
            <Searchbar />
          </div>
          <div className="flex gap-5 items-center text-xl ">
            <div className="sm:hidden flex ">
              <SearchButton isMobile={true} />
              <SearchMicrophone />
            </div>
            <span className="hidden lg:block">
              <BsCameraVideo />
            </span>
            <span className="hidden lg:block">
              <IoAppsSharp />
            </span>
            <div className="relative">
              <BsBell />
              <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                9+
              </span>
            </div>
            <img
              src="https://yt3.ggpht.com/wgnEbc2Ec2JYkeyzUbiHzDlAFObI2Btwo2YRCEF1aCMBiRc5E_zWy8-URBQS3EMQ1yzzaGFR=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="youtube-icon"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
}
