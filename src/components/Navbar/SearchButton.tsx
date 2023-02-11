import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../store/hooks";
import { toggleMobileSearchbar } from "../../store";

export default function SearchButton({isMobile=false}) {

  const dispatch = useAppDispatch()

  return (
    <>
      <button className={`${!isMobile ? "bg-[#222] rounded-r-full" : null} h-full md:w-16 w-12 flex items-center justify-center`}>
        <AiOutlineSearch className="text-2xl" 
            onClick={() => dispatch(toggleMobileSearchbar())}
        />
      </button>
    </>
  );
}
