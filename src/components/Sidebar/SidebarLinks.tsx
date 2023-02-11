import { linkType } from "../../Types";

export function SidebarLinks({links}: any) {

    return (
      <ul className="flex flex-col border-b-2 border-gray-700">
      {links.map(({ icon, name }: linkType ) => {
        return (
          <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
    )
  }