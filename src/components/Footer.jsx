import Link from 'next/link';
import { BsWhatsapp, BsFacebook} from "react-icons/bs";
import FooterLinks from './FooterLinks';
const Footer = () => {
  return (
    <footer className="bg-main1 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Column: Logo and Tagline */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="mx-auto text-center bg-white text-8xl w-fit p-4 rounded-md">
              <span className="text-black font-bold">S</span>
              <span className="text-main2 font-bold">S</span>
          </div>
          <p className="text-gray-300 p-2">Crafting exceptional websites with passion and precision.</p>
        </div>

        {/* Middle Column: Contact and Social Media */}
        <address className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-main2 font-bold mb-4">Contact Us</h4>
          <p>Phone: <a href="tel:+263771975597" className="text-main2">+263 771 975 597</a></p>
          <p>Email: <a href="mailto:pixelcraftewt@gmail.com" className="text-main2">pixelcraftewt@gmail.com</a></p>
          <div className="flex mt-4 space-x-4">
            <Link href="https://wa.me/263771975597" className="text-gray-300 hover:text-main2 bi bi-linkedin"><BsWhatsapp className="text-center block mx-auto"/><span>whatsapp</span></Link>
            <Link href="https://www.facebook.com/profile.php?id=61563305256824&mibextid=ZbWKwL" className="text-gray-300 hover:text-main2 bi bi-facebook"><BsFacebook className="text-center block mx-auto"/><span>facebook</span></Link>
          </div>
        </address>

        {/* Right Column: Quick Links */}
        <div className="w-full md:w-1/3">
          <h4 className="text-main2 font-bold mb-4">Quick Links</h4>
          {/* quick links */}
          <FooterLinks />
        </div>
      </div>

      {/* Bottom Bar: Copyright and Credit */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-300">
        <p><time>© {new Date().getFullYear()}</time> Serene Safaris. All rights reserved.</p>
        <p>Made with ❤️ by <Link href='https://pixelcrafte.vercel.app' target="_blank" className="underline text-main2">PixelCrafte</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
