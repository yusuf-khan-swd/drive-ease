import Reservation from "@/components/Reservation/Reservation";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DriveEase | Home",
  description: "Home page of DriveEase",
};

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Reservation />
    </div>
  );
};

export default HomePage;
