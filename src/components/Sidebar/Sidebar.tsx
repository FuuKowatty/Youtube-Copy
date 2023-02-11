import { SidebarMainLinks } from "./SidebarMainLinks";
import SidebarDesktop from "./SidebarDesktop";

export default function Sidebar() {
  return (
    <div className="min-w-[80px] max-w-[250px]">
      <span className="hidden xl:block">
        <SidebarDesktop />
      </span>
      {/* sidebarMobile */}
      <div className="block xl:hidden">
       <SidebarMainLinks isMobile={true} />
      </div>
    </div>
  );
}
