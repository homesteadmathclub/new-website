import {Navbar} from "@/components/Navbar.jsx"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "HHS Club Website",
  description: "Template website for various clubs at Homestead High School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-w-full max-w-full flex-col overflow-none scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
