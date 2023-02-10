import NavbarNavigation from './NavbarNavigation'
import SidebarDesktop from './SidebarDesktop'

export default function SidebarMobileFull() {
  return (
    <div className='absolute top-0 left-0 z-50 bg-[#181818] '>
        <div className="w-[250px]">
            <div className='pl-[56px]'>
                <NavbarNavigation />
            </div>
            <SidebarDesktop />
        </div>
        <div className='shadow-[0_0_0_9999px_#000000b0]'></div>
    </div>
  )
}
