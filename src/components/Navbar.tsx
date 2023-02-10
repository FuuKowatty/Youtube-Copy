import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import { IoAppsSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearVideos, changeSearchTerm, clearSearchTerm, toggleSidebar } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import NavbarNavigation from "./NavbarNavigation";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-40">
      <NavbarNavigation />
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl " />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 ">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
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
    </div>
  );
}
