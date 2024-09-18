import Subscribe from './Subscribe';
import Link from 'next/link';
import ContactUs from './ContactUs';
import BasicAnimations from '@/components/BasicAnimations';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-8 p-2">
        <h1 className="text-5xl font-semibold text-center">Get in Touch with Serene Safaris</h1>
        <p className="mt-4 text-xl text-center">We’re here to take all your money, well... for the right reasons of coz</p>
      </div>
        {/* Contact Form */}
          <ContactUs />
        {/* Newsletter Section */}
          <Subscribe />
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
          <BasicAnimations />
    </div>
  );
}