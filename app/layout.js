import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { META_DESCRIPTION, META_KEYWORDS, META_TITLE } from "./constants";

export const metadata = {
  title: { META_TITLE },
  description: { META_DESCRIPTION },
  keywords: { META_KEYWORDS },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
