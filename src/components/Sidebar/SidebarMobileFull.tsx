import NavbarNavigation from "../Navbar/NavbarNavigation";
import SidebarDesktop from "./SidebarDesktop";
import { useTransition, animated } from "@react-spring/web";
import { useAppSelector } from "../../store/hooks";

export default function SidebarMobileFull() {
  const isToggled = useAppSelector((state) => state.toggleSidebar.isToggled);
  const transition = useTransition(isToggled, {
    from: { x: -250, y: 0 },
    enter: { x: 0, y: 0 },
    leave: { x: -250, y: 0 },
  });

  return (
    <>
      {isToggled ? (
        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] bg-black/50 z-40"></div>
      ) : null}

      {transition((style, item) =>
        item ? (
          <>
            <animated.div
              style={style}
              className="h-full absolute z-50 bg-[#181818]"
            >
              <div className="w-[250px]">
                <div className="pl-[56px]">
                  <NavbarNavigation />
                </div>
                <SidebarDesktop />
              </div>
            </animated.div>
          </>
        ) : null
      )}
    </>
  );
}
