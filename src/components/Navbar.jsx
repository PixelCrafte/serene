import pageLinks from '@/content/pageLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-main1 shadow-lg text-white flex">
      <Link href='/' className=' block p-4 font-bold'>Serene Safaris</Link>
      <ul className="flex space-x-8 p-4">
        {pageLinks.map((item, index)=>(
          <li key={`page-link-${index}`} className="flex items-center space-x-2">
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
          </li>
      ))}
      </ul>
    </nav>
  );
};

export default Navbar;
