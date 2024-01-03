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
        <Link href="/home">
          <Button>Home</Button>
        </Link>
        <Link href="/profile">
          <Button>profile</Button>
        </Link>
        <div>{children}</div>
      </nav>
    </div>
  );
};

export default MainLayoutPage;
