import Link from 'next/link';
import { BsWhatsapp, BsFacebook } from 'react-icons/bs';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-[#3E4533] text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo and Tagline */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <div className="mb-4">
            {/* Logo */}
            <img
              src="/images/serenesafaris-1.jpg"
              alt="Organization Logo"
              className="w-32 h-32 object-contain block"
            />
          </div>
          <p className="text-gray-300 text-center md:text-left">
            Adventure awaits at Victoria Falls. Explore with us.
          </p>
        </div>

        {/* Column 2: Contact Info and Social Media */}
        <div className="col-span-1">
          <h4 className="text-main2 font-bold mb-4">Contact Us</h4>
          <p>
            Phone: <a href="tel:+263771975597" className="text-main2">+263 772 563 395</a>
          </p>
          <p>
            Email: <a href="mailto:pixelcraftewt@gmail.com" className="text-main2">serenesafaris@gmail.com</a>
          </p>
          
          {/* Social Media Links */}
          <div className="flex mt-6 space-x-4">
            <Link
              href="https://wa.me/263772563395"
              className="text-gray-300 hover:text-main2 flex items-center space-x-2"
            >
              <BsWhatsapp className="text-2xl" />
              <span className="text-sm">WhatsApp</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563305256824&mibextid=ZbWKwL"
              className="text-gray-300 hover:text-main2 flex items-center space-x-2"
            >
              <BsFacebook className="text-2xl" />
              <span className="text-sm">Facebook</span>
            </Link>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <nav className="col-span-1">
          <h4 className="text-main2 font-bold mb-4">Quick Links</h4>
          <FooterLinks />
        </nav>
      </div>

      {/* Bottom Bar: Copyright and Credit */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-300">
        <p>
          <time>© {new Date().getFullYear()}</time> Serene Safaris. All rights reserved.
        </p>
        <p>
          Made with ❤️ by{' '}
          <Link href="https://pixelcrafte.co.zw" target="_blank" className="underline text-main2">
            PixelCrafte
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
