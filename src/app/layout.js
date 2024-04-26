import { Inter } from "next/font/google";
import "./globals.scss";
import Bootstrap from "@/components/Bootstrap";
import ThemeContext from "@/context/ThemeContext";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finex Healthcare",
  description: "At Finex, we incorporate the use of various analytical tools to read, compile, extract, and visualize clients historic medical report, for making efficient health desicions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body className={inter.className}>
        <Bootstrap />
        <ThemeContext>
          {children}
        </ThemeContext>
      </body>

    </html>
  );
}
