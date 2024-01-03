"use client";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";

const Reservation = () => {
  const [pickUpDate, setPickUpDate] = useState<Dayjs | null>();

  return (
    <div>
      <DatePicker
        label="Pick-up Date"
        disablePast
        views={["day"]}
        value={pickUpDate}
        onChange={(newValue) => setPickUpDate(newValue)}
      />
      <TimePicker label="Pick-up Time" />
    </div>
  );
};

export default Reservation;
