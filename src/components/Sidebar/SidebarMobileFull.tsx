import NavbarNavigation from '../Navbar/NavbarNavigation'
import SidebarDesktop from './SidebarDesktop'

export default function SidebarMobileFull() {
  return (
    <>
    <div className='h-full absolute top-0 left-0 z-50 bg-[#181818] animate-[wave_0.25s_ease-in-out]'>
        <div className="w-[250px]">
            <div className='pl-[56px]'>
                <NavbarNavigation />
            </div>
            <SidebarDesktop />
        </div>
    </div>
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] bg-black/50 z-40"></div>
    </>
  )
}
