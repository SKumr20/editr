import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/sections/Navbar";
import { ConvexClientProvider } from "../../providers/convex-client-provider"; // Your custom provider

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Editr",
  description: "Simple, Powerful, Customizable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ConvexClientProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
