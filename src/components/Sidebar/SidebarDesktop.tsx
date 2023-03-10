import {
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
  } from "react-icons/md";
  import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
  import { GiFilmStrip } from "react-icons/gi";
  import { SidebarMainLinks } from "./SidebarMainLinks";
  import { linkType } from "../../Types";
  import { SidebarLinks } from "./SidebarLinks";

export default function SidebarDesktop({isMobile = false}) {

    const secondaryLinks: linkType[] = [
        {
          icon: <MdOutlineVideoLibrary className="text-xl" />,
          name: "Library",
        },
        {
          icon: <MdHistory className="text-xl" />,
          name: "History",
        },
        {
          icon: <MdOutlineSmartDisplay className="text-xl" />,
          name: "Your Videos",
        },
        {
          icon: <MdOutlineWatchLater className="text-xl" />,
          name: "Watch Later",
        },
        {
          icon: <MdThumbUpOffAlt className="text-xl" />,
          name: "Liked Videos",
        },
      ];
      const subscriptionLinks: linkType[] = [
        {
          icon: <TbMusic className="text-xl" />,
          name: "Music",
        },
        {
          icon: <MdOutlineSportsVolleyball className="text-xl" />,
          name: "Sport",
        },
        {
          icon: <TbDeviceGamepad2 className="text-xl" />,
          name: "Gaming",
        },
        {
          icon: <GiFilmStrip className="text-xl" />,
          name: "Films",
        },
      ];
      const helpLinks: linkType[] = [
        {
          icon: <MdSettings className="text-xl" />,
          name: "Settings",
        },
        {
          icon: <MdOutlinedFlag className="text-xl" />,
          name: "Report history",
        },
        {
          icon: <MdOutlineHelpOutline className="text-xl" />,
          name: "Help",
        },
        {
          icon: <MdOutlineFeedback className="text-xl" />,
          name: "Send feedback",
        },
      ];

      const textLinks = [
        [
          "About",
          "Press",
          "Copyright",
          "Contact us",
          "Creator",
          "Advertise",
          "Developers",
        ],
        [
          "Terms",
          "Privacy",
          "Policy & Safety",
          "How YouTube works",
          "Test new features",
        ],
      ];

  return (
    // <span className={isMobile ? "absolute z-10" : null}>
    <div className="overflow-scroll h-[92.5vh]">
        <SidebarMainLinks isMobile={false} />
        <SidebarLinks links={secondaryLinks}/>
        <SidebarLinks links={subscriptionLinks}/>
        <SidebarLinks links={helpLinks}/>
        
        <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
          {textLinks[0].map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
          {textLinks[1].map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
        <br />
        <p className="px-4 pt-3 text-sm text-zinc-400">
          This clone is for educational purpose only.
        </p>  
    </div>
  )
}

