import Subscribe from './Subscribe';
import Link from 'next/link';
import ContactUs from './ContactUs';
import BasicAnimations from '@/components/BasicAnimations';

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
      <div className="py-8 p-2">
        <h1 className="text-5xl font-semibold text-center">Get in Touch with Serene Safaris</h1>
        <p className="mt-4 text-xl text-center">We’re here to take all your money, well... for the right reasons of coz</p>
      </div>
      {/* Contact Information & Form Section */}
      <div className="p-2 bg-gradient-to-b from-main1 to-slate-800">
        {/* Contact Information */}
        <h2 className='text-main2 text-center font-semibold text-lg'>Infomation</h2>
        <h3 className='text-white text-center font-semibold text-3xl py-8 slide-in-bottom'>Contact Info</h3>
        <div className="space-y-6 flex flex-col items-center justify-center text-white">
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p>+263 771 975 597</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>serenesafaris@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Phone Numbers</h3>
              <p>+263 771 975 597</p>
              {/* Add more numbers here */}
              <p>+263 782 874 065</p>
              <p>+263 719 610 669</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Facebook</h3>
              <p>Serene Safaris</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-white text-center font-semibold text-3xl py-8'>Operation</h3>
          <div className='flex text-white mb-8'>
            <div className='w-1/2 text-center p-2 border-r-2 border-main2 slide-in-bottom'>
              <h4 className='text-main2 font-semibold'>Address</h4>
              <p>Chakadaro, chakaro</p>
              <p>Harare, Zimbabwe</p>
            </div>
            <div className='w-1/2 text-center p-2 slide-in-top'>
              <h4 className='text-main2'>Working Hours</h4>
              <p>Mon - Sat (0700hrs - 1800hs)</p>
              <p>Closed for gossip on Sunday</p>
            </div>
          </div>  
        </div>
      </div>
        {/* Contact Form */}
        <ContactUs />
      {/* Newsletter Section */}
          <Subscribe />
          <BasicAnimations />
    </div>
  );
}