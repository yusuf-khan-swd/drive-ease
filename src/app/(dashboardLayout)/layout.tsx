import Dashboard from "@/components/ui/dashboard/Dashboard";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/profile">Profile</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <div>{children}</div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
};

export default DashboardLayout;
