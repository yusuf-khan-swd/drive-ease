"use client";

import { DateCalendar } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";

const FormDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>();

  console.log(value);

  return (
    <div>
      <DatePicker label="Pick-up Date" disablePast views={["day"]} />
      <DateCalendar
        disablePast
        monthsPerRow={3}
        value={value}
        views={["day"]}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default FormDatePicker;
