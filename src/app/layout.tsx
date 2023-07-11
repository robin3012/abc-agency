import { Public_Sans } from "next/font/google";
import "./styles/globals.css";
import TopBar from "@/containers/layout/top-bar";
import Footer from "@/containers/layout/footer";

const font_family = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-dark min-h-screen px-[300px] ${font_family.className}`}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
