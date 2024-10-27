import React from "react";

import Navbar from "@/components/navigation/navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children};
    </main>
  );
}
