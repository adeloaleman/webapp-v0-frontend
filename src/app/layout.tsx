import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";
import "./global.css";

import { AuthProvider } from './auth/auth-context/AuthContext';  // agregado 


export const metadata = {
  title: "Modernize Dark Demo",
  description: "Modernize Dark kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <MyApp>{children}</MyApp>
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
