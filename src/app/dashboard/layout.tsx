import Link from "next/link";
import React from "react";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1>Dash Layout</h1>
      <nav>
        <Link href="/new">new</Link>
      </nav>
      {children}
    </section>
  );
};

export default DashLayout;
