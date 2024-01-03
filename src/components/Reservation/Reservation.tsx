"use client";

import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";

const Reservation = () => {
  const [pickUpDate, setPickUpDate] = useState<Dayjs | null>();
  const [dropOffDate, setDropOffDate] = useState<Dayjs | null>();

  return (
    <div>
      <TextField label="Pick-up Location" variant="outlined" />

      <DatePicker
        label="Pick-up Date"
        disablePast
        views={["day"]}
        value={pickUpDate}
        onChange={(newValue) => setPickUpDate(newValue)}
      />
      <TimePicker label="Pick-up Time" />
      <DatePicker
        label="Drop-off Date"
        disablePast
        views={["day"]}
        value={dropOffDate}
        onChange={(newValue) => setDropOffDate(newValue)}
      />
      <TimePicker label="Drop-off Time" />
    </div>
  );
};

export default Reservation;
