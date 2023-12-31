import Link from "next/link";

const MainLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/about">about</Link>
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
