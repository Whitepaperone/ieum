import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/utils/provider";
import ReduxProviders from "@/redux/provider";
import RouterGuard from "@/utils/route/provider";


const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      ></script>
      <body className="w-[100vw] h-[100vh] bg-brand-baige">
        <Providers>
          <ReduxProviders>
            <RouterGuard>{children}</RouterGuard>
          </ReduxProviders>
        </Providers>
      </body>
    </html>
  );
}
