import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import Providers from "./(components)/_Providers";
import { StyledComponentsRegistry } from "@/common/styles/StyledComponentsRegistry";
import { appMetaData } from "@/common/data/appMetaData";

import "../common/assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/assets/css/globals.css";
import "../common/assets/scss/global.scss";

export const metadata: Metadata = {
  title: appMetaData.title,
  description: appMetaData.description,
  authors: appMetaData.authors,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <NextTopLoader color="#6259ca" height={5} showSpinner={false} />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
