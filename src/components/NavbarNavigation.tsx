import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch } from '../store/hooks';
import { toggleSidebar } from '../store';
import { Link } from 'react-router-dom';

export default function () {

    const dispatch = useAppDispatch();

    const showNavbar = () => {
        dispatch(toggleSidebar())
      }

  return (
    <div className="flex gap-1 items-center text-2xl">
      <div className="cursor-pointer" onClick={() => showNavbar()}>
        <GiHamburgerMenu />
      </div>
      <Link to="/">
        <div className="flex gap-1 items-center justify-center">
          <img src={logo} alt="logo" className="w-[120px] h-[56px]" />
        </div>
      </Link>
    </div>
  );
}
