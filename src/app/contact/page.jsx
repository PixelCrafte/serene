import Subscribe from './Subscribe';
import Link from 'next/link';
import ContactUs from './ContactUs';
import BasicAnimations from '@/components/BasicAnimations';
import socials from '@/components/socials';

export const metadata = {
  title: 'Serene Safaris | Contact Us - Get in Touch',
  description: 'Reach out to Serene Safaris for inquiries, bookings, or any assistance with your travel plans to Victoria Falls, Zimbabwe. We are here to help make your adventure seamless and unforgettable.',
  keywords: ['Serene Safaris contact', 'Victoria Falls travel support', 'Zimbabwe safari inquiries', 'holiday bookings', 'contact Serene Safaris', 'travel agency Victoria Falls'],
  url: 'https://www.serenesafaris.co.zw/contact',
  canonical: 'https://www.serenesafaris.co.zw/contact',
  openGraph: {
    title: 'Serene Safaris | Contact Us - Get in Touch',
    description: 'Contact Serene Safaris for all your travel-related queries, bookings, or assistance with planning your trip to Victoria Falls. We’re ready to help you create a memorable experience.',
    url: 'https://www.serenesafaris.co.zw/contact',
    siteName: 'Serene Safaris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Safaris | Contact Us - Get in Touch',
    description: 'For inquiries, bookings, or support for your Victoria Falls adventure, reach out to Serene Safaris. We’re here to assist with all your travel needs.',
  },
};


export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="py-8 p-2">
        <h1 className="text-5xl font-semibold text-center">Get in Touch with Serene Safaris</h1>
        <p className="mt-4 text-xl text-center">We’re here to give you the best vacation of your life</p>
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
              <Link href='https://wa.me/263772563395'>
                <p>+263 772 563 395</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Email</h3>
              <Link href="mailto:sereneluxsafaris@gmail.com">
                <p>sereneluxsafaris@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Phone Numbers</h3>
              <Link href="tel:+263772563395">
                <p>+263 772 563 395</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className='text-center'>
              <h3 className="text-xl font-semibold">Facebook</h3>
              <Link href={socials.facebook}>
                <p>Serene Safaris</p>
              </Link>
            </div>
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Instagram</h3>
              <Link href={socials.instagram}>
                <p>safarisserene</p>
              </Link>
            </div>
            <div className='text-center'>
              <h3 className="text-xl font-semibold">Tiktok</h3>
              <Link href={socials.tiktok}>
                <p>@serenesafaris19</p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-white text-center font-semibold text-3xl py-8'>Operation</h3>
          <div className='flex text-white mb-8'>
            <address className='w-1/2 text-center p-2 border-r-2 border-main2 slide-in-bottom'>
              <h4 className='text-main2 font-semibold'>Address</h4>
              <p>Somewhere in</p>
              <p>Harare, Zimbabwe</p>
            </address>
            <div className='w-1/2 text-center p-2 slide-in-top'>
              <h4 className='text-main2'>Working Hours</h4>
              <p>Mon - Sat (0700hrs - 1800hs)</p>
              <p>Closed on Sunday</p>
            </div>
          </div>  
        </div>
      </div>
          <BasicAnimations />
    </main>
  );
}