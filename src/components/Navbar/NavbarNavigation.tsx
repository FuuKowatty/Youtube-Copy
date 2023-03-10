import logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch } from '../../store/hooks';
import { clearVideos, toggleSidebar } from '../../store';
import { Link } from 'react-router-dom';

export default function () {

    const dispatch = useAppDispatch();


  return (
    <div className="flex gap-1 items-center text-2xl">
      <div className="cursor-pointer" onClick={() => dispatch(toggleSidebar())}>
        <GiHamburgerMenu />
      </div>
      <Link to="/" onClick={() => dispatch(clearVideos())}>
        <div className="flex gap-1 items-center justify-center">
          <img src={logo} alt="logo" className="w-[120px] h-[56px]" />
        </div>
      </Link>
    </div>
  );
}
