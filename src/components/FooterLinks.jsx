'use client';
import Link from "next/link"
import pageLinks from '@/content/pageLinks';

const FooterLinks = () => {
  return (
    <nav>
    <ul>
      {pageLinks.map((item, index)=>(
          <li className="mb-2" key={"footer-link-"+index}><Link href={item.link} className="text-gray-300 hover:text-main2"
          onClick={() => {
            let alreadySelectedLink = document.getElementsByClassName('selected')
            alreadySelectedLink[0].classList.remove('selected')
            let selectedLink = document.getElementById(item.title)
            selectedLink.classList.add('selected')}}
            
          >{item.title}</Link></li>
      ))}
    </ul>
  </nav>
  )
}

export default FooterLinks
