import Subscribe from './Subscribe';
import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactUs from './ContactUs';

const contactPageMetadata = {
  title: "Contact Us - PixelCrafte | Your Trusted Web Development Partner",
  description: "Get in touch with PixelCrafte for all your web development needs. We are here to assist you with exceptional services and innovative solutions. Contact us via email, phone, WhatsApp, or Facebook.",
  keywords: "Contact PixelCrafte, Web Development Contact, Web Design Support, PixelCrafte Support, Get in Touch, Contact Form, Web Development Consultation, Web Development Partner",
  canonical: "https://www.pixelcrafte.com/contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - PixelCrafte",
    description: "Reach out to PixelCrafte for premium web development services. We are here to bring your digital vision to life.",
    url: "https://www.pixelcrafte.co.co.zw/contact",
    type: "website",
    images: [
      {
        url: "https://www.pixelcrafte.co.zw/assets/images/contact-page-cover.jpg",
        width: 1200,
        height: 630,
        alt: "PixelCrafte Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - PixelCrafte",
    description: "Get in touch with PixelCrafte for all your web development needs.",
    image: "https://www.pixelcrafte.co.zw/assets/images/contact-page-cover.jpg",
  },
};


export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-8">
        <h1 className="text-5xl font-semibold">Get in Touch with Serene Safaris</h1>
        <p className="mt-4 text-xl text-center">We’re here to take all your money, well... for the right reasons.</p>
      </div>
        {/* Contact Form */}
        <ContactUs />
      {/* Contact Information & Form Section */}
      <div className="p-2 bg-gradient-to-b from-main1 to-gray-800">
        {/* Contact Information */}
        <h2 className='text-main2 text-center font-semibold text-lg'>Infomation</h2>
        <h3 className='text-white text-center font-semibold text-xl'>Operation</h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Link href="https://wa.me/263771975597" className="block p-3 rounded-full bg-main2 hover:bg-opacity-70">
              <FaWhatsapp className="text-2xl"></FaWhatsapp>
            </Link>
            <div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p>+263 771 975 597</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="mailto:pixelcraftewt@gmail.com" className="block p-3 rounded-full bg-main2 hover:bg-opacity-70">
              <FaEnvelope className="text-2xl"></FaEnvelope>
            </Link>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>serenesafaris@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="tel:+263771975597" className="block p-3 rounded-full bg-main2 hover:bg-opacity-70">
              <FaPhoneAlt className="text-2xl"></FaPhoneAlt>
            </Link>
            <div>
              <h3 className="text-xl font-semibold">Phone Number</h3>
              <p>+263 771 975 597</p>
              {/* Add more numbers here */}
              <p>+263 782 874 065</p>
              <p>+263 719 610 669</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61563305256824&mibextid=ZbWKwL" className="block p-3 rounded-full bg-main2 hover:bg-opacity-70">
              <FaFacebookF className="text-2xl"></FaFacebookF>
            </Link>
            <div>
              <h3 className="text-xl font-semibold">Facebook</h3>
              <p>Serene Safaris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
          <Subscribe />
    </div>
  );
}