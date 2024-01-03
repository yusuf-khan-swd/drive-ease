import Cards from "@/components/Cards/Cards";
import Reservation from "@/components/Reservation/Reservation";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DriveEase | Home",
  description: "Home page of DriveEase",
};

const HomePage = () => {
  return (
    <div>
      <Reservation />
      <Cards />
    </div>
  );
};

export default HomePage;
