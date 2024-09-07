'use client';
import pageLinks from '@/content/pageLinks';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="overflow-x-hidden">
      <div className="w-full h-[50px]"></div>
      {/* main navbar */}
      <nav className="bg-main1 shadow-lg text-white flex fixed z-40 w-full top-0">
        <Link href='/' className='block p-4 font-bold mr-auto selected'>Serene Safaris</Link>
        <div className="hidden md:flex">
          {pageLinks.map((item, index)=>(
              <Link onClick={() => {
      let alreadySelectedLink = document.getElementsByClassName('selected')
      alreadySelectedLink[0].classList.remove('selected')
      let selectedLink = document.getElementById(item.title)
      selectedLink.classList.add('selected')}}
      key={`page-link-${index}`} id={item.title} className="flex items-center space-x-2 p-4 transition-all duration-200 ease-linear hover:bg-main2 hover:text-main1" 
      href={item.link}>{item.icon} <span>{item.title}</span></Link>
        ))}
        </div>
        <button className="md:hidden p-4 overflow-x-hidden"
        onClick={()=>{
          const sidebar = document.getElementById('sidebar')
          if(sidebar.classList.contains('sidebar-hide')){
            sidebar.classList.remove('sidebar-hide')
            sidebar.classList.add('sidebar-show')
          }
          else {
            sidebar.classList.remove('sidebar-show')
            sidebar.classList.add('sidebar-hide')

          }
        }}
        >{<FaBars />}</button>
      </nav>
      {/* sidebar */}
      <nav id="sidebar" className="fixed bg-main1 z-50 right-0 top-16 h-[70vh] font-bold text-white w-[50vw] sm:w-[30vw] md:w-[20vw] divide-y-2 divide-gray-500 rounded-l-xl sidebar-hide transition-all duration-500 ease-in-out">
      {pageLinks.map((item, index)=>(
              <Link onClick={() => {
      let alreadySelectedLink = document.getElementsByClassName('selected')
      alreadySelectedLink[0].classList.remove('selected')
      let selectedLink = document.getElementById(item.title)
      selectedLink.classList.add('selected')
      if(sidebar.classList.contains('sidebar-hide')){
        sidebar.classList.remove('sidebar-hide')
        sidebar.classList.add('sidebar-show')
      }
      else {
        sidebar.classList.remove('sidebar-show')
        sidebar.classList.add('sidebar-hide')
      }
    }}
      key={`side-link-${index}`} id={item.title} className="flex items-center space-x-2 p-4 transition-all duration-200 ease-linear hover:bg-main2 hover:text-main1" 
      href={item.link}>{item.icon} <span>{item.title}</span></Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
