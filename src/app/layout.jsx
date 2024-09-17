import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  icons:{
    icons:'/images/serenesafaris-1.jpg'
  },
  socialMedia: {
    twitter: '',
    facebook: '',
    linkedin: '',
  },
  contact: {
    email: '',
    phone: '+263772563395',
    address: '',
  },
  copyright: '2024 Serene Safaris. All rights reserved.',
  robots: 'index, follow',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
