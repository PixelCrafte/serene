import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
