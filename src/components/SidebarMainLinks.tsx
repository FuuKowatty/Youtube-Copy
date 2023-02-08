import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
} from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export function SidebarMainLinks({ isMobile = false }) {
  const mainLinks = [
    {
      icon: (size: string) => <MdHomeFilled className={size} />,
      name: "Home",
    },
    {
      icon: (size: string) => <FaRegCompass className={size} />,
      name: "Explore",
    },
    {
      icon: (size: string) => <MdOutlineSlowMotionVideo className={size} />,
      name: "Shorts",
    },
    {
      icon: (size: string) => <MdSubscriptions className={size} />,
      name: "Subscriptions",
    },
  ];

  return (
    <ul className="flex flex-col justify-center py-8">
      {mainLinks.map(({ icon, name }, index) => {
        return (
          <li
            key={isMobile ? name + index : name}
            // id={isMobile ? "app-toolkit" : null}
            className={`
                        ${
                          isMobile
                            ? "flex justify-center"
                            : `pl-6 py-3 
                            ${name === "Home" ? "bg-zinc-600" : null}`
                        } "hover:bg-zinc-600"`}
          >
            {isMobile ? (
              <>
                <button
                  id={name}
                  className="flex items-center gap-5 justify-center m-3 py-3"
                >
                  <a href="#" className="w-full flex justify-center">
                    {icon("text-2xl")}
                  </a>
                </button>

                <Tooltip
                  anchorId={name}
                  content={name}
                  place="bottom"
                  style={{ padding: "2px", border: "1px solid white" }}
                  offset={0}
                />
              </>
            ) : (
              <>
                <a href="#" className="flex items-center gap-5">
                  {icon("text-xl")}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}