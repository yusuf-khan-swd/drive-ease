import ResponsiveAppBar from "@/components/ui/ResponsiveAppBar";
import { Button } from "@mui/material";
import Link from "next/link";

const MainLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <nav>
        <Link href="/about" style={{ fontWeight: "bold" }}>
          <Button>about</Button>
        </Link>
        <Link href="/home">Home</Link>
        <Link href="/profile">profile</Link>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/dashboard/new">dashboard/new</Link>
        <div>{children}</div>
      </nav>
    </div>
  );
};

export default MainLayoutPage;
