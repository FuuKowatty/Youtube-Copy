import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { clearVideos, changeSearchTerm, clearSearchTerm } from "../../store";
import SearchButton from "./SearchButton";
import SearchMicrophone from "./SearchMicrophone";


export default function Searchbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const isActive = useAppSelector((state) => state.toggleSidebar.isActive)

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className={`${isActive ? "w-[100%] mr-auto" : null} flex items-center justify-center gap-3 mx-10`}>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={`w-full max-w-[650px]`}
        >
          <div className="flex bg-zinc-900 items-center h-11 px-4 pr-0 rounded-full border w-full border-[#2a2a2a]">
            <input
              placeholder="Search"
              type="text"
              className="w-[80%] bg-zinc-900 focus:outline-none border-none"
              value={searchTerm}
              onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
            />
            <AiOutlineClose
              className={`text-xl cursor-pointer ml-auto ${
                !searchTerm ? "invisible" : "visible"
              }`}
              onClick={() => dispatch(clearSearchTerm())}
            />
            <SearchButton />
          </div>
        </form>
        <SearchMicrophone />
    </div>
  );
}
